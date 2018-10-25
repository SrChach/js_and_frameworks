//	Interface - 'Contrato'
interface CamisetaBase {
	setColor(color);
	getColor();
}

//	Decorador
function estampar(logo: string){
	return (target: Function) => {
		target.prototype.stamp = ():void => {
			console.log(`Camiseta estampada con el logo de ${logo}`)
		}
	}
}

//	Clase (Para evitar errores, remover el decorador)
@estampar('La Santa Suerte') 
class Camiseta implements CamisetaBase{
	private color: string
	private modelo: string
	private marca: string
	private talla: string
	private precio: number

	//	Constructor
	constructor(color = "blanco", modelo = "", marca = "naic", talla = "L", precio = 200){
		this.color = color
		this.modelo = modelo
		this.marca = marca
		this.talla = talla
		this.precio = precio
	}

	//	Metodos (funciones o acciones del objeto)
	public setColor(color: string){
		this.color = color
	}

	public getColor(){
		return this.color
	}
}

//	Clase hija
class Sudadera extends Camiseta {
	private capucha: boolean

	public setCapucha(capucha: boolean){
		this.capucha = capucha
	}

	public isCapucha(): boolean{
		return this.capucha
	}
}


let camiseta = new Camiseta("negro", "manga corta", "cocodrilo", "S", 21435634)
camiseta.setColor('Azul')
camiseta.stamp()
console.log(camiseta)


let sudadera = new Sudadera("Rojo", "Con bolsas", "rivuc", "XS", 12.2)
sudadera.setColor("violeta")
sudadera.setCapucha(true)
console.log(sudadera)