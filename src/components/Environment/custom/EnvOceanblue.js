import React from "react";
import { BackSide } from "three";

// from three: geometries Types, BufferGeometry & Material Types

function Environment() {
  return (
    <mesh>
      <sphereBufferGeometry args={[150, 200, 200]} attach="geometry" />
      <meshStandardMaterial
        color={0x090a20}
        attach="material"
        side={BackSide}
        metalness={1}
      />
    </mesh>
  );
};

export default Environment