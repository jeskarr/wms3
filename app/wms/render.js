'use client';
import { Canvas } from "@react-three/fiber";
import { DragControls, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from 'three';

export default function Render3D({x, y, z}) {
  return (
    <Canvas>
      <PerspectiveCamera position={[0, y + (y * 3 / 2), z + (z / 2)]} fov={75} near={0.01} far={10000}/>
      <OrbitControls makeDefault />
      <ambientLight />
      <gridHelper args={[Math.max(z, x)+3, (Math.max(z, x)+3)*2, 'black', 'black']} position={[x/2, 0.001, z/2]}/>
      <mesh position={[x/2, y/2, z/2]}>
        <boxGeometry args={[x, y, z]} />
        <meshLambertMaterial attach="material-0" color='0xCCCCCC' side={THREE.BackSide} /> {/* right */}
        <meshLambertMaterial attach="material-1" color='0xCCCCCC' side={THREE.BackSide} /> {/* left */}
        <meshBasicMaterial attach="material-2" transparent opacity={0.1} /> {/* top */}
        <meshBasicMaterial attach="material-3" color='0xCCCCCC' side={THREE.DoubleSide}/> {/* bottom */}
        <meshLambertMaterial attach="material-4" color='0xCCCCCC' side={THREE.BackSide} /> {/* front */}
        <meshLambertMaterial attach="material-5" color='0xCCCCCC' side={THREE.BackSide} /> {/* back */}     
      </mesh>

      <DragControls dragLimits={[[0+1/2, x-1/2], [0+2/2, 0+2/2], [0+3/2, z-3/2]]}>    {/* 1 larghezza, 2 altezza e 3 profondità scaff.*/}
        <mesh>
          <boxGeometry args={[1, 2, 3]} />
        </mesh>
      </DragControls>
    </Canvas>
  );
}

