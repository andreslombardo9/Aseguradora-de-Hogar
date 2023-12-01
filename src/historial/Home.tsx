
import { BrowserRouter, useNavigate } from "react-router-dom";
import { useRef } from "react";
import '../App.css';


export const Home: React.FC = () => {
  const mostrar = useRef<HTMLDivElement>(null);
  const link = useNavigate();
  const handleHistorialClick = () => {
    link("Historial");
    const card = document.querySelector(".card") as HTMLElement;
    card.style.display = "none";
  };
  return (
    <>
      <div className="Footer">
        <footer>
        <button onClick={handleHistorialClick} className="historial-button">
            Historial de cotizaciones
          </button>
        </footer>
      </div>
    </>
  );
};
