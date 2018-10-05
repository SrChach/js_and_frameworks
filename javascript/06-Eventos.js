/*	Eventos de JS 
*/
"use strict"

window.addEventListener('load', ()=>{	// Espera a que la pagina cargue completamente para actuar
let boton = document. querySelector('#boton')

	//	Click
	boton.addEventListener('click', ()=>{
		alert('click')
	})

	//	Mouse over
	boton.addEventListener("mouseover", ()=>{
		boton.style.background = 'yellow'
	})

	//	Mouse out
	boton.addEventListener("mouseout", ()=>{
		boton.style.background = '#ccc'
	})

	//	Focus
	let input = document.querySelector("#campo_nombre")
	input.addEventListener('focus', () => {
		console.log('[focus] estas dentro del input')
	})

	//	Blur
	input.addEventListener('blur', () => {
		console.log('[blur] estas fuera del input')
	})

	//	Keydown
	input.addEventListener('keydown', (event) => {
		console.log(`[keydown] Pulsando esta tecla: ${String.fromCharCode(event.keyCode)}`)
	})

	//	Keypress
	input.addEventListener('keypress', (event) => {
		console.log(`[keypress] Pulsaste esta tecla: ${String.fromCharCode(event.keyCode)}`)
	})

	//	Keyup
	input.addEventListener('keyup', (event) => {
		console.log(`[keyup] Soltaste esta tecla: ${String.fromCharCode(event.keyCode)}`)
	})
})	