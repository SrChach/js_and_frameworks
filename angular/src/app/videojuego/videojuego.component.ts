import { Component } from '@angular/core'

@Component({
	selector: 'videojuego',
	templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent {
	constructor(){
		console.log('hola, Se ha cargado el componente videojuego')
	}
}