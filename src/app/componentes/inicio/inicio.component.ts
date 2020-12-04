import { Component, OnInit } from '@angular/core';
import { CargarScriptService } from "../../cargar-script.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor( private _CargarScripts:CargarScriptService){
    _CargarScripts.Cargar(["JsAnimado"]);
    _CargarScripts.Cargar(["JsMenu"]);
    _CargarScripts.Cargar(["JsSubir"]);
    _CargarScripts.Cargar(["login"]);
  }
  ngOnInit(): void {
  }

}
