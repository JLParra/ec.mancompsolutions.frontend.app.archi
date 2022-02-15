import { Provincia } from "./provincia.interface";

export interface Ciudad {
    id: number;
    nombre: string;
    fechaCreacion: Date;
    fechaActualizacion: Date;
    provincia: Provincia;
    estadoFuncionamiento: EstadoFuncionamiento;
}

export interface EstadoFuncionamiento {
    id: number;
    nombre: string;
    fechaCreacion: Date;
    fechaActualizacion: null;
    descripcion: string;
}
