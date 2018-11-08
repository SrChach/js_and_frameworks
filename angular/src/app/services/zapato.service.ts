import { Injectable } from '@angular/core'
import { Zapato } from '../model/zapato'

@Injectable()
export class ZapatoService{
	public zapatos: Array<Zapato>

	constructor(){
		this.zapatos = [
			new Zapato('Nike Airmax', 'Nike', 'Rojo', 190.12, true),
			new Zapato('Reebook Classic', 'Reebok', 'Blanco', 80, true),
			new Zapato('Nike runner ND', 'Nike', 'Negro', 60, true),
			new Zapato('Adidas Kolorz', 'Adidas', 'Gris', 180, false),
			new Zapato('Adidas B&W', 'Adidas', 'Blanco con negro', 100, true)
		]

	}

	getTexto(){
		return "Texto desde un servicio"
	}
	
	getZapatos(): Array<Zapato>{
		return this.zapatos
	}

}