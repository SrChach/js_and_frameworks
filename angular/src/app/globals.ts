import { Injectable } from '@angular/core';
import { Archivo } from './model/archivo'
import { Periodista } from './model/periodista'

@Injectable()
export class Globals {
	public mensajeEmergencia: string
	public contactosEmergencia: Array<Periodista>

	public periodistasDifusion: Array<Periodista>
	public archivosDifusion: Array<Archivo>
	public mensajeDifusion: string
}