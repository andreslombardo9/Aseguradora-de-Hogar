import { useRef } from "react";

const Cotizacion = () =>{
    const precio = useRef(null);
    return(  
        <p className="precio" ref={precio}></p>
    )
}
export default Cotizacion;