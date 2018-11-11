import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public identificado: boolean = false
  @Input() public cadena: string
  constructor() { }

  ngOnInit() {
    console.log(this.cadena)
  }

  identificar(){
  	this.identificado = true
  }

  salir(){
  	this.identificado = false
  }

}
