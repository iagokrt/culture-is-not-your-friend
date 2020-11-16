import React, { useRef } from 'react';

import { Canvas, useFrame } from "react-three-fiber";

import Lights from "../../components/Lights";
import Environment from "../../components/Environment/custom/EnvLavafire";

import { TrackballControls } from 'drei';

function Spin() {
  return (
    <Canvas>
      <Lights />
      <Environment />
      <TrackballControls />
    </Canvas>
  );
}

export default Spin;