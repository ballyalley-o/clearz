"use client";

import { Environment } from "@react-three/drei";
import { Floating } from "components";

type Props = {};

export default function Scene({}: Props) {
  return (
    <group>
      <Floating />
      <Environment files="/hdr/lobby.hdr" environmentIntensity={1.5} />
    </group>
  );
}
