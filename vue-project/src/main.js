import Vue from 'vue'
import App from './App.vue'

//	Declaramos bus/service de datos para comunicacion entre componentes
export var bus = new Vue()

new Vue({
  el: '#app',
  render: h => h(App)
})
