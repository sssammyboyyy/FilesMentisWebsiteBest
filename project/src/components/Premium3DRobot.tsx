import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Text, Float } from '@react-three/drei';
import * as THREE from 'three';

// Premium Robot Mesh Component
function PremiumRobotMesh({ hover, clicked }: { hover: boolean; clicked: boolean }) {
  const meshRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);
  const leftArmRef = useRef<THREE.Mesh>(null);
  const rightArmRef = useRef<THREE.Mesh>(null);
  const eyeLeftRef = useRef<THREE.Mesh>(null);
  const eyeRightRef = useRef<THREE.Mesh>(null);

  // Premium metallic material
  const metalMaterial = new THREE.MeshStandardMaterial({
    color: '#8dd3c7',
    metalness: 0.9,
    roughness: 0.1,
    envMapIntensity: 1.5,
  });

  const chromeMaterial = new THREE.MeshStandardMaterial({
    color: '#ffffff',
    metalness: 1,
    roughness: 0,
    envMapIntensity: 2,
  });

  const glowMaterial = new THREE.MeshStandardMaterial({
    color: '#00bfff',
    emissive: '#00bfff',
    emissiveIntensity: hover ? 0.3 : 0.1,
  });

  // Animations
  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
      
      // Subtle rotation when not being controlled
      if (!hover) {
        meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      }
    }

    if (headRef.current) {
      // Head slight movement
      headRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }

    if (leftArmRef.current && rightArmRef.current) {
      // Arm movements
      const armMove = hover ? 0.3 : Math.sin(state.clock.elapsedTime) * 0.05;
      leftArmRef.current.rotation.z = -armMove;
      rightArmRef.current.rotation.z = armMove;
    }

    if (eyeLeftRef.current && eyeRightRef.current) {
      // Blinking effect
      const blink = Math.sin(state.clock.elapsedTime * 3) > 0.95 ? 0.1 : 1;
      eyeLeftRef.current.scale.y = blink;
      eyeRightRef.current.scale.y = blink;
    }
  });

  return (
    <group 
      ref={meshRef}
      scale={hover ? 1.1 : 1}
      rotation={clicked ? [0, Math.PI * 2, 0] : [0, 0, 0]}
    >
      {/* Robot Head */}
      <mesh ref={headRef} position={[0, 2, 0]} material={chromeMaterial}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
      </mesh>

      {/* Eyes */}
      <mesh ref={eyeLeftRef} position={[-0.4, 2.2, 0.76]} material={glowMaterial}>
        <sphereGeometry args={[0.15, 16, 16]} />
      </mesh>
      <mesh ref={eyeRightRef} position={[0.4, 2.2, 0.76]} material={glowMaterial}>
        <sphereGeometry args={[0.15, 16, 16]} />
      </mesh>

      {/* Antenna */}
      <mesh position={[0, 3, 0]} material={metalMaterial}>
        <cylinderGeometry args={[0.05, 0.05, 0.5]} />
      </mesh>
      <mesh position={[0, 3.4, 0]} material={glowMaterial}>
        <sphereGeometry args={[0.1, 16, 16]} />
      </mesh>

      {/* Body */}
      <mesh position={[0, 0.5, 0]} material={metalMaterial}>
        <boxGeometry args={[2, 2.5, 1.2]} />
      </mesh>

      {/* Chest Panel */}
      <mesh position={[0, 0.8, 0.61]} material={glowMaterial}>
        <boxGeometry args={[1.2, 0.8, 0.1]} />
      </mesh>

      {/* Arms */}
      <mesh ref={leftArmRef} position={[-1.5, 0.8, 0]} material={metalMaterial}>
        <capsuleGeometry args={[0.3, 1.5]} />
      </mesh>
      <mesh ref={rightArmRef} position={[1.5, 0.8, 0]} material={metalMaterial}>
        <capsuleGeometry args={[0.3, 1.5]} />
      </mesh>

      {/* Hands */}
      <mesh position={[-1.5, -0.2, 0]} material={chromeMaterial}>
        <sphereGeometry args={[0.35, 16, 16]} />
      </mesh>
      <mesh position={[1.5, -0.2, 0]} material={chromeMaterial}>
        <sphereGeometry args={[0.35, 16, 16]} />
      </mesh>

      {/* Legs */}
      <mesh position={[-0.6, -1.5, 0]} material={metalMaterial}>
        <capsuleGeometry args={[0.35, 2]} />
      </mesh>
      <mesh position={[0.6, -1.5, 0]} material={metalMaterial}>
        <capsuleGeometry args={[0.35, 2]} />
      </mesh>

      {/* Feet */}
      <mesh position={[-0.6, -2.8, 0.3]} material={chromeMaterial}>
        <boxGeometry args={[0.6, 0.3, 1]} />
      </mesh>
      <mesh position={[0.6, -2.8, 0.3]} material={chromeMaterial}>
        <boxGeometry args={[0.6, 0.3, 1]} />
      </mesh>
    </group>
  );
}

// Floating AI Particles
function AIParticles() {
  const particlesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={particlesRef}>
      {Array.from({ length: 20 }).map((_, i) => {
        const angle = (i / 20) * Math.PI * 2;
        const radius = 5 + Math.sin(i) * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = Math.sin(i * 0.5) * 3;

        return (
          <Float key={i} speed={1 + i * 0.1} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh position={[x, y, z]}>
              <sphereGeometry args={[0.05, 8, 8]} />
              <meshStandardMaterial 
                color="#00bfff" 
                emissive="#00bfff" 
                emissiveIntensity={0.2} 
              />
            </mesh>
          </Float>
        );
      })}
    </group>
  );
}

// Main 3D Scene Component
function Scene({ hover, clicked }: { hover: boolean; clicked: boolean }) {
  return (
    <>
      {/* Lighting Setup */}
      <ambientLight intensity={0.4} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1} 
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight position={[-10, -10, -10]} color="#00bfff" intensity={0.3} />
      <pointLight position={[10, 10, 10]} color="#8b5cf6" intensity={0.2} />

      {/* Environment for reflections */}
      <Environment preset="city" />

      {/* Robot */}
      <PremiumRobotMesh hover={hover} clicked={clicked} />

      {/* AI Particles */}
      <AIParticles />

      {/* Ground shadow */}
      <ContactShadows 
        opacity={0.4} 
        scale={10} 
        blur={1} 
        far={10} 
        resolution={256} 
        color="#000000" 
      />

      {/* Floating Text */}
      {hover && (
        <Float speed={2} rotationIntensity={0} floatIntensity={0.5}>
          <Text
            position={[0, -4, 0]}
            fontSize={0.5}
            color="#00bfff"
            anchorX="center"
            anchorY="middle"
            font="/fonts/inter-bold.woff"
          >
            AI Assistant Ready
          </Text>
        </Float>
      )}

      {/* Camera Controls */}
      <OrbitControls 
        enablePan={false} 
        enableZoom={true} 
        maxPolarAngle={Math.PI / 2} 
        minDistance={8}
        maxDistance={15}
        autoRotate={!hover}
        autoRotateSpeed={0.5}
      />
    </>
  );
}

// Main Premium 3D Robot Component
export default function Premium3DRobot() {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 2000);
  };

  return (
    <div className="relative w-full h-96 cursor-pointer group">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 45 }}
        shadows
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
        onClick={handleClick}
      >
        <Scene hover={hover} clicked={clicked} />
      </Canvas>
      
      {/* Status Overlay */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full border border-cyan-400/30 flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
          <span className="text-sm text-cyan-300">Drag to rotate • Click for animation</span>
        </div>
      </div>
    </div>
  );
}
