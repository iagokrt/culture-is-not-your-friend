import React from "react";
import { BackSide } from "three";

export default () => {
  return (
    <mesh>
      <sphereBufferGeometry args={[150, 200, 200]} attach="geometry" />
      <meshStandardMaterial
        color={0x090a20}
        attach="material"
        side={BackSide}
        metalness={0.5}
      />
    </mesh>
  );
};
