//	number
let num: number = 3

//	String
let cadena: string = `Ignacio Martinez xd ${num}`

//	Boolean
let bool: boolean = true

//	Any
let cualquiera: any = "Hola!"
cualquiera = false

//	Arrays
let lenguajes: Array<string> = ["PHP", "JS", "Python"]
let years: number[] = [1, 45, 3]

//	Varios tipos
let stringCad: string | number = 123
stringCad = "Holi!"

//	Declara tu tipo de dato
type alfanumerico = string | number
let an: alfanumerico = 123

/*	Ejemplo de let vs var
*/
var num1 = 10
var num2 = 11

if(true){
	let num1 = 44
	var num2 = 55
	console.log(`${num1} ${num2}`);
}

console.log(`${num1} ${num2}`);