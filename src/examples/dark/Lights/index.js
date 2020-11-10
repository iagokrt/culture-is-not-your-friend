
import React from "react";

export default () => {
  return (
    <group>
      <ambientLight intensity={0.2} />
      <pointLight intensity={1.12} position={[0, 0, 0]} />
      <pointLight position={[0, -10, 0]} intensity={1.1} />
    </group>
  );
};
