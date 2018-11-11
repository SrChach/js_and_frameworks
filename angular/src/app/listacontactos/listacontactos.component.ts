import { Component, OnInit } from '@angular/core';
import { Periodista } from '../model/periodista'
import { PeriodistaService } from '../services/periodista.service'
import { RouterModule, Routes, Router } from '@angular/router'

@Component({
	selector: 'app-listacontactos',
	templateUrl: './listacontactos.component.html',
	styleUrls: ['./listacontactos.component.css'],
	providers: [PeriodistaService]
})
export class ListacontactosComponent implements OnInit {
	public titulo: string = "Lista de contactos"
	public periodistas: Array<Periodista>

	constructor(
		private _PeriodistaService: PeriodistaService,
		private _router: Router
	) {
		this._router = _router
	}

	ngOnInit() {
		this.periodistas = this._PeriodistaService.getPeriodistas()
	}

	guardar_periodistas(){
		this.periodistas.forEach( p => {
			if(p.selected)
				console.log(p.nombre)
		})
		alert('Contactos configurados')
		this._router.navigate(['/']);
	}

}
