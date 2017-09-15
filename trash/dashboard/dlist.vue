<template>
    <div class="dashboard_list">
        <div class="dlist_title">
            دشبورد‌های شمـا
        </div>
        <div class="dlist_number">
            {{dashboard.total}}
        </div>
        <ul class="dlist_box">
            <li v-for="(item, index) of list" :key="index" :class="{'active' : item.active}">
                <div class="dlist_box_name">{{item.name}}</div>
            </li>
        </ul>
        <button class="btn newaction_btn" @click="ShowCreateModel">
            <div class="text">مدل جدید</div>
            <span class="plus_icon"></span>
        </button>
        <button class="btn newaction_btn" @click="ShowView">
            <div class="text">نمای جدید</div>
            <span class="plus_icon"></span>
        </button>
        <button class="btn newaction_btn" @click="ShowWorkSpace">
            <div class="text">دشبورد جدید</div>
            <span class="plus_icon"></span>
        </button>
    </div>
</template>

<script>
export default {
    name:'dashboardlist',
    props:{
        list:{
            required: true,
            default: ''
        }
    },
    data () {
        return {
            dashboard:{
                total:3
            }
        }
    },
    methods: {
        ShowView: function() {
            if(!this.$store.state.showbgwrapper){
                this.$store.commit('ShowBgWrapper');
            }
            this.$store.commit('ShowCreateView');
        },
        ShowCreateModel: function() {
            if(!this.$store.state.showbgwrapper){
                this.$store.commit('ShowBgWrapper');
            }
            this.$store.commit('ShowCreateModel');
        },
        ShowWorkSpace: function() {
            this.$store.commit('ShowDashboardList');
        },
        SaveDashboard: function() {
            this.$store.commit('ShowBgWrapper');
            this.$store.commit('ShowNewDashboardConfig');
        }
    }
}
</script>

<style>
.dashboard_list{
    background: #535353;
    padding: 15px 25px;
    position: fixed;
    top: 65px;
    right: 0;
    left: 0;
    z-index: 999;
    display: block;
    direction: rtl;
}

.dashboard_list .dlist_title{
    color: #f6b300;
    font-size: 1em;
    display: inline-block;
    margin-left: 10px;
}

.dashboard_list .dlist_number{
    display: inline-block;
    height: 15px;
    width: 15px;
    border-radius: 3px;
    text-align: center;
    line-height: 15px;
    color: #fff;
    font-size: 10px;
    background: #f63756;
    font-family: 'Number'!important;
}

.dashboard_list .dlist_box{
    list-style: none;
    display: inline-block;
    padding-left: 0;
    padding-right: 0;
    margin-right: 10px;
    cursor: pointer;
    margin-top: 0;
    margin-bottom: 0;
}

.dashboard_list .dlist_box li{
    margin-left: 10px;
    display: inline-block;
}

.dashboard_list .dlist_box li:last-child{
    margin-left: 0;
}

.dashboard_list .dlist_box li .dlist_box_name{
    color: #fff;
    font-size: .8em;
    padding: 8px 15px;
    background: #363636;
    border-radius: 4px;
    font-weight: bold;
    transition: background .3s ease, color .3s ease;
    position: relative;
}

.dashboard_list .dlist_box li .dlist_box_name:hover{
    background: #e2a500;
    color: #333;
    transition: background .3s ease, color .3s ease;
}

.dashboard_list .dlist_box li.active .dlist_box_name{
    background: #e2a500;
    color: #333;
}

.dashboard_list .dlist_box li.active .dlist_box_name:after{
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 5px 0 5px;
    border-color: #e2a500 transparent transparent transparent;
    transform: translate(-50%,0);
}

.dashboard_list .newaction_btn{
    position: relative;
    color: #333;
    background: rgb(128,128,128);
    padding: 6px 30px 6px 20px;
    float: left;
    outline: none!important;
    box-shadow: none;
    font-size: 13px;
    font-weight: bold;
    margin-right: 15px;
    font-weight: bold;
    font-family: "IRANSANS NORMAL";
    transition:  background .3s ease;
}

.dashboard_list .save_dash{
    background: #00B16A;
}

.dashboard_list .newaction_btn .text{
    opacity: 1;
    transition: opacity .3s ease, margin-left .3s ease;
}

.dashboard_list .newaction_btn:hover{
    background: #dca000;
    transition:  background .3s ease;
}

.dashboard_list .save_dash:hover{
    background: #1E824C;
}

.dashboard_list .newaction_btn:hover .text{
    opacity: 0;
    margin-left: -100%;
    transition: opacity .3s ease, margin-left .3s ease;
}

.dashboard_list .newaction_btn .plus_icon{
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translate(0,-50%);
    height: 12px;
    width: 12px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 12px;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ5MS44NiA0OTEuODYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5MS44NiA0OTEuODY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDY1LjE2NywyMTEuNjE0SDI4MC4yNDVWMjYuNjkxYzAtOC40MjQtMTEuNDM5LTI2LjY5LTM0LjMxNi0yNi42OXMtMzQuMzE2LDE4LjI2Ny0zNC4zMTYsMjYuNjl2MTg0LjkyNEgyNi42OSAgICBDMTguMjY3LDIxMS42MTQsMCwyMjMuMDUzLDAsMjQ1LjkyOXMxOC4yNjcsMzQuMzE2LDI2LjY5LDM0LjMxNmgxODQuOTI0djE4NC45MjRjMCw4LjQyMiwxMS40MzgsMjYuNjksMzQuMzE2LDI2LjY5ICAgIHMzNC4zMTYtMTguMjY4LDM0LjMxNi0yNi42OVYyODAuMjQ1SDQ2NS4xN2M4LjQyMiwwLDI2LjY5LTExLjQzOCwyNi42OS0zNC4zMTZTNDczLjU5LDIxMS42MTQsNDY1LjE2NywyMTEuNjE0eiIgZmlsbD0iIzMzMzMzMyIvPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=);
    transition: right .3s ease;
}

.dashboard_list .newaction_btn:hover .plus_icon{
    right: calc(50% - 5px);
    transition: right .3s ease;
}
</style>

