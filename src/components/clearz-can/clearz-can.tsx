"use client";

import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

useGLTF.preload("/Soda-can.gltf");

const flavorTextures = {
  lemonLime: "/image/label/lemon-lime.png",
  grape: "/image/label/grape.png",
  blackCherry: "/image/label/black-cherry.png",
  strawberryLemonade: "/image/label/strawberry.png",
  watermelon: "/image/label/watermelon.png",
};

const metalMaterial = new THREE.MeshStandardMaterial({
  roughness: 0.3,
  metalness: 1,
  color: "#bbbbbb",
});

export type ClearzCanProps = {
  flavor?: keyof typeof flavorTextures;
  scale?: number;
};

export function ClearzCan({ flavor = "blackCherry", scale = 2, ...props }: ClearzCanProps) {
  const { nodes } = useGLTF("/3x/Soda-can.gltf");

  const labels = useTexture(flavorTextures);

  // Fixes upside down labels
  labels.strawberryLemonade.flipY = false;
  labels.blackCherry.flipY = false;
  labels.watermelon.flipY = false;
  labels.grape.flipY = false;
  labels.lemonLime.flipY = false;

  const label = labels[flavor];

  return (
    <group {...props} dispose={null} scale={scale} rotation={[0, -Math.PI, 0]}>
      <mesh castShadow receiveShadow geometry={(nodes.cylinder as THREE.Mesh).geometry} material={metalMaterial} />
      <mesh castShadow receiveShadow geometry={(nodes.cylinder_1 as THREE.Mesh).geometry}>
        <meshStandardMaterial roughness={0.15} metalness={0.7} map={label} />
      </mesh>
      <mesh castShadow receiveShadow geometry={(nodes.Tab as THREE.Mesh).geometry} material={metalMaterial} />
    </group>
  );
}
