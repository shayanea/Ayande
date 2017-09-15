<template>
    <div>
        <!-- Toolbar -->
        <div class="main" :class="{'blur' : this.$store.state.showdashboardlist}">
            <Topbar></Topbar>
            <Dlist :list="list"></Dlist>
            <!-- <CityStock></CityStock> -->
        </div>

        <!-- modal for add view to dashboard -->
        <div v-if="showlist" class="custome_modal view_list">
            <div class="popup_header">
                <h2>انتخاب نما</h2>
            </div>
            <form @submit.prevent="Pick">
                <div class="form-group">
                    <label for="ParameterName">فهرست نماها</label>
                    <select class="form-control" v-model="selectedview">
                        <option v-for="(item, index) of views" :key="index" :value="item.title">{{item.title}}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="ParameterName">لیست کاربران مجاز برای مشاهده</label>
                    <select class="form-control" v-model="selecteduser" @change="AddUser">
                        <option v-for="(item, index) of users" :key="index" :value="item.username">{{item.username}}</option>
                    </select>
                </div>
                <div class="clearfix"></div>
                <div class="user_list">
                    <div class="grid_data" v-for="(item, index) of array" :key="index">
                        <span class="remove_selected" @click="RemoveSelected(item)"></span>
                        {{item.username}}
                    </div>
                </div>
                <div class="form-group">
                    <label for="ParameterName">لیست نقش های مجاز برای مشاهده</label>
                    <select class="form-control" v-model="selectedrole" @change="AddRole">
                        <option v-for="(item, index) of roles" :key="index" :value="item.role">{{item.role}}</option>
                    </select>
                </div>
                <div class="clearfix"></div>
                <div class="user_list">
                    <div class="grid_data" v-for="(item, index) of arr" :key="index">
                        <span class="remove_selected" @click="RemoveRole(item)"></span>
                        {{item.role}}
                    </div>
                </div>
                <div class="clearfix"></div>
                <button type="submit" class="btn btn-default save">ذخیره</button>
                <button type="button" class="btn btn-default close" @click="Close">انصراف</button>
            </form>
        </div>

        <div v-if="savedash" class="custome_modal view_list">
            <div class="popup_header">
                <h2>ذخیره دشبورد</h2>
            </div>
            <form @submit.prevent="SaveDash">
                <div class="form-group">
                    <label for="ParameterName">نام دشبورد</label>
                    <input class="form-control" type="text"/>
                </div>
                <div class="form-group">
                    <label for="ParameterName">لیست کاربران مجاز برای مشاهده</label>
                    <select class="form-control" v-model="selecteduser" @change="AddUser">
                        <option v-for="(item, index) of users" :key="index" :value="item.username">{{item.username}}</option>
                    </select>
                </div>
                <div class="clearfix"></div>
                <div class="user_list">
                    <div class="grid_data" v-for="(item, index) of array" :key="index">
                        <span class="remove_selected" @click="RemoveSelected(item)"></span>
                        {{item.username}}
                    </div>
                </div>
                <div class="form-group">
                    <label for="ParameterName">لیست نقش های مجاز برای مشاهده</label>
                    <select class="form-control" v-model="selectedrole" @change="AddRole">
                        <option v-for="(item, index) of roles" :key="index" :value="item.role">{{item.role}}</option>
                    </select>
                </div>
                <div class="clearfix"></div>
                <div class="user_list">
                    <div class="grid_data" v-for="(item, index) of arr" :key="index">
                        <span class="remove_selected" @click="RemoveRole(item)"></span>
                        {{item.role}}
                    </div>
                </div>
                <div class="clearfix"></div>
                <button type="submit" class="btn btn-default save">ذخیره دشبورد</button>
                <button type="button" class="btn btn-default close" @click="Exit">انصراف</button>
            </form>
        </div>

        <!-- Current Dashboards Board -->
        <!-- <Board v-if="status"></Board> -->

        <div class="container-fluid boards_list">
            <div class="board" v-for="(item, index) of chart" :key="index" v-if="empty">
                <LineChart v-if="item.type == 'spline' || item.type == 'line'" :list="item.data" :title="item.title" :type="item.type" :labeltext="item.labeltext" :labelstatus="item.labelstatus" :marker="item.marker" :timeline="item.time"
                :suffix="item.suffix"></LineChart>
            </div> 
            <div v-if="!status" class="add_new_view" @click="AddNewView">
                <span></span>
            </div>
        </div>

        <!-- Notification List -->
        <Notifications :show="this.$store.state.shownotificationlist"></Notifications>

         <!-- WorkSpace -->
        <WorkSpace :list="list" :show="this.$store.state.showdashboardlist" @create="ShowNewDashboard"></WorkSpace>

        <!-- Create Model -->
        <CreateModel></CreateModel>

        <!-- Create View -->
        <CreateView></CreateView>

        <!-- Background Wrapper -->
        <BgWrapper :show="this.$store.state.showbgwrapper"></BgWrapper>

        <DForm :show="this.$store.state.shownewdashboardconfig" @add="HideForm"></DForm>

        <div class="notify_center">
            <div class="save_dashboaard" @click="SaveDashboard">
                ذخیره دشبورد
                <br>
                Ctrl + S
            </div>
            <div class="info">
                توجه !<br>
                دشبورد شما ذخیره نشده است.
            </div>
        </div>
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
                    active: true,
                    name: 'نام دشبورد جدید'
                }, {
                    id: 1,
                    active: false,
                    name: 'گزارش سپرده سالیانه'
                }, {
                    id: 2,
                    active: false,
                    name: 'عملکرده ماهانه شعب'
                }
            ],
            chart:[
                { title: 'روند کل مانده سپرده آینده ساز', suffix: ' ریال', marker: false, type: 'spline', labeltext: 'مانده', labelstatus: true, data: {series:[75156297, 75281285, 75407194, 75575977, 75620583, 75770899, 75861813, 76048850, 76265894, 76407894, 76518405, 76659862, 76835274, 77156891, 77370932, 77623502, 77777966]},time: ['96/04/14', '96/04/15', '96/04/17', '96/04/18', '96/04/19', '96/04/20', '96/04/21','96/04/22', '96/04/23', '96/04/24', '96/04/25', '96/04/25', '96/04/26', '96/04/27', '96/04/28','96/04/29', '96/04/30', '96/04/31', '96/05/01', '96/05/02', '96/05/03', '96/05/04', '96/05/05']}
            ],
            views:[{
                id:0,
                title:'کاربر روند کل مانده سپرده آینده ساز'
            },{
                id:0,
                title:'کاربر روند تعداد سپرده آینده ساز'
            },{
                id:0,
                title:'کاربر مبلغ سپرده در دسته بندی های مبلغی'
            }],
            savedash: false,
            empty: false,
            status: false,
            showlist: false,
            selectedview: null,
            selecteduser: null,
            selectedrole: null,
            users:[{
                id:0,
                username:'کاربر ۱'
            },{
                id:0,
                username:'کاربر ۲'
            },{
                id:0,
                username:'کاربر ۳'
            },{
                id:0,
                username:'کاربر ۴'
            }],
            roles:[{
                id:0,
                role:'نقش ۱'
            },{
                id:0,
                role:'نقش ۲'
            },{
                id:0,
                role:'نقش ۳'
            },{
                id:0,
                role:'نقش ۴'
            }],
            array: [],
            arr: []
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
        Pick: function () {
            this.empty = true;
            this.showlist = false;
            this.$store.commit('ShowBgWrapper');
        },
        AddNewView: function () {
            this.$store.commit('ShowBgWrapper');
            this.showlist = true;
        },
        Close: function () {
            this.showlist = false;
            this.$store.commit('ShowBgWrapper');
        },
        HideForm: function () {
            this.form = false;
        },
        ShowNewDashboard: function (status) {
            if(status){
                this.$store.commit('ShowDashboardList');
                this.$router.push({ path: '/dashboard' });
            }
        },
        AddUser: function() {
            this.array.push({username:this.selecteduser,id: this.array.length + 1})
        },
        RemoveSelected: function(item) {
            this.array = _.reject(this.array, {'id': item.id});
        },
        AddRole: function() {
            this.arr.push({role:this.selectedrole,id: this.arr.length + 1})
        },
        RemoveRole: function(item) {
            this.arr = _.reject(this.arr, {'id': item.id});
        },
        SaveDashboard: function() {
            this.savedash = true;
            this.selectedrole = null;
            this.selecteduser = null;
            this.arr = [];
            this.array = [];
            this.$store.commit('ShowBgWrapper');
        },
        Exit: function() {
            this.savedash = false;
            this.$store.commit('ShowBgWrapper');
        },
        SaveDash: function() {
            this.savedash = false;
            this.$store.commit('ShowBgWrapper');
            this.$router.push({ path: '/dashboardlist' });
        }
    }
}
</script>

<style>
.boards_list{
    background: #f7f7f7;
    padding:30px;
    min-height: 100vh;
}
.add_new_view{
    text-align: center;
    float: right;
    height: 250px;
    width: 200px;
    transition: all .3s ease;
    cursor: pointer;
    position: relative;
    background: #ddd;
    border-radius: 6px;
}

.add_new_view span{
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

.add_new_view:hover{
    color: #444;
    border: 2px dashed #999;
    transition: all .3s ease;
}

.view_list ul{
    list-style: none;
    padding: 20px 0;
    max-width: 250px;
}

.view_list ul li{
    float: right;
    padding: 15px;
    text-align: right;
    margin-bottom: 10px;
    border-bottom:1px solid #eee;
    font-size: 13px;
    color: #222;
    clear: both;
    width: 100%;
}

.notify_center{
    position: absolute;
    bottom: 15px;
    left: 15px;
}

.save_dashboaard{
    display: inline-block;
    background: rgb(46, 204, 113);
    color: #fff;
    font-size: 15px;
    padding: 25px 40px;
    border-radius: 6px;
    text-align: center;
    margin-bottom: 25px;
    cursor: pointer;
}

.info{
    display: inline-block;
    background: #F7ED98;
    color: #222;
    font-size: 15px;
    padding: 25px 40px;
    border-radius: 6px;
    text-align: right;
    direction: rtl;
    margin-bottom: 25px;
    margin-left: 15px;
    font-weight: bold;
}
.user_list{
    max-width: 400px;
}

.user_list .grid_data{
    display: inline-block;
    padding: 5px 10px;
    color: #222;
    background: #eee;
    margin-left: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
    cursor: pointer;
    position: relative;
    padding-right: 25px;
    transition: background .3s ease;
}

.grid_data:hover{
    background: #ddd;
    transition: background .3s ease;
}

.grid_data .remove_selected{
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translate(0,-50%);
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ljk3MSA0Ny45NzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ3Ljk3MSA0Ny45NzE7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij4KPGc+Cgk8cGF0aCBkPSJNMjguMjI4LDIzLjk4Nkw0Ny4wOTIsNS4xMjJjMS4xNzItMS4xNzEsMS4xNzItMy4wNzEsMC00LjI0MmMtMS4xNzItMS4xNzItMy4wNy0xLjE3Mi00LjI0MiwwTDIzLjk4NiwxOS43NDRMNS4xMjEsMC44OCAgIGMtMS4xNzItMS4xNzItMy4wNy0xLjE3Mi00LjI0MiwwYy0xLjE3MiwxLjE3MS0xLjE3MiwzLjA3MSwwLDQuMjQybDE4Ljg2NSwxOC44NjRMMC44NzksNDIuODVjLTEuMTcyLDEuMTcxLTEuMTcyLDMuMDcxLDAsNC4yNDIgICBDMS40NjUsNDcuNjc3LDIuMjMzLDQ3Ljk3LDMsNDcuOTdzMS41MzUtMC4yOTMsMi4xMjEtMC44NzlsMTguODY1LTE4Ljg2NEw0Mi44NSw0Ny4wOTFjMC41ODYsMC41ODYsMS4zNTQsMC44NzksMi4xMjEsMC44NzkgICBzMS41MzUtMC4yOTMsMi4xMjEtMC44NzljMS4xNzItMS4xNzEsMS4xNzItMy4wNzEsMC00LjI0MkwyOC4yMjgsMjMuOTg2eiIgZmlsbD0iIzU1NTU1NSIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=);
    height: 8px;
    width: 8px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 8px;
}
</style>


