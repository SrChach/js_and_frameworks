/*  Usando Babel (babeljs.io/repl) para compatibilidad, se requiere polyfill:
*   "https://cdnjs.com/libraries/babel-polyfill"
*/

function _error(err){
	console.log(`Hubo un error: ${err}`)
}

async function getLuke(){
    try {
    	const res = await fetch('https://swapi.co/api/people/1/')
        let luke = await res.json()
        const res_Hw = await fetch(luke.homeworld)
        const homeworld = await res_Hw.json()
        console.log(`${luke.name} nació en ${homeworld.name}`)
    } catch (err){
    	_err(err)
    }
}

getLuke()