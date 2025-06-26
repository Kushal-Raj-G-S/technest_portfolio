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
import { Suspense, useRef, useState } from "react";
import * as THREE from "three";
import { useSpring, a } from "@react-spring/three";

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

// Create a FloatingText component
function FloatingText() {
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

export default function ThreeSection() {
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
            config={{ mass: 4, tension: 300 }} 
            rotation={[0, 0, 0]} 
            polar={[-Math.PI / 4, Math.PI / 4]} 
            azimuth={[-Math.PI / 4, Math.PI / 4]}
          >
            <ShinyGlassSphere />
            <SparklingRing />
            <FloatingText />
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

// Advanced particle system with custom shaders
function ParticleField() {
  const count = 1000;
  const particlesRef = useRef();
  
  useFrame((state) => {
    if (!particlesRef.current) return;
    // Animate particles based on time
    const time = state.clock.getElapsedTime();
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      particlesRef.current.geometry.attributes.position.array[i3] += Math.sin(time + i) * 0.01;
      particlesRef.current.geometry.attributes.position.array[i3 + 1] += Math.cos(time + i) * 0.01;
    }
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Random positions in a sphere
      const radius = 5 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      // Gradient colors
      colors[i * 3] = 0.5 + 0.5 * Math.sin(theta);  // r
      colors[i * 3 + 1] = 0.5 + 0.5 * Math.cos(phi); // g
      colors[i * 3 + 2] = 0.8; // b
    }
    
    return [positions, colors];
  }, [count]);

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          count={count} 
          itemSize={3} 
          array={positions} 
        />
        <bufferAttribute 
          attach="attributes-color" 
          count={count} 
          itemSize={3} 
          array={colors} 
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.1} 
        vertexColors 
        transparent 
        opacity={0.8} 
        sizeAttenuation
      />
    </points>
  );
}

// Interactive Floating 3D Text
function AnimatedFloatingText() {
  const textRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  const { scale, rotation, color } = useSpring({
    scale: hovered ? [1.2, 1.2, 1.2] : [1, 1, 1],
    rotation: hovered ? [0, Math.PI / 4, 0] : [0, 0, 0],
    color: hovered ? "#ff9500" : "#00bfff"
  });
  
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2 + 0.2;
    }
  });
  
  return (
    <animated.mesh
      ref={textRef}
      scale={scale}
      rotation={rotation}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      position={[0, 0.2, -0.2]}
    >
      <Text3D 
        font="/fonts/Inter_Bold.json"
        size={0.5} 
        height={0.1} 
        curveSegments={32}
        bevelEnabled
        bevelSize={0.01}
        bevelThickness={0.02}
      >
        {"KUSHAL"}
        <animated.meshStandardMaterial 
          color={color} 
          metalness={0.8} 
          roughness={0.1} 
        />
      </Text3D>
    </animated.mesh>
  );
}

// Morphing shape with distortion
function MorphingShape() {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
    }
  });
  
  const intensity = useSpring({
    distort: hovered ? 0.8 : 0.3,
    speed: hovered ? 2 : 1,
    config: { mass: 2, tension: 300 }
  });
  
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh 
        ref={meshRef}
        castShadow 
        receiveShadow 
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <dodecahedronGeometry args={[1.2, 0]} />
        <MeshDistortMaterial 
          color="#ff00ff" 
          distort={intensity.distort} 
          speed={intensity.speed} 
          metalness={0.9}
          roughness={0.1}
          envMapIntensity={1}
        />
      </mesh>
    </Float>
  );
}

export default function ThreeSection() {
  return (
    <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg bg-black/40">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} shadows>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
        <Environment preset="city" />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0.5} fade speed={1} />
        <AnimatedTorusKnot />
        <ParallaxLayers />
        <ContactShadows position={[0, -1.2, 0]} opacity={0.5} width={10} height={10} blur={2} far={1.5} />
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
}
