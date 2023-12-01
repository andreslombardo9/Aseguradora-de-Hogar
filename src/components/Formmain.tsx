import React, { useRef } from 'react'
import FormPeticion from './FormPeticion';
import Cotizacion from './Cotizacion';
export default function Formmain() {

  const mainRef = useRef(null);

  return (
    <main ref={mainRef} className='card'>
      <h3 className='subtitulo'>Ingrese los datos solicitados</h3>
    <div className='formContainter'>
     <FormPeticion/> 
     <Cotizacion/> 
    </div>
    </main>
  )
}

