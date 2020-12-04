import { Component, OnInit } from '@angular/core';
import { CargarScriptService } from "../../cargar-script.service";

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  constructor( private _CargarScripts:CargarScriptService){
    _CargarScripts.Cargar(["store"]);
  }

  ngOnInit(): void {
  }

}
