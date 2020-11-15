import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from "react-three-fiber";
import Lights from "../../components/Options/ligthe";
import Ambient from "../../components/Ambient";

import { TrackballControls, Icosahedron } from 'drei';

const NUM = 50

function MultipleMashes() {
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
    <Canvas orthographic>
      <Lights />
      <TrackballControls />
      <Ambient />
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

export default MultipleMashes