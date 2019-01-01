<template>
	<div id="app">
		<!-- Hace un bind con la propiedad titulo y se la pasa al hijo -->
		<app-list class="List" :titulo="otro_titulo"></app-list>
	</div>
</template>

<script>
//	Como tiene el export default, le damos el nombre que queramos a lo que importamos
import appList from './ListComponent.vue'

export default {
	/*	Aunque importemos, se carga el componente solo cuando lo especificamos en 'components'
	 *	Vue convierte cualquier componente en camel case, dentro del template, a separado por guiones
	 */
	components: {
		appList
	},
	data(){
		return { otro_titulo: 'I\'m a Title c:' }
	}
	/*	data: function(){} 
	 *		es lo mismo que 
	 *	data(){}
	 */
}
</script>

<style lang="scss">
	.List { border: 1px solid red; }
</style>
