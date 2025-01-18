import { Canvas} from "@react-three/fiber";
import { ARButton} from "@react-three/xr";
import { useLoader, useFrame  } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DirectionalLight, AmbientLight } from 'three';

function Scene() {
  const gltf = useLoader(GLTFLoader, '/model.gltf');

  useFrame(() => {
    gltf.scene.rotation.y += 0.01; 
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <primitive object={gltf.scene} position={[0, -1.5, 2.2]} scale={3.5} />
    </>
  );
}

function ARruben(){

    return(
        <>
            <ARButton/>
            <Canvas>
                    <Scene />
            </Canvas>
        </>
)

}

export default ARruben;