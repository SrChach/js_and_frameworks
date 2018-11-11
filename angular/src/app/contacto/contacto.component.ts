import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../model/contacto.usuario'

@Component({
	selector: 'app-contacto',
	templateUrl: './contacto.component.html',
	styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
	public contacto_usuario: ContactoUsuario
	constructor(){
		this.contacto_usuario = new ContactoUsuario("", "", "", "")
	}

	ngOnInit() {
	}

	onSubmit(form){
		console.log(this.contacto_usuario)
		form.reset()
	}

}
