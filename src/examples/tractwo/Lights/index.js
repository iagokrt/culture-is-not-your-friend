
import React from "react";

export default () => {

  return (
    <group>
      <ambientLight intensity={0.5} />
      <pointLight position={[-10, 0, -20]} intensity={0.5} />
      <pointLight position={[0, -10, 0]} intensity={1.5} />
    </group>
  );
};
