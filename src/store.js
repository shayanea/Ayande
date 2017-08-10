import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    showdashboardlist: false,
    shownotificationlist: false
}

const mutations = {
    ShowDashboardList: function (state) {
        state.showdashboardlist = !state.showdashboardlist;
        console.log(state.showdashboardlist)
    },
    ShowNotification: function (state) {
        state.shownotificationlist = !state.shownotificationlist;
        console.log(state.shownotificationlist)
    }
}

export default new Vuex.Store({
    state,
    mutations
})