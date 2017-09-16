import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/login'
import ForgetPass from '@/page/forgetpass'
import Main from '@/page/main'
import NetworkGraph from '@/page/networkgraph'
import DashboardList from '@/page/dashboardlist'
import NewDashboard from '@/page/addnewdashboard'
import ModelList from '@/page/modellist'
import ViewList from '@/page/viewlist'
import UserList from '@/page/userlist'
// import Network from '@/page/network'


// import ModelList from '@/page/modellist'

// import Active from '@/page/active'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'main',
			component: Main
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		{
			path: '/forgetpass',
			name: 'forgestpass',
			component: ForgetPass
		},
		{
			path: '/networkgraph',
			name: 'networkgraph',
			component: NetworkGraph
		},
		{
			path: '/dashboardlist',
			name: 'dashboardlist',
			component: DashboardList
		},
		{
			path: '/addnewdashboard',
			name: 'addnewdashboard',
			component: NewDashboard
		},
		{
			path: '/modellist',
			name: 'modellist',
			component: ModelList
		},
		{
			path: '/viewlist',
			name: 'viewlist',
			component: ViewList	
		},
		{
			path: '/userlist',
			name: 'userlist',
			component: UserList	
		},
		// {
		// 	path: '/network',
		// 	name: 'network',
		// 	component: Network
		// },
		// {
		// 	path: '/dashboard',
		// 	name: 'dashboard',
		// 	component: Dashboard
		// },
		
		// {
		// 	path: '/active',
		// 	name: 'active',
		// 	component: Active
		// },
		
		// {
		// 	path: '/modellist',
		// 	name: 'modellist',
		// 	component: ModelList
		// },
		
		{ path: '*', redirect: '/' }
	]
})
