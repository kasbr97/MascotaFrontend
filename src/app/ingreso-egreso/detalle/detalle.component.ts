import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IngresoEgreso } from '../ingreso-egreso.model';
import { Subscription } from 'rxjs';
import { IngresoEgresoService } from '../ingreso-egreso.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent implements OnInit {

  constructor( ) { }

  ngOnInit() {

  }



}
