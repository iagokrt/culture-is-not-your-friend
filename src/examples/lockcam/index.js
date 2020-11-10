import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from "react-three-fiber";
import Lights from "./Lights";
import Ambient from "./Ambient";

import { useGLTFLoader } from 'drei';

/* Load a model Example */
function Model({ url, meshScale }) {
  const gltf = useGLTFLoader(url, true);
  return <primitive object={gltf.scene} dispose={null} />;
}

/*Construct a mesh based on the Model instead of passing standardMaterial and BufferGeometry  */
const Shape = ({modelUrl}) => {
  useFrame(() => (ref.current.rotation.y = ref.current.rotation.y  += 0.006));
  
  const ref = useRef();

  return (
    <group position={[0, 0, 0]}>
      <mesh ref={ref} position={[0, 0, 0]}>
        <Model url={modelUrl} />
      </mesh>
  </group>
  )
}

function Lockcam() {
  return (
    <Canvas  concurrent camera={[0, 0, 0]}>

    <Suspense fallback={null}>
        <Shape modelUrl={'/sphere.gltf'} />
        <Lights />
        <Ambient />
      </Suspense>
    </Canvas>
  );
}

export default Lockcam;