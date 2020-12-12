import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import { useSpring, a } from "react-spring/three";
import {  MeshWobbleMaterial } from "drei";
import { BackSide } from "three";

const Ambient = ({color, speed, args}) => {
  const mesh = useRef();

  useFrame((mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
}

export default () => {
  return (
    <a.mesh>
      <sphereBufferGeometry args={[10, 11, 12]} attach="geometry" />
      <MeshWobbleMaterial
        color={'#7159c1'}
        attach="material"
        side={BackSide}
        metalness={0.42}
      />
    </a.mesh>
  );
};
