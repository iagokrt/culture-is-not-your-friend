import React, { useRef } from 'react';

import { Canvas, useFrame } from "react-three-fiber";

import Ambient from "../../components/Ambient";
import Lights from "../../components/Lights";

import { TrackballControls, MeshWobbleMaterial, MeshDistortMaterial } from 'drei';

function Icosaedron(props) {

  const mesh = useRef()

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return (
    <mesh 
      {...props}
      ref={mesh}
      scale={[0.8, 0.8, 0.8]}
    >
        <icosahedronBufferGeometry />
        <meshStandardMaterial color={'#fabd3b'} />
      </mesh>
  )
}

function Round() {
  return (
    <Canvas concurrent>
      <Lights />
      <Ambient />
      <Icosaedron position={[-3.2, 0, 0]} />

      <mesh>
        <planeBufferGeometry />
        <MeshDistortMaterial attach="material" color="crimson" distort={1} speed={2.4} radius={0.2} />
      </mesh>
      
      <Icosaedron position={[3.2, 0, 0]} />

      <TrackballControls />
    </Canvas>
  );
}

export default Round;