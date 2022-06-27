import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Comfy.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials["Material.005"]}
        position={[7.78, 8.86, -12.32]}
        rotation={[0, Math.PI / 4, -0.17]}
        scale={[1, 4, 5.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        position={[-0.02, 0, 0.07]}
        rotation={[0, Math.PI / 4, 0]}
        scale={[16, 0.1, 16]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["Material.001"]}
        position={[-11.33, 16, -11.25]}
        rotation={[Math.PI / 2, 0, -Math.PI / 4]}
        scale={[16, 0.1, 16]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials["Material.004"]}
        position={[15.2, 8.86, -4.9]}
        rotation={[0, Math.PI / 4, -0.17]}
        scale={[1, 4, 5.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials["Material.003"]}
        position={[9.18, 2.18, -6.3]}
        rotation={[0, Math.PI / 4, 0]}
        scale={[5, 1, 14]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials["Material.009"]}
        position={[-9.97, 9.81, -9.89]}
        rotation={[0, Math.PI / 4, 0]}
        scale={[16, 0.32, 1.8]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.008"]}
        position={[-6.61, 3.4, 10.35]}
        rotation={[0, Math.PI / 4, 0]}
        scale={[3.21, 1, 8.23]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={nodes.Text.material}
        position={[-0.02, 0, 0.07]}
        rotation={[0, Math.PI / 4, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials["Material.011"]}
        position={[-7.09, 8.02, 9.97]}
        rotation={[0, Math.PI / 4, 0]}
        scale={[0.18, 3.78, 7.27]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials["Material.007"]}
        position={[-8.77, 3.22, 11.69]}
        rotation={[0, Math.PI / 4, 0]}
        scale={[0.32, 0.18, 8.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone.geometry}
        material={materials["Material.012"]}
        position={[-7.09, 4.14, 9.97]}
        rotation={[0, Math.PI / 4, 0]}
        scale={[1, 0.21, 3.72]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials["Material.006"]}
        position={[11.3, 16, -11.25]}
        rotation={[0, Math.PI / 4, -Math.PI / 2]}
        scale={[16, 0.1, 16]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials["Material.010"]}
        position={[-11.33, 24.05, -11.25]}
        rotation={[0, Math.PI / 4, 0]}
        scale={[0.28, 0.27, 0.27]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials["Material.014"]}
        position={[1.74, 7.84, -10.85]}
        rotation={[0, Math.PI / 4, 0]}
        scale={[1.68, 0.12, 1.68]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials["Material.013"]}
        position={[1.73, 6.28, -10.83]}
        rotation={[0, Math.PI / 4, 0]}
        scale={[1, 1.56, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere037.geometry}
        material={materials["Material.015"]}
        position={[2.82, 7.93, -11.6]}
        rotation={[0, Math.PI / 4, 0]}
        scale={0.21}
      />
    </group>
  );
}

useGLTF.preload("/models/Comfy.gltf");
