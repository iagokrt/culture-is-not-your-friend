import React, { useRef } from 'react';

// Instead of using three Canvas, we'll use for now on the --> R3F Canvas
import { Canvas, useFrame } from "react-three-fiber";

// default Environment & default Lighting
import Lights from '../../../components/Lights';
import Ambient from '../../../components/Ambient';

// drei have some cool boilerplate and dope visual effects to use: https://drei-storybook.netlify.app/
import { MapControls } from 'drei';


// elements, objects, lights, whatever the h*#k you want
function Object3D(props) {
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
      <icosahedronBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'crimson'} />
    </mesh>
  )
}

function Dark() {
  return (
    <Canvas>
      <Lights />
      <Ambient />

      <Object3D position={[-1.2, 0, 0]} />

      <MapControls />
    </Canvas>
  );
}

export default Dark;