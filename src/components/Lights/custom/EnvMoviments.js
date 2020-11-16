/**
 * To-do: Create custom behaviors
 */
import React, {useRef, useState } from "react"

import {useFrame} from 'react-three-fiber'

function EnvMoviments () {
  return (
    <group>
      <ambientLight intensity={0.9} />
      <pointLight intensity={1.12} position={[0, 0, 0]} />
    </group>
  );
}
  
export default EnvMoviments