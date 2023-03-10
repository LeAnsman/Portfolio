import Box from "./Box";

export default function Scene() {
  //   const [data] = useState({
  //     rX: 0,
  //     rY: 0,
  //     rZ: 0,
  //   });

  //   useFrame((state) => {
  //     if (hovered) {
  //       ref.current.rotation.set(
  //         (data.rX -= 0.02),
  //         (data.rY += 0.02),
  //         (data.rZ = 0)
  //       );
  //     } else {
  //       ref.current.rotation.set(
  //         (data.rX += 0.025),
  //         (data.rY -= 0.025),
  //         (data.rZ -= 0)
  //       );
  //     }
  //   });

  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box />
    </>
  );
}
