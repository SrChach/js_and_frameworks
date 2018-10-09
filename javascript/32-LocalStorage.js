/*	Uso del localStorage (almacenamiento) que nos da el navegador
*		 para guardar datos en el lado del cliente
*/

"use strict"

if(typeof(Storage) !== "undefined")
	console.log("localStorage disonible")
else
	console.log('version de navegador incompatible con localStorage disponible')

//	Guardar datos
localStorage.setItem("titulo", "curso de MEAN stack")

//	Recuperar elemento y meterlo en la página
document.querySelector("#content").innerHTML = localStorage.getItem("titulo")

//	Guardar objetos
var usuario = {
	nombre: "Ignacio Martinez",
	email: "gsikmo@gmail.com",
	web: "N/A"
}
	//	Por que no se pueden guardar objetos directamente
localStorage.setItem("usuario", JSON.stringify(usuario))

var userjson = JSON.parse(localStorage.getItem("usuario"))
console.log(userjson)

document.querySelector("#content").append(" " + userjson.nombre)

/*	Remueve un elemento del localStorage
	localStorage.removeItem("usuario")
*/

/*	vacia localStorage
	localStorage.clear()
*/