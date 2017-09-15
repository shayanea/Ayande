import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    showdashboardlist: false,
    shownotificationlist: false,
    cdropdown: false,
    showbgwrapper: false,
    showcreateview: false,
    showcreatemodal: false,
    custome_model: null,
    shownewdashboardconfig: false
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
    SaveCustomeModel: function(state,data)    {
        state.custome_model = data;
    },
    ShowCreateModel: function(state) {
        state.showcreatemodal = !state.showcreatemodal;
    },
    ShowCreateView: function(state) {
        state.showcreateview = !state.showcreateview;
    },
    ShowNewDashboardConfig: function(state) {
        state.shownewdashboardconfig = !state.shownewdashboardconfig;
    }
}

export default new Vuex.Store({
    state,
    mutations
})