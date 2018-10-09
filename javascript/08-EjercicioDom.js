"use strict"

window.addEventListener('load', () => {
	console.log('DOM cargado!')


	var form = document.querySelector("#formulario")
	var dashed = document.querySelector(".dashed ")
	dashed.style.display = "none"

	formulario.addEventListener('submit', (e) => {
		e.preventDefault()
		console.log('Evento Sumbit capturado!')

		var nombre = document.querySelector("#nombre").value
		var apellidos = document.querySelector("#apellidos").value
		var edad = document.querySelector("#edad").value
		dashed.style.display = "block"

		var parrafo = document.createElement('p')
		parrafo.append(`nombre: ${nombre} ${apellidos}. \n edad: ${edad}`)
		dashed.append(parrafo)
	})
});