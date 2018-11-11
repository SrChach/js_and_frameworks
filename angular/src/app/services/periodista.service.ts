import { Injectable } from '@angular/core'
import { Periodista } from '../model/periodista'

@Injectable()
export class PeriodistaService{
	public zapatos: Array<Periodista>

	constructor(){
		this.zapatos = [
			new Periodista('Juan', 'chavez', 'a@a.a', true, 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg'),
			new Periodista('Eduardo', 'rojo', 'b@b.b', true, 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg'),
			new Periodista('Arturo', 'Arciniega', 'c@c.c', true, 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg'),
			new Periodista('Yoseline', 'Alcantara', 'd@d.d', true, 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg'),
			new Periodista('Luis', 'Zuñiga', 'e@e.e', true, 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg')
		]

	}
	
	getPeriodistas(): Array<Periodista>{
		return this.zapatos
	}

}