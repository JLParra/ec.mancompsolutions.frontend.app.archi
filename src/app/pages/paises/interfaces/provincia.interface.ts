import { Pais } from "./pais.interface";

export interface Provincia {
    id: number;
    nombre: string;
    fechaCreacion: Date;
    fechaActualizacion: null;
    capital: string;
    pais: Pais;
    estadoFuncionamiento: EstadoFuncionamiento;
}

export interface EstadoFuncionamiento {
    id: number;
    nombre: string;
    fechaCreacion: Date;
    fechaActualizacion: null;
    descripcion: string;
}
