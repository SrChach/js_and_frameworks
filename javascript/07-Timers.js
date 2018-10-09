"use strict"

let milisegundos = 3000
let cond = true
let tiempo = setInterval(()=>{
	console.log(`pasaron ${milisegundos} milisegundos`)
	if(cond){
		console.log('condicion en true')
		cond = !cond
	} else {
		console.log('condicion en false')
		cond = !cond
	}
}, milisegundos)

let stop = document.querySelector('#stop')
stop.addEventListener('click', () => {
	alert('Haz parado la ejecucion en bucle!')
	clearInterval(tiempo)
})