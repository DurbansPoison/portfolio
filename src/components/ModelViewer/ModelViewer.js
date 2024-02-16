import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function Model() {
  const modelRef = useRef();
  const { scene } = useGLTF('/assets/LOGO.glb');

  useFrame(() => {
    modelRef.current.rotation.y += 0.005; // Adjust rotation speed here
  });

  // Adjust the model's color
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.color.set('white'); // Set to any preferred color
      }
    });
  }, [scene]);

  return <primitive object={scene} ref={modelRef} scale={1} />; // Adjust scale as needed
}

function ModelViewer() {
  return (
    <Canvas style={{ width: '100%', height: '200px' }}> {/* Adjust Canvas size as needed */}
      <PerspectiveCamera makeDefault position={[0, 0, 15]} /> {/* Adjust camera position as needed */}
      <ambientLight intensity={3} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
}

export default ModelViewer;
