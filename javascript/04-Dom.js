/*	Ejemplos del DOM
*
*/

"use strict"

/*	Conseguir elementos por un ID concreto
*/

	//let caja = document.getElementById('micaja')
let caja = document.querySelector("#micaja")

caja.innerHTML = 'zoi una kaja xd'

caja.style.background = 'red'
caja.style.padding = '20px'
caja.className = "Hola"


function cambiaColor(caja, color){
	caja.style.background = color
}
console.log(caja)

/*	Conseguir elementos por sus etiquetas
*
*/
var todosDivs = document.getElementsByTagName('div')
let texto = todosDivs[2].textContent

// Nota: prepend añade antes y append después
var valor
for(valor in todosDivs){
	if(typeof todosDivs[valor].textContent == 'string'){
		let parrafo = document.createElement('p')
		let texto = document.createTextNode(todosDivs[valor].textContent)
		parrafo.append(texto)
		document.querySelector("#miseccion").append(parrafo)
	}
}
console.log(texto)

/*	Por clase
*
*/
let divsRojos = document.getElementsByClassName('rojo')
let divsAmarillos = document.getElementsByClassName('amarillo')
for(let div in divsRojos)
	if(divsRojos[div].className == 'rojo')
		divsRojos[div].style.background = 'red'
for(let div in divsAmarillos)
	if(divsAmarillos[div].className == 'amarillo')
		divsAmarillos[div].style.background = 'yellow'