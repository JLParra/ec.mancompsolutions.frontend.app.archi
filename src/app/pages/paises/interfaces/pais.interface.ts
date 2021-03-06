
export interface Pais {
    id: number;
    nombre: string;
    fechaCreacion: Date;
    fechaActualizacion: Date;
    capital: string;
    estadoFuncionamiento: EstadoFuncionamiento;
}

export interface EstadoFuncionamiento {
    id: number;
    nombre: string;
    fechaCreacion: Date;
    fechaActualizacion: Date;
    descripcion: string;
}
