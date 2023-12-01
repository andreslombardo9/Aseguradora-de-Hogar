import { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import "../App.css";
import useCalculo from "./useCalculo";

const FormPeticion = () => {
  const notify = () => toast;
  type Datos = {
    id: number;
    edificio: string;
    zona: string;
  };
  const [datos, setDatos] = useState<Datos[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("datos.json");
        const data = await response.json();
        setDatos(data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  const [propiedad, setPropiedad] = useState("Seleccione");
  const TipoPropiedad = (p: any) => {
    setPropiedad(p.target.value);
  };
  const [metrosIngresados, setMetrosIngresados] = useState(0);
  const MIngresados = (m: any) => {
    setMetrosIngresados(m.target.value);
  };

  const [zona, setZona] = useState("seleccione");
  const TipoZona = (zon: any) => {
    setZona(zon.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    useCalculo(e); // Llamamos a useCalculo desde aquí
  };

  return (
    <>
      <form id="formulario" className="Recibir" onSubmit={handleSubmit}>
        <label className="label" htmlFor="selecPropiedad">Seleccione el tipo de propiedad</label>
        <select className="formulario-elemento"
          name="propiedad"
          id="selectPropiedad"
          onChange={TipoPropiedad}
          value={propiedad}
        >
          {datos.map((d) => {
            return (
              <option key={d.id} className="option">
                {d.edificio}
              </option>
            );
          })}
        </select>

        <label className="label" htmlFor="selectZona">Seleccione Zona</label>
        <select className="formulario-elemento" name="zona" id="selectZona" value={zona} onChange={TipoZona}>
          {datos.map((z) => {
            return (
              <option key={z.id} className="option">
                {z.zona}
              </option>
            );
          })}
        </select>

        <label className="label" htmlFor="metros">Ingrese cantidad de metros cuadrados</label>
        <input className="formulario-elemento"
          type="number"
          onChange={MIngresados}
          name="ingreso"
          value={metrosIngresados}
        />

        <button
          onClick={notify}
          type="submit"
          className="enviar"
          value="Enviar"
        >
          Cotizador
        </button>
        <Toaster />
      </form>
    </>
  );
};
export default FormPeticion;
