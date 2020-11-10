import React, { useRef } from 'react';
import { Canvas, useFrame } from "react-three-fiber";
import Lights from "./Lights";
import Ambient from "./Ambient";

import { MapControls } from 'drei';

function Sphere(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[1.5, 1.5, 1.5]}
    >
      <sphereBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'crimson'} />
    </mesh>
  )
}

function Dark() {
  return (
    <Canvas>
      <Lights />
      <Sphere position={[-1.2, 0, 0]} />
      <MapControls />
      <Ambient />
    </Canvas>
  );
}

export default Dark;