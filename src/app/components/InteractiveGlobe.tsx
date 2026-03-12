import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);

  // Create points for cities/locations
  const points = useMemo(() => {
    const temp = [];
    const locations = [
      { lat: -1.9403, lon: 29.8739, name: 'Kigali, Rwanda' }, // Kigali
      { lat: 40.7128, lon: -74.0060, name: 'New York, USA' },
      { lat: 51.5074, lon: -0.1278, name: 'London, UK' },
      { lat: 35.6762, lon: 139.6503, name: 'Tokyo, Japan' },
      { lat: -33.8688, lon: 151.2093, name: 'Sydney, Australia' },
      { lat: 48.8566, lon: 2.3522, name: 'Paris, France' },
    ];

    locations.forEach(({ lat, lon }) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      const radius = 2.02;

      const x = -(radius * Math.sin(phi) * Math.cos(theta));
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);

      temp.push(x, y, z);
    });

    return new Float32Array(temp);
  }, []);

  // Auto-rotate the globe
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group>
      {/* Main Globe */}
      <Sphere ref={meshRef} args={[2, 64, 64]}>
        <MeshDistortMaterial
          color="#0ea5e9"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.6}
          metalness={0.6}
          emissive="#06b6d4"
          emissiveIntensity={0.1}
        />
      </Sphere>

      {/* Wireframe overlay */}
      <Sphere args={[2.01, 32, 32]}>
        <meshBasicMaterial
          color="#22d3ee"
          wireframe
          transparent
          opacity={0.1}
        />
      </Sphere>

      {/* Location points */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={points.length / 3}
            array={points}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.1}
          color="#fbbf24"
          sizeAttenuation
          transparent
          opacity={0.9}
        />
      </points>

      {/* Glow effect */}
      <Sphere args={[2.1, 32, 32]}>
        <meshBasicMaterial
          color="#06b6d4"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  );
}

export function InteractiveGlobe() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        {/* Lighting - Reduced intensity */}
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.4} />
        <pointLight position={[-10, -10, -10]} intensity={0.2} color="#06b6d4" />
        
        {/* Stars background */}
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        {/* Globe */}
        <Globe />

        {/* Controls */}
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={3.5}
          maxDistance={8}
          autoRotate={false}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
