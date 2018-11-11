import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Archivo } from '../model/archivo'
import { ArchivoService } from '../services/archivo.service'
import { Globals } from '../globals'

@Component({
	selector: 'app-archivos',
	templateUrl: './archivos.component.html',
	styleUrls: ['./archivos.component.css'],
	providers: [ArchivoService, Globals]
})
export class ArchivosComponent implements OnInit {
	public archivos: Array<Archivo>
	public seleccionados: Array<Archivo> = []
	public title: string = 'Selecciona tus archivos para difundir'

	constructor(
		private _router: Router,
		private _ArchivoService: ArchivoService,
		private globals: Globals
	){
		this._router = _router,
		this.seleccionados = this.globals.archivosDifusion
	}

	ngOnInit() {
		this.archivos = this._ArchivoService.getArchivos()
		console.log(this.archivos)
	}

	guardarArchivos(){
		this.globals.archivosDifusion = []
		this.archivos.forEach(este => {
			if(este.selected)
				this.globals.archivosDifusion.push(este)
		})
		console.log(this.globals.archivosDifusion)
		alert('Configuración guardada')
		this._router.navigate(['/']);
	}

}
