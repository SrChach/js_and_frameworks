<template>
	<div id="app">
		<!-- Hace un bind con la propiedad titulo y se la pasa al hijo -->
		<app-list 
			:titulo="otro_titulo"
			v-on:incrementar="contador += $event"
			v-on:ac/>
		<!-- Se manda el método 'decrementar' al hijo, para que éste responda cuando pase -->
		Numero de Tareas: {{ contador }}

		<Formulario>
			<h3 slot="zlotxd">Cambiar contraseña</h3>
			<h1 slot="titulo">Titulo del slot</h1>
		</Formulario>

		<br><br>
	<div class="borde-rojo">
		<button @click="componente = 'Formulario'">formulario</button>
		<button @click="componente = 'app-list'">Listado</button>
		<!-- Usamos la etiqueta keep-alive para que el componente permanezca a pesar de ciertas acciones -->
		<keep-alive>
			<!-- Usamos la etiqueta component para cargar dinámicamente un componente -->
			<component :is="componente"></component>
		</keep-alive>
	</div>

	</div>
</template>

<script>
//	Como tiene el export default, le damos el nombre que queramos a lo que importamos
import appList from './ListComponent.vue'
import Formulario from './Formulario.vue'
import { bus } from './main.js'

export default {
	/*	Aunque importemos, se carga el componente solo cuando lo especificamos en 'components'
	 *	Vue convierte cualquier componente en camel case, dentro del template, a separado por guiones
	 */
	components: {
		appList,
		Formulario
	},
	data(){
		return { 
			otro_titulo: 'I\'m a Title c:',
			contador: 2,
			componente: 'Formulario'
		}
	},
	/*	data: function(){} 
	 *		es lo mismo que 
	 *	data(){}
	 */
	created(){
		//	Cuando el hijo(o alguien más) llame el método del bus, ejecuta algo
		bus.$on('actualizarContador', (numTareas) => {
			this.contador = numTareas
		})
	}
}
</script>

<style lang="scss">
	.borde-rojo {
		border: 2px solid red;
	}
</style>
