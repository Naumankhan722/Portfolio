"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Sphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Load the equirectangular map texture
  const colorMap = useLoader(TextureLoader, "/map.png");

  // Rotate the globe on every frame
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15; // Adjust speed as needed
    }
  });

  return (
    <mesh ref={meshRef} rotation={[0.3, 8.7, 0]}>
      <sphereGeometry args={[2.5, 64, 64]} />
      <meshStandardMaterial
        map={colorMap}
        // color="#0048ff0c" // Give it a blue tint matching the design
        emissive="rgba(0, 42, 255, 0.65)" // Slight glow
        emissiveIntensity={0.2}
        wireframe={false}
        transparent={true}
        opacity={0.9}
      />
    </mesh>
  );
}

export default function Globe() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <Suspense fallback={null}>
          <Sphere />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>
    </div>
  );
}
