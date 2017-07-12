import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'

import Home from './Home.vue'
import Classe from './Classe.vue'


Vue.use(VueRouter)
Vue.use(Vuetify)


const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
  		{ path: '/', component: Home },
  		{ path: '/classe', component: Classe },	
	]
})


new Vue({
  router,
  el: '#app',
  render (createElement) {
    return createElement(App);
  }
})
