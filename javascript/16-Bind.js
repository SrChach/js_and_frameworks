class Togabble {
	constructor(el){
		// inicializar el estado interno
		this.el = el
		this.el.innerHTML = 'Off'
		this.activated = false
		this.el.addEventListener('click', this.onClick.bind(this))
	}

	onClick() {
		// Cambiar estado interno
		// llamar a ToggleText
		this.activated = !this.activated
		this.toggleText()
	}

	toggleText(){
		// cambiar el texto
		this.el.innerHTML = this.activated ? 'On' : 'Off'
	}
}

const button = document.getElementById('boton')
const miBoton = new Togabble(button)