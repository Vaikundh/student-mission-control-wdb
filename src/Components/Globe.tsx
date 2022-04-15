import React, { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
import Globe, { GlobeInstance } from 'globe.gl';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Group } from 'three';
import { useISSCoordinates } from '../utils/hooks';

const ISS_SIZE = 2.75;

const Globey = () => {
  const [ISSmodel, setISSmodel] = useState<Group | null>(null);
  const globeWrapper = useRef<HTMLDivElement>(null);
  const world = useRef<GlobeInstance | null>();

  const issLocation = useISSCoordinates();

  useEffect(() => {
    const loader = new GLTFLoader();

    loader.load(
      './scene.glb',
      function (gltf) {
        gltf.scene.scale.set(ISS_SIZE, ISS_SIZE, ISS_SIZE);
        setISSmodel(gltf.scene);
      },
      undefined,
      function (error) {
        console.error(error);
      },
    );
  }, []);

  useEffect(() => {
    if (!ISSmodel || !globeWrapper.current) return;

    const currentWorld = Globe({ animateIn: false })(globeWrapper.current)
      .globeImageUrl('./earth-blue-marble.jpg') // https://unpkg.com/three-globe@2.24.4/example/img/earth-blue-marble.jpg
      .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
      .objectLat('lat')
      .objectLng('lng')
      .objectAltitude('alt')
      .objectLabel('name');

    world.current = currentWorld;

    currentWorld
      .objectThreeObject(ISSmodel)
      .customThreeObjectUpdate((obj, d: any) =>
        Object.assign(
          obj.position,
          currentWorld.getCoords(d.lat, d.lng, d.alt),
        ),
      );

    // Auto-rotate
    const controls = currentWorld.controls() as OrbitControls;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.35;
    controls.enableZoom = false;

    // Add clouds sphere
    const CLOUDS_IMG_URL = './fair_clouds_4k.png'; // from https://github.com/turban/webgl-earth
    const CLOUDS_ALT = 0.05;
    const CLOUDS_ROTATION_SPEED = 0.02; // deg/frame

    new THREE.TextureLoader().load(CLOUDS_IMG_URL, (cloudsTexture) => {
      const clouds = new THREE.Mesh(
        new THREE.SphereBufferGeometry(
          currentWorld.getGlobeRadius() * (1 + CLOUDS_ALT),
          75,
          75,
        ),
        new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true }),
      );
      currentWorld.scene().add(clouds);

      (function rotateClouds() {
        clouds.rotation.x += (CLOUDS_ROTATION_SPEED * Math.PI) / 180;
        clouds.rotation.y += (CLOUDS_ROTATION_SPEED * Math.PI) / 180;
        clouds.rotation.z += (CLOUDS_ROTATION_SPEED * Math.PI) / 180;
        requestAnimationFrame(rotateClouds);
      })();
    });

    currentWorld.scene().add(
      new THREE.Mesh(
        new THREE.SphereGeometry(currentWorld.getGlobeRadius() * 10, 30, 30),
        new THREE.MeshBasicMaterial({
          map: THREE.ImageUtils.loadTexture('./img.jpg'),
          side: THREE.BackSide,
        }),
      ),
    );
  }, [ISSmodel]);

  useEffect(() => {
    if (world.current == null) return;

    console.log('Update!');

    const objectData: object[] = [
      {
        lat: issLocation.lat,
        lng: issLocation.lon,
        alt: 0.3,
        name: `ISS ${issLocation.lat} ${issLocation.lon}`,
        satrec: true,
      },
    ];

    world.current.objectsData(objectData);
  }, [issLocation]);

  return <div id="globeViz" ref={globeWrapper}></div>;
};

export default Globey;
