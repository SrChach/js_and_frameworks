class Persona {
	constructor(nombre, amigos = []) {
		this.nombre = nombre
		this.amigos = amigos
	}
	/*
		listarAmigos(){
			const _this = this
			this.amigos.forEach(function (amigo){
				console.log(`Hola! Soy ${_this.nombre} y soy amigo de ${amigo}`)
			})
		}
	*/
	/*
		listarAmigos(){
			const _this = this
			this.amigos.forEach(function (amigo){
				console.log(`Hola! Soy ${this.nombre} y soy amigo de ${amigo}`)
			}.bind(this))
		}
	*/
	listarAmigos(){
		this.amigos.forEach((amigo) => {
			console.log(`Soy ${this.nombre} y soy amigo de ${amigo}`)
		})
	}
}

const sacha = new Persona("Sacha", ["Pedro", "Pablo", "Vilma"])