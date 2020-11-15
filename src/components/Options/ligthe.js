
import React from "react";

export default () => {
  
  return (
    <group>
      <fog attach="fog" args={['white', 0, 40]} />
      <ambientLight intensity={1} />
      <pointLight intensity={2} position={[0, 5, 10]} />
    </group>
  );
};
