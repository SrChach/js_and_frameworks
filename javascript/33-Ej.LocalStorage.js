/*	Ejercicio práctico del Dom y el LocalStorage
*/

"use strict"

let formulario = document.querySelector("#formPeliculas")
let peliculasList = document.querySelector("#peliculasList")
let titulo, i

peliculasList.innerHTML = ""
for (i in localStorage) {
	if(typeof localStorage[i] == 'string'){
		let li = document.createElement("li")
		li.append(localStorage[i])
		peliculasList.append(li)
	}
}

formulario.addEventListener("submit", function(e){
	//	e.preventDefault()
	titulo = document.querySelector("#addPelicula").value
	if(titulo != ""){
		localStorage.setItem(titulo, titulo)
		let li = document.createElement("li")
		li.append(titulo)
		peliculasList.append(li)
	}
})