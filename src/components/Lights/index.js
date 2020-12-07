
import React from "react";

export default () => {

  return (
    <group>
      <ambientLight intensity={0.9} />
      <pointLight intensity={1.12} position={[0, 0, 0]} />
    </group>
  );
};
