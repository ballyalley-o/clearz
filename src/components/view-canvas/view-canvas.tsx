"use client";

import { Canvas } from "@react-three/fiber";

type Props = {};

export default function ViewCanvas({}: Props) {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 30,
      }}
    >
      <mesh rotation={[0.5, 0.5, 0]}>
        <boxGeometry />
        <meshStandardMaterial color={"hotpink"} />
      </mesh>
      <ambientLight intensity={2} />
    </Canvas>
  );
}
