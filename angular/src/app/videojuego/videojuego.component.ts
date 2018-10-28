import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core'

@Component({
	selector: 'videojuego',
	templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
	public titulo:string
	public listado: string

	// Construye el método
	constructor(){
		this.titulo = 'Componentes'
		this.listado = 'Listado de los juegos más cheveres'
		console.log('Elemento construido')
	}

	// Se dispara al cargarse el elemento
	ngOnInit(){
		console.log('Elemento cargado')
	}

	// Se dispara cuando hay algún cambio en el componente o en la aplicación
	ngDoCheck(){
		console.log('Cambio en el código realizado')
	}

	ngOnDestroy(){
		console.log('Componente eliminado')
	}

	// Funcion mia xd
	cambiarTitulo(){
		this.titulo = 'Nuevo titulo del componente 7u7r'
	}

}