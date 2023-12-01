import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {Interfaz, Cotizacion} from '../components/Interface';
import '../App.css';
export const Historial: React.FC = () => {
  const volver = useNavigate();
  const historial: any | null = localStorage.getItem("datos");
  const parsedHistorial: Cotizacion = JSON.parse(historial);
  const mostrar = useRef<HTMLDivElement>(null);
  
  if(parsedHistorial === null) {
    return (
      <>
      <div className="div-volver">
      <p className="historial-vacio">Historial vacio</p>
       <button onClick={() => {volver("/"); (document.querySelector(".card") as HTMLElement).style.display = "block"}} className="historial-button">Volver</button>
        </div>
      </> 
    );
  } else {
    return (
      <>
        <div className="table-responsive" ref={mostrar}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Fecha de cotización</th>
                <th scope="col">Propiedad</th>
                <th scope="col">Ubicación</th>
                <th scope="col">Metros cuadrados</th>
                <th scope="col">Póliza mensual</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {parsedHistorial.map(ver => {
                return (
                  <tr key={ver.id}>
                    <td>{ver.fecha}</td>
                    <td>{ver.propiedad}</td>
                    <td>{ver.ubicacion}</td>
                    <td>{ver.metrosCuadrados}</td>
                    <td>{'$' + ver.poliza}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className='div-volver'>
         <button onClick={() => {volver("/"); (document.querySelector(".card") as HTMLElement).style.display = "block"}} className="historial-button">Volver</button>
         </div>  
        </div>
      </>
    );
  }
}


/*  const volver = useNavigate();
    const historial: any | null = localStorage.getItem("datos");
    const parsedHistorial: Interfaz = JSON.parse(historial); */