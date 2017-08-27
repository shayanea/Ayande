<template>
    <div class="save_view custome_modal" v-if="show">
        <div class="popup_header">
            <h2>ذخیره نما</h2>
        </div>
        <form @submit.prevent="Next">
            <div class="form-group">
                <label for="ParameterName">نام نما</label>
                <input type="text" class="form-control" v-model="title" />
            </div>
            <div class="form-group">
                <label for="ParameterName">لیست کاربران</label>
                <select class="form-control" v-model="selecteduser" @change="AddUser">
                    <option v-for="(item, index) of users" :key="index" :value="item.username">{{item.username}}</option>
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
            <button type="submit" class="btn btn-default save">ذخیره</button>
            <button type="button" class="btn btn-default close" @click="Prev">مرحله قبل</button>
        </form>
    </div>
</template>

<script>
export default {
    name:'submit',
    props: {
        show: {
            required: true,
            default: false
        }
    },
    data() {
        return {
            title: null,
            selecteduser: null,
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
            list:[]
        }
    },
    methods: {
        Prev: function() {
            this.$emit('hidesubmit',true);
        },
        Next: function() {
            this.$emit('submitview',{title: this.title, username: this.selecteduser});
        },
        AddUser: function() {
            this.list.push({username:this.selecteduser,id: this.list.length + 1})
        },
        RemoveSelected: function(item) {
            this.list = _.reject(this.list, {'id': item.id});
        }
    }
}
</script>

<style>
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
