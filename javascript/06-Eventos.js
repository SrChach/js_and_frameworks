/*	Eventos del ratón
*/
"use strict"

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