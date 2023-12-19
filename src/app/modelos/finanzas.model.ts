
export interface Item {
  id: number;
  item: string;
  nombre?: string;
  descripcion: string;
  folio?: number;
  monto: number;
  fecha: Date;
  estado?: string;
  cargo?: string;
  descuento?: number;
}

