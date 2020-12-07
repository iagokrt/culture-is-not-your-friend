import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from "react-three-fiber";
import Lights from "../Ambient/index";
import Ambient from '../Ambient/index'

import { TrackballControls } from 'drei';


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



function AvailableCameras() {
  return (
    <Canvas>
        <Ambient />
        <Lights />
        <Icosaedron pos={[1,1,1]} />
        <TrackballControls />
    </Canvas>
  );
}

export default AvailableCameras;