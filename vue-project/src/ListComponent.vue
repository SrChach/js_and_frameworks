<template>
	<div>
		<h2>{{ tituloMayusculas() }}</h2>
		<input type="text" v-model="nueva_tarea" @keyup.enter="anadir()"> 
		<button @click='anadir()'>Agregar</button>
		<ul>
			<li v-for="(tarea, indice) in tareas">
				<span :class="{ terminada : !tarea.isActive}">{{ tarea.titulo }}</span> 
				<button @click="tarea.isActive = !tarea.isActive">
					<span v-if="tarea.isActive">check</span>
					<span v-else>uncheck</span>
				</button>
				<button @click="eliminar(indice)">x</button>
			</li>
		</ul>
	</div>
</template>

<script>
	import { bus } from './main.js'

	export default {
		/*	props: [ 'service_name' ] es sin validaciones
		 *	props: { 'something' } es para validaciones
		 */
		props: {
			titulo: {
				//	required: true,
				type: String,
				default: "Lista de Tareas"
			}
		},
		data(){
			return { 
				tareas: [
					{
						titulo: "Mejorar mi apariencia",
						isActive: true
					},
					{
						titulo: "Mejorar mi comunicación no verbal",
						isActive: true
					}
				],
				nueva_tarea: ""
			}
		},
		methods: {
			anadir: function(){
				if(this.nueva_tarea.trim() != ''){
					this.tareas.push({
						titulo: this.nueva_tarea,
						isActive: true
					})
					//	Forma uno de enviar datos, emite el evento 'incrementar', con el dato '1' al padre
					this.$emit('incrementar', 1)
				}
				this.nueva_tarea = ''
			},
			eliminar: function(indice){
				this.tareas.splice(indice, 1)
				/*	Forma dos de enviar datos, recibe un método en 'props'
				 *		desde el padre, y lo ejecuta desde aqui
				 *	this.decrementar()
				 */

				 //	Manda a llamar el servicio, y le pasa un valor
				bus.$emit('actualizarContador', this.tareas.length)
			},
			tituloMayusculas(){
				return this.titulo.toUpperCase()
			}
		}
	}
</script>

<!-- 
	Con 'scoped' forzamos que el estilo solo pueda ser usado en este componente
	Se pueden tener en el mismo componente ambos 'style', scoped y normal -->
<style>
	.terminada { text-decoration: line-through; }
</style>