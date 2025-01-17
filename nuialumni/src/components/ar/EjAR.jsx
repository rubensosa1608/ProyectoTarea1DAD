//Ejemplo de un cubo en RA
import { Canvas} from "@react-three/fiber";
import XrCube from './XrCube';
import { ARButton, XR } from "@react-three/xr";
import XrCone from './XrCone'

/*Cambiar el componente EjAR.jsx de forma que ahora se muestre una figura geométrica 
de tu elección (esfera, toroide, cono, ….). Ponle el color que quieras, pero que sea diferente al que 
tenía el cubo. Fíjate que tendrás que añadir otro componente en EjAR.jsx. */

function EjAR(){


    return(
        <>
            <ARButton/>
            <Canvas>
                <XR>
                    <XrCone />
                   
                </XR>
            </Canvas>
        </>
)

}

export default EjAR;