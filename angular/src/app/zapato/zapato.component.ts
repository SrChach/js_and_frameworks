import { Component, OnInit } from '@angular/core'
import { Zapato } from '../model/zapato'

@Component({
	selector: 'zapatos',
	templateUrl: './zapato.component.html'
})
export class ZapatoComponent implements OnInit{
	public titulo: string = "Componente de zapato"
	public zapatos: Array<Zapato>

	constructor(){
		this.zapatos = [
			new Zapato('Nike Airmax', 'Nike', 'Rojo', 190, true)
			new Zapato('Reebook Classic', 'Reebok', 'Blanco', 80, true)
			new Zapato('Nike runner ND', 'Nike', 'Negro', 60, true)
			new Zapato('Adidas Kolorz', 'Adidas', 'Gris', 180, false)
		]
	}

	ngOnInit(){
		console.log(this.zapatos)
	}
}