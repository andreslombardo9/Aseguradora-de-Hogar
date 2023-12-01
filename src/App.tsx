import { useState } from 'react'
import './App.css'
import Formmain from './components/Formmain'
import Cotizacion from './components/Cotizacion'
import Navigate from './components/Navigate'

function App() {

  return (
    <div className="App">
      <h1 className='titulo'>Seguros de Hogar</h1>
      <header className='App-header'>
      <Formmain/>
      
      <Navigate/>
      </header>
    </div>
  )
}

export default App
