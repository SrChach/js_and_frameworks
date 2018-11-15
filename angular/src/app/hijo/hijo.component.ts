import { Component, OnInit, Input } from '@angular/core';

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
	`,
	styleUrls: ['./hijo.component.css'],
})
export class HijoComponent implements OnInit {
	public titulo: string

		//	El atributo 'p1', como atributo en el padre será llamado 'saludo'
	@Input('saludo') p1: string
		//	El atributo 'p2', en la plantilla será llamado 'declaración'
	@Input('declaracion') p2: any
	constructor() { }

	ngOnInit() {
		this.titulo = 'Componente hijo'
		console.log(this.p1)
		console.log(JSON.stringify(this.p2));
	}

}
