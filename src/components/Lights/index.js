
import React from "react";

// from three: LightTypes

function Lights () {
  return (
    <group>
      <ambientLight intensity={0.9} />
      <pointLight intensity={1.12} position={[0, 0, 0]} />
    </group>
  );
}
  
export default Lights