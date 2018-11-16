/*	Imports:
 *	Input: Librería para recibir datos del padre via HTML
 *	Output: Librería para enviar datos al padre
 *	EventEmmiter: Librería para enviar datos al padre A TREAVÉS de un evento (emit)
*/
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-hijo',
	template: `
		<strong>Este es el {{ titulo }}</strong> <br/><br/>
		<h5>{{ p1 }}</h5>
		Sabías que a {{ p2.name }} le encantaría
		<ul>
			<li *ngFor='let accion of p2.actions'>{{ accion }}</li>
		</ul>
		y muchas más cosas {{ p2.subject }}?
		<!-- "enviar" es la función que enviará los datos al padre -->
		<button (click)="enviar()">Enviar a padre</button>
	`,
	styleUrls: ['./hijo.component.css'],
})
export class HijoComponent implements OnInit {
	public titulo: string

		//	El atributo 'p1', en el template del padre será llamado 'saludo'
	@Input('saludo') p1: string
		//	El atributo 'p2', en el template del padre será llamado 'declaración'
	@Input('declaracion') p2: any

		//	Solo se emite el evento cuando algo lo dispara
	@Output() desde_el_hijo = new EventEmitter()
	constructor() { }

	ngOnInit() {
		this.titulo = 'Componente hijo'
		console.log(this.p1)
	}

	enviar(){
			//	emit<EventEmitter> se encarga de emitir un evento al padre, con los datos especificados
		this.desde_el_hijo.emit({
			nombre: 'Primer campo',
			apellido: 'segundo campo',
			fecha: 4247
		})
	}

}
