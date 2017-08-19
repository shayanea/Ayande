import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    showdashboardlist: false,
    shownotificationlist: false,
    cdropdown: false,
    showbgwrapper: false,
    showcreatemodel: false,
    showcreateview: false,
    custome_model:null
}

const mutations = {
    ShowDashboardList: function (state) {
        state.showdashboardlist = !state.showdashboardlist;
    },
    ShowNotification: function (state) {
        state.shownotificationlist = !state.shownotificationlist;
    },
    ShowChartDropdown: function(state) {
        state.cdropdown = !state.cdropdown;
    },
    ShowBgWrapper: function(state) {
        state.showbgwrapper = !state.showbgwrapper;
    },
    ShowCreateModel: function(state) {
        state.showcreatemodel = !state.showcreatemodel;
    },
    SaveCustomeModel: function(state,data)    {
        state.custome_model = data;
    },
    ShowCreateView: function(state) {
        state.showcreateview = !state.showcreateview;
    }
}

export default new Vuex.Store({
    state,
    mutations
})