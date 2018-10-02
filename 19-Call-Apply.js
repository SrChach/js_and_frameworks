const sacha = {
	nombre: "sacha",
	apellido:"lifszyc"
}


function saludar(veces, uppercase) {
	let str = `Hola ${this.nombre} ${this.apellido}`
	str = uppercase ? str.toUpperCase() : str
	for(let i = 0; i < veces; i++){
		console.log(str)
	}
}
/*	Para call
*	Parametro1 : el "this" que le pasas
*	Mas parametros: los parametros de la funcion
*/	
saludar.call(sacha, 3)

/*	Para apply
*	Parametro1 : el "this" que le pasas 
*	Parametro2: un arreglo con los otros parámetros
*/
saludar.apply(sacha, [3, true])


/*Asigna el arreglo de parámetros a una constante 
	con el spread operator "..." lo desarma y se lo pasa a call
*/
const params = [3, true]
saludar.call(sacha, ...params)
