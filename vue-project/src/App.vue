<template>
	<div id="app">
		<!-- Hace un bind con la propiedad titulo y se la pasa al hijo -->
		<app-list 
			:titulo="otro_titulo"
			v-on:incrementar="contador += $event"
			:decrementar="decrementar"/>
		<!-- Se manda el método 'decrementar' al hijo, para que éste responda cuando pase -->
		Numero de Tareas: {{ contador }}
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
		return { 
			otro_titulo: 'I\'m a Title c:',
			contador: 2
		}
	},
	/*	data: function(){} 
	 *		es lo mismo que 
	 *	data(){}
	 */
	methods: {
		decrementar(){
			this.contador--
		}
	}
}
</script>

<style lang="scss">
	
</style>
