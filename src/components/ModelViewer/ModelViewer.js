import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, PerspectiveCamera } from '@react-three/drei';

function Model({ addLighting, color = 'white' }) {
  const modelRef = useRef();
  const { scene } = useGLTF(process.env.PUBLIC_URL + '/assets/Burnt-Bacon.glb');

  useFrame(() => {
    modelRef.current.rotation.y += 0.005;
  });

  // Apply color
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.color.set(color); // Use the color prop
      }
    });
  }, [color, scene]);

  return <primitive object={scene} ref={modelRef} scale={.2} />;
}

function ModelViewer({ addLighting = true, modelColor }) {
  return (
    <Canvas style={{ width: '100%', height: '400px' }}>
      <PerspectiveCamera makeDefault position={[0, 7, 80]} fov={12} />
      {addLighting && (
        <>
          <ambientLight intensity={0.3} />
          {/* Light from above towards the front */}
          <spotLight position={[0, 10, 5]} angle={1} intensity={14.5} />
          {/* Additional spotlight from in front of the object */}
          <spotLight position={[0, 0, 10]} angle={1} penumbra={1} intensity={10.5} />
        </>
      )}
      <Suspense fallback={null}>
        <Model addLighting={addLighting} color={modelColor} />
      </Suspense>
    </Canvas>
  );
}


export default ModelViewer;

