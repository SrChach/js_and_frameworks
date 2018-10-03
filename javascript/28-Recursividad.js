/*	Programa que calcula al numero 'N' de la serie de fibonacci
*/

function fibo(num){
	if(num === 1)
		return 0
	if(num === 2)
		return 1
	return( fibo(num-1) + fibo(num-2) )
}

fibo(1) 