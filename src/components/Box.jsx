import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import React, { useRef } from "react";
import { RoundedBox, useTexture } from "@react-three/drei";

export default function Box() {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.x = ref.current.rotation.y += 0.001;
  });

  const textures = useTexture([
    "/assets/textures/React.png",
    "/assets/textures/JavaScript.png",
    "/assets/textures/ThreeJS.png",
    "/assets/textures/NodeJS.png",
    "/assets/textures/TypeScript.svg",
    "/assets/textures/Redux.png",
  ]);

  return (
    <mesh ref={ref} scale={[2, 2, 2]}>
      {textures.map((texture, idx) => (
        <meshBasicMaterial
          key={texture.id}
          attach={`material-${idx}`}
          map={texture}
        />
      ))}

      <boxGeometry attach="geometry" args={[1, 1, 1]} />
    </mesh>
  );
}
