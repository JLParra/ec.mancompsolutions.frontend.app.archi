export interface Pais {
    id:                   number;
    nombre:               string;
    fechaCreacion:        Date;
    fechaActualizacion:   null;
    capital:              string;
    estadoFuncionamiento: EstadoFuncionamiento;
}

export interface EstadoFuncionamiento {
    id:                 number;
    nombre:             string;
    fechaCreacion:      Date;
    fechaActualizacion: null;
    descripcion:        string;
}
