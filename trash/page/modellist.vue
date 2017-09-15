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

        <ul class="list">
            <li v-for="(item, index) of fields" :key="index" @click="LoadModelTable">
                {{item}}
            </li>
            <div class="add_new_model" @click="AddNewModel">
                <span></span>
            </div>
        </ul>
        

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
import Dlist from '../components/dashboard/dlist'
import Board from '../components/dashboard/board'
import LineChart from '../components/chart/linechart'
import BgWrapper from '../components/bgwrapper'
import DForm from '../components/dashboard/form'
import CreateView from '../components/view/popup'
import Notifications from '../components/notificationlist'
import WorkSpace from '../components/dashboard/workspace'
import CreateModel from '../components/model/popup'

export default {
    name:'dashboard',
    data () {
        return {
            list: [
                {
                    id: 0,
                    active: false,
                    name: 'گزارش عملکرد سپرده آینده سـاز',
                    users: true
                }, {
                    id: 1,
                    active: false,
                    name: 'گزارش سپرده سالیانه',
                    users: false
                }, {
                    id: 2,
                    active: false,
                    name: 'عملکرده ماهانه شعب',
                    users: false
                }
            ],
            fields:['شماره حساب', 'تاریخ افتتاح حساب', 'کد مشتری', 'کد محصول', 'کد کانال', 'مبلغ افتتاح حساب', 'مانده حساب','تاریخ اختتام حساب']
        }
    },
    components: {
        Topbar,
        Dlist,
        LineChart,
        BgWrapper,
        DForm,
        Notifications,
        CreateView,
        CreateModel,
        WorkSpace,
        Board
    },
    methods: {
        AddNewModel: function() {
            if(!this.$store.state.showbgwrapper){
                this.$store.commit('ShowBgWrapper');
            }
            this.$store.commit('ShowCreateModel');
        },
        LoadModelTable: function() {
            this.$router.push({ path: '/model' });
        },
        ShowNewDashboard: function (status) {
            if(status){
                this.$store.commit('ShowDashboardList');
                this.$router.push({ path: '/dashboard' });
            }
        }
    }
}
</script>

<style scoped>
.list{
    list-style: none;
    text-align: right;
    padding: 20px;
    direction: rtl;
}

.list li{
    height: 100px;
    width: 150px;
    float: right;
    margin-left: 20px;
    margin-bottom: 20px;
    border-radius: 6px;
    background: #ddd;
    padding: 20px;
    position: relative;
    cursor: pointer;
    transition: all .3 ease;
    color: #444;
    font-size: 14px;
    font-family: 'IRANSANS BOLD';
    line-height: 65px;
    text-align: center;
}

.list li:hover{
    background: #f3b233;
    transition: all .3 ease;
}

.add_new_model{
    text-align: center;
    float: right;
    height: 100px;
    width: 150px;
    transition: all .3s ease;
    cursor: pointer;
    position: relative;
    background: #ddd;
    border-radius: 6px;
    margin-left: 20px;
    margin-bottom: 20px;
}

.add_new_model span{
    position: absolute;
    top: 50%;
    left: 50%;
    height: 40px;
    width: 40px;
    background-repeat: no-repeat;
    background-size: 40px;
    transform: translate(-50%,-50%);
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMxLjQ0NCAzMS40NDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMxLjQ0NCAzMS40NDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cGF0aCBkPSJNMS4xMTksMTYuODQxYy0wLjYxOSwwLTEuMTExLTAuNTA4LTEuMTExLTEuMTI3YzAtMC42MTksMC40OTItMS4xMTEsMS4xMTEtMS4xMTFoMTMuNDc1VjEuMTI3ICBDMTQuNTk1LDAuNTA4LDE1LjEwMywwLDE1LjcyMiwwYzAuNjE5LDAsMS4xMTEsMC41MDgsMS4xMTEsMS4xMjd2MTMuNDc2aDEzLjQ3NWMwLjYxOSwwLDEuMTI3LDAuNDkyLDEuMTI3LDEuMTExICBjMCwwLjYxOS0wLjUwOCwxLjEyNy0xLjEyNywxLjEyN0gxNi44MzN2MTMuNDc2YzAsMC42MTktMC40OTIsMS4xMjctMS4xMTEsMS4xMjdjLTAuNjE5LDAtMS4xMjctMC41MDgtMS4xMjctMS4xMjdWMTYuODQxSDEuMTE5eiIgZmlsbD0iIzY2NjY2NiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);
}

.add_new_model:hover{
    color: #444;
    border: 2px dashed #999;
    transition: all .3s ease;
}
</style>


