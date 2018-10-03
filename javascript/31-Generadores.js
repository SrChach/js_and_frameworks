function* fibonacci(){
	let a = 0, b = 1

	while(true){
		let f = a
		a = b
		b = f + a
		let reset = yield f
		if(reset) a = 0, b = 1
	}
}

const fibo = fibonacci()
fibo.next()
fibo.next(true)