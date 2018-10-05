/*	probar el nuevo elemento `${}`
*/

let area = function (height, base){
	return (base * height)/2;
}
console.log(`El área de 7,2 es ${area(7,2)}`);


let area = (height, base) => {
	return (base * height)/2;
}
console.log(`El área de 7,2 es ${area(7,2)}`);


let area = (height, base) => height*base/2
console.log(`El área de 7,2 es ${area(7,2)}`);

	/*	ifs	*/

var nasho = 'Ignacio Martínez', bugs = 'Luis Antonio Flores', edadNasho = 15, edadBugs = 20;
let entrada = (nombre, edad, acompanado) => {
	if(edad >= 18){
		console.log(`${nombre} puede pasar al tren del amor 7u7r por que es mashor de edad`)
	} else if (acompanado){
		console.log(`${nombre} no tiene edad, pero puede pasar al tren del amor 7u7 por que viene acompañado`)
	} else {
		console.log(`${nombre} no puede entrar por pvto`)
	}
}