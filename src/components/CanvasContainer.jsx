import React from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { OrbitControls } from "@react-three/drei";

export default function CanvasContainer() {
  return (
    <Canvas className="sm:!w-1/2 !h-[80vh] pt-20 cursor-grab active:cursor-grabbing">
      <Scene />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
