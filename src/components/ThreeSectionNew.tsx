"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { 
  OrbitControls, 
  Float, 
  Stars, 
  Environment, 
  ContactShadows, 
  MeshDistortMaterial,
  Sparkles,
  Text,
  PresentationControls,
  MeshWobbleMaterial
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

// Create a ShinyGlassSphere component
function ShinyGlassSphere() {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.y = time * 0.15;
      mesh.current.rotation.x = time * 0.1;
    }
  });

  return (
    <Float speed={4} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={mesh} castShadow>
        <sphereGeometry args={[1.2, 128, 128]} />
        <MeshDistortMaterial
          color="#88cfff"
          envMapIntensity={0.8}
          clearcoat={1}
          clearcoatRoughness={0}
          metalness={0.9}
          roughness={0.1}
          distort={0.4}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

// Create a SparklingRing component
function SparklingRing() {
  const ring = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (ring.current) {
      ring.current.rotation.z = time * 0.3;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <mesh ref={ring} castShadow receiveShadow>
        <torusGeometry args={[2.2, 0.15, 48, 100]} />
        <MeshWobbleMaterial 
          color="#ff009d" 
          factor={0.3} 
          speed={2} 
          roughness={0} 
          metalness={0.8} 
          envMapIntensity={1} 
        />
      </mesh>
      <Sparkles count={80} scale={6} size={1.5} color="#fff" />
    </group>
  );
}

// Create a TextElement component
function TextElement() {
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
      <group position={[0, -2.2, 0]}>
        <Text
          fontSize={0.6}
          color="#ffffff"
          font="bold"
          anchorX="center"
          anchorY="middle"
          castShadow
        >
          KUSHAL RAJ G S
        </Text>
      </group>
    </Float>
  );
}

export default function ThreeSectionNew() {
  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-2xl bg-black/40">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 2]} shadows>
        <color attach="background" args={['#030014']} />
        <ambientLight intensity={0.2} />
        <spotLight position={[5, 10, 7]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        <Suspense fallback={null}>
          <PresentationControls 
            global 
            snap 
            rotation={[0, 0, 0]} 
            polar={[-Math.PI / 4, Math.PI / 4]} 
            azimuth={[-Math.PI / 4, Math.PI / 4]}
          >
            <ShinyGlassSphere />
            <SparklingRing />
            <TextElement />
          </PresentationControls>
          
          <Environment preset="city" />
          <ContactShadows 
            position={[0, -3, 0]} 
            opacity={0.4} 
            scale={10} 
            blur={2} 
            far={3} 
            resolution={1024} 
          />
        </Suspense>
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0.5} fade speed={2} />
      </Canvas>
    </div>
  );
}
