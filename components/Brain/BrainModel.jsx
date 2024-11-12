"use client";
import React, { useRef } from "react";
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useControls } from "leva";

export function BrainModel(props) {
  //   const materialProps = useControls({

  //     thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },

  //     roughness: { value: 0, min: 0, max: 1, step: 0.1 },

  //     transmission: {value: 1, min: 0, max: 1, step: 0.1},

  //     ior: { value: 1.2, min: 0, max: 3, step: 0.1 },

  //     chromaticAberration: { value: 0.02, min: 0, max: 1},

  //     backside: { value: true},

  // })

  const materialProps = {
    thickness: 0.2,
    roughness: 0,
    transmission: 1,
    ior: 1.2,
    chromaticAberration: 0.02,
    backside: true,
  };
  const { nodes, materials } = useGLTF("/human_brain_.glb");
  return (
    <group {...props} dispose={null} position={[0, -1, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.material_0}
        scale={0.01}
      >
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/human_brain_.glb");
