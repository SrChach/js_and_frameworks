/*	Iterador usando closures
*/

function fibonacci(){
	let a = 0, b = 1
	return {
		next: function(reset){
			if(reset) a = 0, b = 1
			let f = a
			a = b
			b = f + a
			return { value: f, done: false }
		}
	}
}

let fibo = {}
fibo[Symbol.iterator] = fibonacci
 let i = 0

 for(let value of fibo) {
 	console.log(value)
 	i++
 	if(i > 20) break
 }

/*	O
	const fibo = fibonacci()
	fibo.next().value

	for(let i=0;i<10; i++){
		console.log(fibo.next().value)
	}
*/