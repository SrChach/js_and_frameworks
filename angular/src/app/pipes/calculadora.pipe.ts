import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
	name: 'calculadora'
})
export class CalculadoraPipe implements PipeTransform {

	//	dato | calculadora: otrodato
	//Param1			//Param2
	transform(val: number, val2: number){
		let operaciones = `
			Suma: ${val + val2} <br>
			Resta: ${val - val2} <br>
			Multiplicacion: ${val * val2} <br>
			Division: ${val / val2} <br>
		`
		return operaciones
	}

}