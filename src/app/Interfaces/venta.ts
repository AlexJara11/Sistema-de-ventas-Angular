import { DetalleVenta } from "./detalle-venta";

export interface Venta {
  idVenta?: number,
  numeroDocumento?: string,
  tipoPago: string,
  totalTexto: string,
  detalleVenta: DetalleVenta[]
}
