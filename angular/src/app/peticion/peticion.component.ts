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
	public fecha: any
	public mensaje: string
	public reqres_usr: any = {
		"name":"",
		"job":""
	}
	public usuario_guardado:any = null
	constructor(
		private _peticionService:  PeticionService
	) { }

	ngOnInit() {
		this.cargaUsuario()
		this.fecha = new Date()
	}

	cargaUsuario(){
		this.user = false
		this.mensaje = 'Cargando...'
		this._peticionService.getUser(this.userId).subscribe(
			result => {
				this.user = result.data
			},
			error => {
				console.log(error);
				this.mensaje = 'Error al cargar, intente de nuevo'
				if(error.status == 404)
					this.mensaje = 'usuario inexistente'
			}
		)
	}

	onSubmit(form){
		this._peticionService.addUser(this.reqres_usr).subscribe(
			response => {
				this.usuario_guardado = response
				form.reset()
			},
			error => {
				this.usuario_guardado = null
				console.log(error)
			}
		)
	}

}
