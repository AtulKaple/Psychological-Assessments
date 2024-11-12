"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { BrainModel } from "./BrainModel";

const Summon = () => {
  return (
    <div className="h-full laptop:h-[100vh] w-full flex items-center justify-center bg-transparent ">
      <Canvas>
        <Environment preset="studio" />
        <OrbitControls
          enableZoom={false}
          enableRotate={false}
          autoRotate
          enablePan={false}
        />
        <BrainModel scale={[5, 5, 5]} />
      </Canvas>
    </div>
  );
};

export default Summon;
