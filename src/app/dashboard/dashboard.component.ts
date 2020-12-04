import { Component, OnInit } from '@angular/core';
import { CargarScriptService } from "../cargar-script.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private _CargarScripts:CargarScriptService){
    _CargarScripts.Cargar(["JsAnimado"]);
    _CargarScripts.Cargar(["JsMenu"]);
    _CargarScripts.Cargar(["JsSubir"]);
    _CargarScripts.Cargar(["login"]);
  }

  ngOnInit(): void {
  }

}
