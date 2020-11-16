import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import { useSpring, a } from "react-spring/three";
import {  MeshWobbleMaterial } from "drei";
import { BackSide, FrontSide, DoubleSide } from "three";

const Ambient = ({color, speed, args}) => {
  const mesh = useRef();

  useFrame((mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
}

function EnvLavafire() {
  return (
    <a.mesh>
      <sphereBufferGeometry args={[10, 11, 12]} attach="geometry" />
      <MeshWobbleMaterial
        color={'#a12620'}
        attach="material"
        side={DoubleSide}
        metalness={0.42}
        roughness={0.7}
        factor={1}
      />
    </a.mesh>
  );
};

export default EnvLavafire