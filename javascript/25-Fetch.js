"use strict"
/*	Archivo para aprender fetch como petición Asíncrona
*/

let usrs = []
fetch("https://jsonplaceholder.typicode.com/users")
	.then(data => data.json())
	.then(response => {
		usrs = response
		console.log(usrs)
		usrs.map(function(usr, i) {
			console.log(`${usr.id} - ${usr.name}`)
		})
	})

/*Promises*/
fetch('https://swapi.co/api/people/1/')
	.then(response => response.json())
	.then((json) => {
		luke = json
		return fetch(luke.homeworld)
	})
	.then(response => response.json())
	.then((json) => {
		luke.homeworld = json.name
		console.log(`${luke.name} nació en ${luke.homeworld}`)
	})
	.catch((err) => _error(err))