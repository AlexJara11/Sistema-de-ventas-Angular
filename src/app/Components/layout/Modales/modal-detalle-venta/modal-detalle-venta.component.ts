import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Venta } from '../../../../Interfaces/venta';
import { DetalleVenta } from '../../../../Interfaces/detalle-venta';
import { SharedModule } from '../../../../Reutilizable/shared/shared.module';


@Component({
  selector: 'app-modal-detalle-venta',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './modal-detalle-venta.component.html',
  styleUrl: './modal-detalle-venta.component.css'
})
export class ModalDetalleVentaComponent implements OnInit{
  fechaRegistro:string = "";
  numeroDocumento:string = "";
  tipoPago:string = "";
  total: string = "";
  detalleVenta: DetalleVenta[] = [];
  columnasTabla: string[] = ['producto', 'cantidad', 'precio', 'total'];

  constructor(@Inject(MAT_DIALOG_DATA) public _venta: Venta){
    this.fechaRegistro = _venta.fechaRegistro!;
    this.numeroDocumento = _venta.numeroDocumento!;
    this.tipoPago = _venta.tipoPago;
    this.total = _venta.totalTexto;
    this.detalleVenta = _venta.detalleVenta;
  }
  ngOnInit(): void {
  }

}
