import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
	selector: 'curso',
	templateUrl: './curso.component.html',
	styleUrls: []
})
export class CursoComponent implements OnInit {
	public nombre: string
	public followers: number

	constructor(
		private _router: Router,
		private _route: ActivatedRoute
	){}

	ngOnInit(){
		this._route.params.subscribe((parametros: Params) => {
			this.nombre = parametros.nombre
			//	Nota: el '+' te lo convierte a number, para que sea válido
			this.followers = +parametros.followers
			if(this.nombre == 'ninguno')
				this._router.navigate(['/'])
		})
	}

	redirigir(){
		this._router.navigate(['/zapatos'])
	}
}