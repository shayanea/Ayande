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
import AddRole from '@/page/addrole'
import RoleList from '@/page/rolelist'
import AddCategory from '@/page/addcategory'
import CategoryReportList from '@/page/categoryreportlist'

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
			name: 'forgetpass',
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
		{
			path: '/addrole',
			name: 'addrole',
			component: AddRole
		},
		{
			path: '/rolelist',
			name: 'rolelist',
			component: RoleList
		},
		{
			path: '/addcategory',
			name: 'addcategory',
			component: AddCategory
		},
		{
			path: '/categoryreportlist',
			name: 'categoryreportlist',
			component: CategoryReportList
		},
		{ path: '*', redirect: '/' }
	]
})
