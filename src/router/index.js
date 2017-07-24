import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/login'
import Main from '@/page/main'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		{
			path: '/main',
			name: 'main',
			component: Main
		}
	]
})
