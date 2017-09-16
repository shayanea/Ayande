// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import lodash from 'lodash'

import Bootstrap from './assets/css/bootstrap.min.css'
import BootstrapRTL from './assets/css/bootstrap.rtl.css'
import Style from './assets/css/app.css'

import Trend from 'vuetrend'
import VueHighcharts from 'vue-highcharts';
import * as pagination from "vuejs-uib-pagination";
import store from './store'

Vue.config.productionTip = false

Vue.use(Trend)
Vue.use(VueHighcharts);
Vue.use(pagination);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})
