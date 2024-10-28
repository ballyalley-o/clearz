"use client";

import React, { forwardRef, ReactNode } from "react";
import { Float } from "@react-three/drei";
import { ClearzCan, ClearzCanProps } from "components";
import { Group } from "three";

type FloatingProps = {
  flavor?: ClearzCanProps["flavor"];
  floatSpeed?: number;
  rotationIntensity?: number;
  floatIntensity?: number;
  floatingRange?: [number, number];
  children?: ReactNode;
};

const Floating = forwardRef<Group, FloatingProps>(
  ({ flavor = "blackCherry", floatSpeed = 1.5, rotationIntensity = 1, floatIntensity = 1, floatingRange = [-0.1, 0.1], children, ...props }, ref) => {
    return (
      <group ref={ref} {...props}>
        <Float speed={floatSpeed} rotationIntensity={rotationIntensity} floatIntensity={floatIntensity} floatingRange={floatingRange}>
          {children}
          <ClearzCan flavor={flavor} />
        </Float>
      </group>
    );
  },
);

Floating.displayName = "Floating";

export default Floating;
