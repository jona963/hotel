import { Timestamp } from "firebase/firestore";

export interface itemPago {
    id:number;
    nombre: string;
    departamento: number;
    descripcion: string;
    fecha: Timestamp;
    folio: number;
    monto: number;
  }