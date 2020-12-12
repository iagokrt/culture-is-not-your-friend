import React from "react";
import { BackSide } from "three";

function Environment () {
  return (
    <mesh>
      <sphereBufferGeometry args={[5, 10, 10]} attach="geometry" />
      <meshStandardMaterial
        color={'crimson'}
        attach="material"
        side={BackSide}
        metalness={0.12}
      />
    </mesh>
  );
};

export default Environment