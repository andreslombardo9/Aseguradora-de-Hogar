export interface Interfaz {
    id: number;
    edificio: string;
    zona: string;
  }
  export interface Cotizacion {
    map(arg0: (ver: any) => JSX.Element): import("react").ReactNode;
    id: number;
    fecha: string;
    propiedad: string;
    ubicacion: string;
    metrosCuadrados: number;
    poliza: number;
  }