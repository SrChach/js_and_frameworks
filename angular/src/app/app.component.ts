import { Component } from '@angular/core';
import { Configuracion } from './model/configuracion'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public config
  public titulo: string = 'angular'
  public descripcion: string
  public mostrar_videojuegos: boolean = true

  constructor(){
  	this.config = Configuracion
  }

  ocultarVideojuegos(){
  	this.mostrar_videojuegos = !this.mostrar_videojuegos
  }
}
