<template>
    <form class="dashboard_from" v-if="show" @submit.prevent="Save">
        <div class="form-group">
            <label for="DashboardName">نام دشبورد جدید</label>
            <input type="text" class="form-control" id="DashboardName" v-model="title" 
            autocomplete="false" autofocus spellcheck="false"/>
        </div>
        <div class="form-group">
            <label for="ParameterName"> لیست کاربران برای دسترسی</label>
            <select class="form-control" v-model="selecteduser" @change="AddUser">
                <option v-for="(item, index) of users" :key="index" :value="item">{{item.username}}</option>
            </select>
        </div>
        <div class="clearfix"></div>
        <div class="user_list">
            <div class="grid_data" v-for="(item, index) of list" :key="index">
                <span class="remove_selected" @click="RemoveSelected(item)"></span>
                {{item.username}}
            </div>
        </div>
        <div class="clearfix"></div>
        <button type="submit" class="btn btn-default save">درج</button>
        <button type="button" class="btn btn-default close" @click="CloseForm">بستن</button>
    </form>
</template>

<script>
export default {
    name:'dashboardform',
    props:{
        show:{
            required: true,
            default: true
        }
    },
    data () {
        return {
            title:'',
            users:[{
                id:0,
                username:'کاربر ۱'
            },{
                id:1,
                username:'کاربر ۲'
            },{
                id:2,
                username:'کاربر ۳'
            },{
                id:3,
                username:'کاربر ۴'
            }],
            list:[],
            selecteduser: null,
            status: this.show
        }
    },
    methods: {
        AddUser: function() {
            if(!_.find(this.selected, {id: this.selecteduser.id})) {
                this.list.push(this.selecteduser);
            }
        },
        RemoveSelected: function(item) {
            this.list = _.reject(this.list, {'id': item.id});
        },
        CloseForm: function() {
            this.status = false;
            this.$emit('add',null);
        },
        Save: function() {
            this.$store.commit('ShowBgWrapper');
            this.$store.commit('ShowNewDashboardConfig');
        }
    }
}
</script>

<style scoped>
.dashboard_from{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    padding: 40px;
    direction: rtl;
    border-radius: 6px;
    z-index: 9999;
}

.dashboard_from .form-group label{
    margin-left: 20px;
}

.dashboard_from .form-control{
    font-size: 2em;
    color: #222;
    border-radius: 6px;
    outline: none;
    box-shadow: none;
    border:1px solid #e1e1e1;
    background: #fbfbfb;
    font-size: 14px;
    min-width: 350px;
}

.dashboard_from .btn{
    margin-top: 20px;
    float: left;
    outline: none;
}

.dashboard_from .save{
    background: #2ECC71;
    padding: 6px 40px;
    border:0;
    margin-right: 20px;
    color: #fff;
    transition: opacity .3s ease;
}

.dashboard_from .close{
    background: #eee;
    padding: 6px 40px;
    border:0;
    margin-right: 20px;
    color: #999;
    transition: opacity .3s ease;
}

.dashboard_from .btn:hover{
    opacity: .8;
    transition: opacity .3s ease;
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

