import React, { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
import Globe, { GlobeInstance } from 'globe.gl';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useISSCoordinates } from '../utils/hooks';

import scene from '../images/scene.glb';
import STARFIELD_URL from '../images/img.jpg';
import EARTH_TEXTURE_URL from '../images/earth-blue-marble.jpg';
import CLOUDS_TEXTURE_URL from '../images/fair_clouds_4k.png';

const CLOUDS_ALT = 0.05;
const CLOUDS_ROTATION_SPEED = 0.02; // deg/frame
const ISS_SIZE = 2.5;

const Globey = () => {
  const [ISSmodel, setISSmodel] = useState<THREE.Group | null>(null);
  const globeWrapper = useRef<HTMLDivElement>(null);
  const world = useRef<GlobeInstance | null>();

  const issLocation = useISSCoordinates();

  useEffect(() => {
    const loader = new GLTFLoader();

    loader.load(
      scene,
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
    const globeWrapperElement = globeWrapper.current;

    const currentWorld = Globe({ animateIn: false })(globeWrapperElement)
      .globeImageUrl(EARTH_TEXTURE_URL) // https://unpkg.com/three-globe@2.24.4/example/img/earth-blue-marble.jpg
      .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
      .objectLat('lat')
      .objectLng('lng')
      .objectAltitude('alt')
      .objectLabel('name');

    let animationFrame: number | null = null;
    const observer = new ResizeObserver(() => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const renderer = currentWorld.renderer();
        const camera = currentWorld.camera() as any;
        camera.aspect =
          globeWrapperElement.clientWidth / globeWrapperElement.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(
          globeWrapperElement.clientWidth,
          globeWrapperElement.clientHeight,
        );
        renderer.setPixelRatio(window.devicePixelRatio);
      });
    });

    observer.observe(globeWrapperElement);

    console.log(currentWorld.globeMaterial);

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
    new THREE.TextureLoader().load(CLOUDS_TEXTURE_URL, (cloudsTexture) => {
      const clouds = new THREE.Mesh(
        new THREE.SphereBufferGeometry(
          currentWorld.getGlobeRadius() * (0.955 + CLOUDS_ALT),
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
        new THREE.SphereGeometry(currentWorld.getGlobeRadius() * 10, 13, 13),
        new THREE.MeshBasicMaterial({
          map: THREE.ImageUtils.loadTexture(STARFIELD_URL),
          side: THREE.BackSide,
        }),
      ),
    );

    return () => {
      observer.disconnect();
    };
  }, [ISSmodel]);

  useEffect(() => {
    if (world.current == null) return;

    console.log('Update!');

    const objectData = [
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

  return (
    <div id="globeViz" style={{ overflow: 'hidden' }} ref={globeWrapper}></div>
  );
};

export default Globey;
