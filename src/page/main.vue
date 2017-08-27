<template>
    <div>
        <!-- Toolbar -->
        <div class="main" :class="{'blur' : this.$store.state.showdashboardlist}">
            <Topbar></Topbar>
            <Dlist :list="list"></Dlist>
            <CityStock></CityStock>
        </div>

       <!-- Notification List -->
        <Notifications :show="this.$store.state.shownotificationlist"></Notifications>

        <!-- Current Dashboards Board -->
        <Board></Board>

         <!-- WorkSpace -->
        <WorkSpace :list="list" :show="this.$store.state.showdashboardlist"></WorkSpace>

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
import Board from '../components/dashboard/board'
import BgWrapper from '../components/bgwrapper'
import CreateModel from '../components/model/popup'
import CreateView from '../components/view/popup'

export default {
    name:'main',
    data () {
        return {
            list:[
                {
                    id:0,
                    active:true,
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
        Board,
        BgWrapper,
        CreateModel,
        CreateView
    }
}
</script>

<style>
.main{
    height: 100%;
    width:100%;
    background: #f6f7fb;
    padding-top: 125px;
    transition: filter .2s ease;
}

.blur{
    -webkit-filter: blur(8px);
    -moz-filter: blur(8px);
    filter: blur(8px);
    transition: filter .2s ease;
    position: fixed;
    z-index: 9;
    top: 100px;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0;
}
</style>
