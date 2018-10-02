/*	El operador "..." permite pasar N parámetros como un arreglo	*/

/*	Array.reduce()
*	Retorna un valor reducido de un arreglo, que ha pasado por ciertas modificaciones propias
*	Parametro 1 : Una función que recibe un "acumulador", el elemento actual
*		y... el índice por el que va?
*		Lo que retorna es el valor "nuevo" de acum
*	Parametro 2 : El valor inicial del acumulador
*
*/

function suma(...numeros) {
	/*
		console.log(numeros)
		let acum = 0
		for(let i=0; i<numeros.length; i++){
			acum += numeros[i]
		}
		return acum
	*/

	return numeros.reduce(function(acum, valorActual) {
		acum +=valorActual
		return acum
	}, /*Valor inicial*/0)
}
	/* O */
const suma = (...numeros) => 
	numeros.reduce( (acum, valorActual) => acum += valorActual,0 )

/*	Array.map()
*	Retorna un array con los elementos del arreglo modificados
*	Recibe una función que se va a ejecutar para cada uno de los elementos,
*		el parámetro recibe ésta es el elemento actual del arreglo.
*		Lo que le ocurra al elemento dentro de la función es con lo que se 
*		llenará el arreglo nuevo 
*/

function dobles(...numeros){
	/*
		let resultado = []
		for(let i=0; i<numeros.length; i++) {
			resultado.push(numeros[i] * 2)
		}
		return resultado
	*/

	return numeros.map(numero => { return numero * 2 } )
}
	/* o */
const dobles = (...numeros) => numeros.map(numero => numero *2)

/*	Array.filter()
*	Retorna un array con los elementos del arreglo que cumplan con el criterio
*	Recibe una función, cuyo parámetro es el elemento actual del arreglo
*		lo que ocurre dentro de la función es el criterio, debe devolver 
*		true si se cumple y false si no
*/

const pares = (...numeros) => numeros.filter(numero => numero % 2 == 0)


suma(1, 436, 2, 3)
dobles(1, 2)
pares(1, 3, 2, 8)