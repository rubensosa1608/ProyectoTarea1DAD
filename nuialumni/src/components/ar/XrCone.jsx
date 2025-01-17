import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";


function XrCone() {

    const coneRef = useRef();
    
    useFrame((state, delta) => { 
        coneRef.current.rotation.y += delta;
    
    });

return (<>
    {/*<OrbitControls /> permite mover los objetos con el ratón. 
    Sólo sirve para la web, pero no cuando estemos en RA*/}
    <OrbitControls />
    {/*<ambientLight es para poner luz a la escena*/}
    <ambientLight />
    {/*dentro del mesh se dibuja la figura, que en este caso es un cubo (box)*/}
    <mesh ref={coneRef} position={[0, 0, -5]}>
        <coneGeometry args={[4, 6, 4]}/>
        <meshStandardMaterial color="#add8e6" />
    </mesh>
     

    </>

)
}

export default XrCone;
