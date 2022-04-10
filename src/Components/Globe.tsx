import React, { useEffect, useState } from "react";
import * as THREE from 'three';
import Globe from 'globe.gl';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Group } from "three";
import { LightstreamerClient, Subscription } from "lightstreamer-client-web";
import { LLA, Vector3 } from "../math/vector";
import { ecefToLla } from "../math/math";

type Controls = {
  autoRotate: Boolean;
  autoRotateSpeed: Number;
};

const EARTH_RADIUS_KM = 6371; // km
const SAT_SIZE = 100; // km
const TIME_STEP = 3 * 1000; // per frame
const ISS_SIZE = 2.75;

const DATA = ["USLAB000032", "USLAB000033", "USLAB000034"];

function Globey() {

  const [ISSmodel, setISSmodel] = useState<Group | null>(null);

  const elm = document.getElementById('globeViz');

  const elementExists = elm != null;

  const [pos, setPos] = useState<Vector3>({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const client = new LightstreamerClient(
      "https://push.lightstreamer.com",
      "ISSLIVE"
    );

    client.connect();

    const subscription = new Subscription("MERGE", DATA, ["Value"]);
    client.subscribe(subscription);

    subscription.addListener({
      onItemUpdate: (update) => {
        switch (update.getItemName()) {
          case "USLAB000032":
            setPos((p) => ({ ...p, x: +update.getValue("Value") * 1000 }));
            break;
          case "USLAB000033":
            setPos((p) => ({ ...p, y: +update.getValue("Value") * 1000 }));
            break;
          case "USLAB000034":
            setPos((p) => ({ ...p, z: +update.getValue("Value") * 1000 }));
            break;
        }
      },
    });

    return () => {
      client.disconnect();
    };
  }, []);

  useEffect(() => {
    const loader = new GLTFLoader();

    loader.load( './scene.glb', function ( gltf ) {

      gltf.scene.scale.set(ISS_SIZE, ISS_SIZE, ISS_SIZE);
    
      setISSmodel(gltf.scene);
    
    }, undefined, function ( error ) {
    
      console.error( error );
    
    } );
  }, []);

  useEffect(() => {

    if (elm == null) return;
    if (ISSmodel == null) return;

    const world = Globe({ animateIn: false })
      (elm)
      .globeImageUrl('./earth-blue-marble.jpg') // https://unpkg.com/three-globe@2.24.4/example/img/earth-blue-marble.jpg
      .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
      .objectLat('lat')
      .objectLng('lng')
      .objectAltitude('alt')
      .objectLabel('name');

    const satGeometry = new THREE.OctahedronGeometry(SAT_SIZE * world.getGlobeRadius() / EARTH_RADIUS_KM / 2 * 5, 0);
    const satMaterial = new THREE.MeshLambertMaterial({ color: 'palegreen', transparent: true, opacity: 0.7 });
    //world.objectThreeObject(() => new THREE.Mesh(satGeometry, satMaterial));
    world.objectThreeObject(() => ISSmodel);

    // Auto-rotate
    const controls = world.controls() as OrbitControls;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.35;
    controls.enableZoom = false;

    // Add clouds sphere
    const CLOUDS_IMG_URL = './fair_clouds_4k.png'; // from https://github.com/turban/webgl-earth
    const CLOUDS_ALT = 0.05;
    const CLOUDS_ROTATION_SPEED = 0.02; // deg/frame

    new THREE.TextureLoader().load(CLOUDS_IMG_URL, cloudsTexture => {
      const clouds = new THREE.Mesh(
        new THREE.SphereBufferGeometry(world.getGlobeRadius() * (1 + CLOUDS_ALT), 75, 75),
        new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true })
      );
      world.scene().add(clouds);

      (function rotateClouds() {
        clouds.rotation.x += CLOUDS_ROTATION_SPEED * Math.PI / 180;
        clouds.rotation.y += CLOUDS_ROTATION_SPEED * Math.PI / 180;
        clouds.rotation.z += CLOUDS_ROTATION_SPEED * Math.PI / 180;
        requestAnimationFrame(rotateClouds);
      })();
    });

    
    world.scene().add(new THREE.Mesh(
      new THREE.SphereGeometry(world.getGlobeRadius() * 10, world.getGlobeRadius() * 0.01, world.getGlobeRadius() * 0.01), 
      new THREE.MeshBasicMaterial({
        map: THREE.ImageUtils.loadTexture("./img.jpg"), 
        side: THREE.BackSide
      })
    ));


  }, [elementExists, ISSmodel]);

  useEffect(() => {
    const issLoc = ecefToLla(pos);
    console.log(pos, issLoc);
    const objectData: unknown = [{
      lat: issLoc.lat,
      lng: issLoc.lon,
      alt: 0.3,
      name: `ISS ${issLoc.lat} ${issLoc.lon}`,
      satrec: true
    }]

    world.objectsData(objectData as object[]);
  }, [pos]);

  return (
    <div id="globeViz"></div>
  )
}

export default Globey;
