import React from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { OrbitControls } from "@react-three/drei";

export default function CanvasContainer() {
  return (
    <Canvas className="w-full !h-[80vh]">
      <Scene />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
