import { Injectable } from '@angular/core'
import { Archivo } from '../model/archivo'

@Injectable()
export class ArchivoService {
	private archivos: Array<Archivo>
	
	constructor(){
		this.archivos = [
			new Archivo('nombre', 'src', 100, '12/2/10', true),
			new Archivo('nombre', 'src', 101, '12/2/10', true),
			new Archivo('nombre', 'src', 102, '12/2/10', false),
			new Archivo('nombre', 'src', 103, '12/2/10', false),
			new Archivo('nombre', 'src', 104, '12/2/10', true),
			new Archivo('nombre', 'src', 105, '12/2/10', true)
		]
	}

	public getArchivos(): Array<Archivo>{
		return this.archivos
	}

}