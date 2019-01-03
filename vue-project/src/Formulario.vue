<template>
	<form>
		<!-- Slot recibe e imprime cualquier cantidad de html recibida desde el componente -->
		<slot name="titulo"/>
		<slot name="zlotxd"/>
		<input type="email" placeholder="Pon tu correo">
		<input type="password" placeholder="pon la contraseña">
		<button>Iniciar sesión</button>
	</form>
</template>

<script>
	export default {
		props: [
			
		]
	}
</script>

<style>h1 { color: green; }</style>