let platzom = (str) => {
	let translation = str
	if(str.toLowerCase().endsWith('ar'))
		translation = str.slice(0, -2)
	if(str.toLowerCase().startsWith('z'))
		translation += 'pe'
	
	const length = translation.length
	if(length >= 10)
		translation = `${translation.slice(0, Math.round(length/2))}-${translation.slice(Math.round(length/2))}`		

	const reverse = (str) => str.split('').reverse().join('')

	function minMay(str, tam){
		let translation = ''
		let capitalize = true 
		for(let i = 0; i< tam; i++){
			translation += capitalize ? str.charAt(i).toUpperCase() : str.charAt(i).toLowerCase()
			capitalize = !capitalize
		}
		return translation
	}

	if(str == reverse(str))
		return minMay(str, length)

	return translation
}