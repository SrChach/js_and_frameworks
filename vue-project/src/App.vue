<template>
	<div id="app">
		<List :titulo="otro_titulo"></List>
	</div>
</template>

<script>
import List from './ListComponent.vue'
export default {
	components: {
		List
	},
	data(){
		return { otro_titulo: 'I\'m a Title c:' }
	}
	/*	Es lo mismo que lo de arriba
		data: function(){
			return {
				otro_titulo: 'Title c:'
			}
		}
	*/
}
</script>

<style lang="scss">

</style>
