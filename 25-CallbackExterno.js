function get (URL, callback){
	const xhr = new XMLHttpRequest()

	xhr.onreadystatechange = function (){
		if(this.readyState === 4){
			if(this.status === 200){
				callback(null, JSON.parse(this.responseText))
			} else {
				callback(new Error(`Se produjo un error al realizar el request: ${this.status}`))
			}
		}
	}

	xhr.open('GET', URL)
	xhr.send(null)
}

function _error(err){
	console.log(`Hubo un error: ${err}`)
}

get('https://swapi.co/api/people/1/', function onResponse(err, luke){
	if(err) return _error(err)

	get(luke.homeworld, function onHomeworldResponse(err, homeworld){
		if(err) return _error(err) 

		luke.homeworld = homeworld.name
		console.log(`${luke.name} nació en ${luke.homeworld}`)
	})
	console.log(`Request succeded`)
	
})

