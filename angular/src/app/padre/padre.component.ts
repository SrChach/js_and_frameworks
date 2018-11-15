import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-padre',
	templateUrl: './padre.component.html',
	styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

		//	Variable que se le pasará al hijo como el input 'saludo'
	private oye:string = 'Hola, Espina!'
		//	Variable que se le pasará al hijo como el input 'declaracion'
	private sabes: any = {
		name:'Ignacio',
		actions:['bailar','programar','viajar','cocinar'],
		subject:'contigo'
	}

	constructor() { }

	ngOnInit() {
	}

}
