import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from "react-three-fiber";
import Lights from "../../Lights";
import Ambient from "../../Ambient";

import { TrackballControls, MeshDistortMaterial, Icosahedron } from 'drei';

const NUM = 3

function Bobble() {
  return (
    <Icosahedron args={[1, 4]}>
      <MeshDistortMaterial
        attach="material"
        color="black"
        speed={7}
        distort={0.7}
        radius={0.77}
      />
    </Icosahedron>
  )
}

function MaterialOptions() {
  const positions = useMemo(() => {
    const pos = []
    const half = (NUM -1) / 2

    for (let x = 0; x < NUM; x++) {
      for (let y = 0; y < NUM; y++) {
        pos.push({
          id: `${x}=${y}`,
          position: [(x - half) * 4, (y - half) * 4, 0]
        })
      }
    }

    return pos
  }, [])
  
  return (
    <Canvas orthographic >
      <Lights />
      <TrackballControls />
      <Ambient />
      <Bobble/>
      <group position={[0, 0, -10]}>
      {positions.map(({ id, position }) => (
        <Icosahedron key={id} position={position} args={[1, 1]}>
          <meshBasicMaterial attach="material" color="white" wireframe />
        </Icosahedron>
      ))}
    </group>
    </Canvas>
  );
}

export default MaterialOptions;