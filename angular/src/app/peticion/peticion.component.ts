import { Component, OnInit } from '@angular/core';
import { PeticionService } from '../services/peticion.service'

@Component({
	selector: 'app-peticion',
	templateUrl: './peticion.component.html',
	styleUrls: ['./peticion.component.css'],
	providers: [PeticionService]
})
export class PeticionComponent implements OnInit {

	public user: any
	public userId: any = 1

	constructor(
		private _peticionService:  PeticionService
	) { }

	ngOnInit() {
		this.cargaUsuario()
	}

	cargaUsuario(){
		this._peticionService.getUser(this.userId).subscribe(
			result => {
				console.log(result.data);
				this.user = result.data
			},
			error => {
				console.log(error);
			}
		)
	}

}
