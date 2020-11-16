import React, { useRef } from 'react';
import { Canvas, useFrame } from "react-three-fiber";
import Lights from "../Lights";
import Ambient from "../Ambient";

import {AmbientLight, AmbientLightProbe, DirectionalLight, 
        HemisphereLight, PointLight, RectAreaLight,
         SpotLight, HemisphereLightHelper } from 'three'

import {  } from 'drei';

function Sphere(props) {
  const mesh = useRef()

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y -= 0.01))

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[1.5, 1.5, 1.5]}
    >
      <icosahedronGeometry args={[1, 5, 1]} />
      <meshStandardMaterial color={'crimson'} />
    </mesh>
  )
}

function ControlOptions() {
  return (
    <Canvas>
      <Lights />
      <TrackballControls />
      <Ambient />
      <Sphere position={[-1.2, 0, 0]} />
    </Canvas>
  );
}

export default ControlOptions;