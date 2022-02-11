export interface Pais {
    id:                   number;
    fechaCreacion:        Date;
    fechaActualizacion:   null;
    nombre:               string;
    capital:              string;
    estadoFuncionamiento: EstadoFuncionamiento;
}
export interface EstadoFuncionamiento {
    id:                 number;
    fechaCreacion:      Date;
    fechaActualizacion: null;
    nombre:             string;
    descripcion:        string;
}
