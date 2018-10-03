/*	Programa que calcula al numero 'N' de la serie de fibonacci
*/
let i = 0
function fibo(num, calculados = {} ){
	console.log(i++)
	if(num === 1)
		return 0
	if(num === 2)
		return 1
	if(calculados[num])
		return calculados[num]

	return calculados[num] = fibo(num-1, calculados) + fibo(num-2, calculados)
}

fibo(1)