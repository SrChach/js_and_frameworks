/*	Fábrica de funciones!!! 
*	Los closures son funciones que retornan/crean... funciones?
*	Recuerdan las variables de la funcion en la que fueron inicializadas
*/

function saludarFamilia(apellido) {
	return function saludarMiembro(nombre) {
		console.log(`Hola ${nombre} ${apellido}`)
	}
}

const saludarGomez = saludarFamilia("Gomez")
const saludarPerez = saludarFamilia("Perez")

saludarGomez("Yoseline")
saludarGomez("Adrian")
saludarGomez("Martin")
saludarGomez("Jose")

saludarPerez("jorge")
saludarPerez("eduardaxd")

function mkPrefixer(prefijo){
	return (palabra) => console.log(`${prefijo + palabra}`)
}

const mkPrefixer = (prefijo) => (palabra) => console.log(`${prefijo + palabra}`)

const re = mkPrefixer("re")
re("bueno")
re("malo")
