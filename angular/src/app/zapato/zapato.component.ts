import { Component, OnInit } from '@angular/core'
import { Zapato } from '../model/zapato'

@Component({
	selector: 'zapatos',
	templateUrl: './zapato.component.html'
})
export class ZapatoComponent implements OnInit{
	public titulo: string = "Componente de zapato"
	public zapatos: Array<Zapato>
	public marcas: String[];

	constructor(){
		this.marcas = new Array();
		this.zapatos = [
			new Zapato('Nike Airmax', 'Nike', 'Rojo', 190.12, true),
			new Zapato('Reebook Classic', 'Reebok', 'Blanco', 80, true),
			new Zapato('Nike runner ND', 'Nike', 'Negro', 60, true),
			new Zapato('Adidas Kolorz', 'Adidas', 'Gris', 180, false),
			new Zapato('Adidas B&W', 'Adidas', 'Blanco con negro', 100, true)
		]
	}

	ngOnInit(){
		console.log(this.zapatos)
		this.getMarcas()
	}

	getMarcas(){
		this.zapatos.forEach((actual, index) => {
			if(this.marcas.indexOf(actual.marca) < 0)
				this.marcas.push(actual.marca)
		})
	}
}