import { Component, OnInit } from '@angular/core'
import { Zapato } from '../model/zapato'
import { ZapatoService } from '../services/zapato.service'

@Component({
	selector: 'zapatos',
	templateUrl: './zapato.component.html',
	providers: [ZapatoService]
})
export class ZapatoComponent implements OnInit{
	public titulo: string = "Componente de zapato"
	public zapatos: Array<Zapato>
	public marcas: String[]
	public color: string
	public mi_marca: string

	constructor(
		private _ZapatoService: ZapatoService
	){
		this.color = 'yellow'
		this.marcas = new Array()	
	}

	ngOnInit(){
		this.zapatos = this._ZapatoService.getZapatos()
		this.getMarcas()
		console.log(this._ZapatoService.getTexto())
	}

	getMarcas(){
		this.zapatos.forEach((actual, index) => {
			if(this.marcas.indexOf(actual.marca) < 0)
				this.marcas.push(actual.marca)
		})
	}

	getMarca(){
		alert(this.mi_marca)
	}

	anadirMarca(){
		if(this.mi_marca != '' && this.mi_marca != undefined)
			this.marcas.push(this.mi_marca)
		this.mi_marca = ''
	}

	borrarMarca(index){
		this.marcas.splice(index, 1)
	}

	onBlur(){
		console.log(`Haz salido del input`)
	}

}