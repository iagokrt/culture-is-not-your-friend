import React, { useMemo } from 'react';
import { Canvas } from "react-three-fiber";
import Environment from "../../components/Environment";
/**import Lights from "../../components/Lights"; // no lights tho? */

import { MapControls, Octahedron } from 'drei';

const NUM = 3

function Dark() {
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
    <Canvas >
      <Environment />
      <MapControls />
      <group position={[0, 0, -10]}>
        {positions.map(({ id, position }) => (
          <Octahedron key={id} position={position} args={[1, 1]}>
            <meshToonMaterial attach="material" color="white" />
          </Octahedron>
        ))}
      </group>
    </Canvas>
  );
}

export default Dark;