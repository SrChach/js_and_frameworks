const Punto = {
	init: function init(x, y){
		this.x = x
		this.y = y
	},
	moverEnX: function moverEnX(x){
		this.x +=x
		return this
	},
	moverEnY: function moverEnY(y){
		this.y += y
		return this
	},
	distancia: function distancia(p){
		const x = this.x - p.x
		const y = this.y - p.y
		return Math.sqrt(x*x + y*y)
	}
}

const p1 = Object.create(Punto)
p1.init(0, 4)

const p2 = Object.create(Punto)
p2.init(3, 0)

console.log(p1.distancia(p2))