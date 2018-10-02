function Punto(x, y){
	this.x = x
	this.y = y
}

Punto.prototype.moverEnX = function moverEnX(x) { 
	this.x += x
	return this
}
Punto.prototype.moverEnY = function moverEnY(y) {
	this.y += y
	return this
}
Punto.prototype.distancia = function distancia(p){
	const x = this.x - p.x
	const y = this.y - p.y
	return Math.sqrt(x*x + y*y)
}

/* const p1 = {
	x: 0,
	y: 4,
	moverEnX(x){
		this.x += x
	},
	moverEnY(y){
		this.y += y
	}
} */

const p1 = new Punto(0, 4)
const p2 = new Punto(3, 0)

console.log(p1.distancia(p2))
