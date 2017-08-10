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
    </div>
</template>
 
<script>
import Topbar from '../components/toolbar/topbar'
import CityStock from '../components/toolbar/citystock'
import Dlist from '../components/toolbar/dlist'
import WorkSpace from '../components/workspace'
import Notifications from '../components/notificationlist'
import Board from '../components/board'

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
        Board
    },
    methods: {
    }
}
</script>

<style>
.main{
    height: 100%;
    width:100%;
    background: #f6f7fb;
    padding-top: 65px;
    transition: filter .2s ease;
}

.blur{
    -webkit-filter: blur(15px);
    -moz-filter: blur(15px);
    filter: blur(15px);
    transition: filter .2s ease;
    position: fixed;
    z-index: 9;
}
</style>
