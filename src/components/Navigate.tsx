import React from 'react'
import { Home } from "../historial/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Historial } from '../historial/Historial';

const Navigate = () => {
  return (
    <div className="Navigate">
        <footer className="footer">
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/historial" element={<Historial/>}></Route>
            </Routes>
            </BrowserRouter>
        </footer>
    </div>
  )
}

export default Navigate