<template>
    <div>
        <!-- Toolbar -->
        <div class="main" :class="{'blur' : this.$store.state.showdashboardlist}">
            <Topbar></Topbar>
            <Dlist :list="list"></Dlist>
            <!-- <CityStock></CityStock> -->
        </div>

        <!-- Notification List -->
        <Notifications :show="this.$store.state.shownotificationlist"></Notifications>

        <List></List>

         <!-- WorkSpace -->
        <WorkSpace :list="list" :show="this.$store.state.showdashboardlist" @create="ShowNewDashboard"></WorkSpace>

        <!-- Create Model -->
        <CreateModel></CreateModel>

        <!-- Create View -->
        <CreateView></CreateView>

        <!-- Background Wrapper -->
        <BgWrapper :show="this.$store.state.showbgwrapper"></BgWrapper>
    </div>
</template>
 
<script>
import Topbar from '../components/toolbar/topbar'
import CityStock from '../components/stock/citystock'
import Dlist from '../components/dashboard/dlist'
import WorkSpace from '../components/dashboard/workspace'
import Notifications from '../components/notificationlist'
import BgWrapper from '../components/bgwrapper'
import CreateView from '../components/view/popup'
import CreateModel from '../components/model/popup'
import List from '../components/list'

export default {
    name:'main',
    data () {
        return {
            list:[
                {
                    id:0,
                    active:false,
                    name:'گزارش عملکرد سپرده آینده سـاز'
                },{
                    id:1,
                    active:false,
                    name:'گزارش سپرده سالیانه'
                },{
                    id:2,
                    active:false,
                    name:'عملکرده ماهانه شعب'
                }
            ]
        }
    },
    components: {
        Topbar,
        CityStock,
        WorkSpace,
        Dlist,
        Notifications,
        BgWrapper,
        CreateView,
        CreateModel,
        List
    },
    methods: {
        ShowNewDashboard: function (status) {
            if(status){
                this.$store.commit('ShowDashboardList');
                this.$router.push({ path: '/dashboard' });
            }
        }
    }
}
</script>

<style>

</style>
