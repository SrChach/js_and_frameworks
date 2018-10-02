function get (URL){
	return new Promise( (resolve, reject) => {
		const xhr = new XMLHttpRequest()

		xhr.onreadystatechange = function (){
			if(this.readyState === 4)
				if(this.status === 200)
					resolve(JSON.parse(this.responseText))
				else
					reject(new Error(`Se produjo un error al realizar el request: ${this.status}`))
		}

		xhr.open('GET', URL)
		xhr.send(null)
	})
}

function _error(err){
	console.log(`Hubo un error: ${err}`)
}

let luke

get('https://swapi.co/api/people/1/')
	.then((response) => {
		luke = response
		return get(luke.homeworld)
	})
	.then((homeworld) => {
		luke.homeworld = homeworld.name
		console.log(`${luke.name} nació en ${luke.homeworld}`)
	})
	.catch((err) => _error(err))

/* Otra forma de hacerlo:

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

*/