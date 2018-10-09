"use strict"
/*	Archivo para aprender fetch como petición Asíncrona
*/

var usuarios = []

fetch("https://jsonplaceholder.typicode.com/users")
	.then(data => data.json())
	.then(users => {
		usuarios = users
		console.log(usuarios)
	})