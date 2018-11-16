//	No se requieren imports adicionales, de eso se encarga el hijo
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-padre',
	template: `
		<h4>En el padre:</h4>
		<ul *ngIf="datos_hijo">
			<li>Nombre: {{datos_hijo.nombre}}</li>
			<li>Apellidos: {{datos_hijo.apellido}}</li>
			<li>Fecha: {{datos_hijo.fecha}}</li>
		</ul>

		<app-hijo 
			[saludo]="oye"
			[declaracion]="sabes"
			(desde_el_hijo)="recibirDatos($event)">
			<!-- "desde_el_hijo" es el nombre de la propiedad en el @output del  hijo -->
		</app-hijo>
		<!-- Recibe un evento disparado desde el hijo y los datos del evento -->

		<hr/>

	`,
	styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

		//	Variable que se le pasará al hijo como el input 'saludo'
	public oye:string = 'Hola, Espina!'
		//	Variable que se le pasará al hijo como el input 'declaracion'
	public sabes: any = {
		name:'Ignacio',
		actions:['bailar','programar','viajar','cocinar'],
		subject:'contigo'
	}
	public datos_hijo: object = null

	constructor() { }

	ngOnInit() {
	}

		/*	Función que se dispara desde el hijo, cacha 
		 *	cosas enviadas por el evento "emit" del hijo (no, no es un evento)
		 */
	recibirDatos(event){
		console.log(`nombre: ${event.nombre}, Apellido: ${event.apellido}, Fecha: ${event.fecha}`)
		this.datos_hijo = event
	}

}
