"use client";
import { Canvas } from "@react-three/fiber";

type Props = {};

export default function ViewCanvas({}: Props) {
  return (
    <Canvas>
      <mesh>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="" />
      </mesh>
    </Canvas>
  );
}
