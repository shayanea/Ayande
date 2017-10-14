<template>
    <div class="main">
        <Toolbar></Toolbar>

        <div class="add-category-content">
            <div class="row">
                <form class="col-lg-4 col-md-6 col-sm-6 col-xs-12" @submit.prevent="SaveOrUdpate">
                    <div class="form-group">
                        <label for="CategoryName">نام دسته بندی</label>
                        <input type="text" class="form-control" id="CategoryName" v-model="category.name"/>
                    </div>
                    <div class="form-group">
                        <label for="Description">نوع گره</label>
                        <select class="form-control" id="roles" v-model="category.nodetype">
                            <option v-for="(item, index) of this.$store.state.nodetype" :key="index" :value="item">{{item.title}}</option>
                        </select>
                    </div>
                    <div class="form-group access-table">
                        <label>گره پدر</label>
                        <select class="form-control" id="roles" v-model="category.nodeparent">
                            <option v-for="(item, index) of this.$store.state.nodeparent" :key="index" :value="item">{{item.title}}</option>
                        </select>
                    </div>
                    <div class="form-group access-table">
                        <label>دسته بندی های مرتبط</label>
                        <select class="form-control" id="roles" v-model="Similar" @change="AddSimilar">
                            <option v-for="(item, index) of this.$store.state.similarnode" :key="index" :value="item">{{item.title}}</option>
                        </select>
                        <div class="selected-list" v-if="SelectedSimilar.length > 0">
                            <div class="selected-item" v-for="(item, index) of SelectedSimilar" :key="index">
                                {{item.title}}
                                <span class="remove-item" @click="RemoveSimilar(item)"></span>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="Description">شرح مختصر</label>
                        <textarea type="text" class="form-control" id="Description" v-model="category.description" rows="5"></textarea>
                    </div>
                    <div class="form-group">
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" v-model="category.active"> این دسته بندی در سیستم فعال باشد و نمایش داده شود
                            </label>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="form-group" style="direction: rtl;">
                        <button type="button" class="btn btn-default" @click="Close">انصراف</button>
                        <button type="submit" class="btn btn-primary">{{ButtonText}}</button>
                    </div>
                </form>
            </div>
        </div>

        <Notify :message="NotifyObj.message" :show="NotifyObj.status"></Notify>
    </div>
</template>
 
<script>
import FixedHeader from '../components/header/header.vue'
import Toolbar from '../components/category/addcategorytoolbar'
import Notify from '../components/global/notify'

export default {
    name:'addcategory',
    data () {
        return {
            category:{
                active: false,
                name: '',
                nodetype: null,
                nodeparent: null,
                description: '',
                similarcategory: false
            },
            Similar: null,
            ButtonText:'درج دسته بندی',
            SelectedSimilar: [],
            NotifyObj: {
                status: false,
                message: ''
            }
        }
    },
    components: {
        Toolbar,
        Notify
    },
    mounted (){
        if(this.$store.state.editroleobj){
            // return this.role = this.$store.state.editroleobj;
            return this.category = {
                active: true,
                name: 'محصول',
                nodetype: 'گره اصلی',
                nodeparent: '',
                description: 'فهرست گزارش های مرتبط با محصولات',
                similarcategory: false
            };
        }
    },
    methods: {
        AddSimilar: function() {
            this.SelectedSimilar.push({title:this.Similar.title,id: this.Similar.id})
        },
        RemoveSimilar: function(item) {
            this.SelectedSimilar = _.reject(this.SelectedSimilar, {'id': item.id});
        },
        Close: function() {
            this.$router.push({ path: '/' });
        },
        SaveOrUdpate: function() {
            let self = this;
            this.NotifyObj = {
                status: true,
                message: 'اطلاعات دسته بندی گزارش جدید با موفقیت در سیستم ثبت شد.'
            }
            this.$store.state.nodes.push({
                "id": 4,
                "name": "گره جدید",
                "_cssClass": "main-node",
                "_color": "#666",
                "_labelClass": "node-title"
            });
            this.$store.state.links.push({
                "sid": 1001,
                "tid": 4
            });
            setTimeout(function() {
                self.NotifyObj.status = false;
                self.$router.push({ path: '/networkgraph' });
            },1000);
        },
        HideNotify: function(){
            this.NotifyObj.state = false;
        }
    }
}
</script>

<style>
.add-category-content{
    padding: 25px;
    float: right;
    width: 100%;
}

.add-category-content label{
    color: #222;
    float: right;
    font-size: 13px;
    margin-bottom: 15px;
    clear: both;
}

.add-category-content .form-control{
    background-color: #eee;
    border: 1px solid #ccc;
    border-radius: 6px;
    box-shadow: none;
    outline: none;
    clear: both;
    float: right;
    margin-bottom: 15px;
    direction: rtl;
}

.add-category-content input.form-control,
.add-category-content select.form-control{
    width: 250px;
}

.add-category-content textarea{
    resize: none;
}

.add-category-content .selected-list{
    float: right;
    clear: both;
    margin: 15px 0;
    direction: rtl;
}

.add-category-content .selected-list .selected-item{
    border-radius: 6px;
    background-color: #ddd;
    color: #666;
    text-align: center;
    padding: 5px 15px 5px 25px;
    margin-left: 10px;
    display: inline-block;
    margin-bottom: 5px; 
    position: relative;
}

.add-category-content .selected-list .selected-item:last-child{
    margin-left: 0;
}

.add-category-content .selected-list .selected-item .remove-item{
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translate(0,-50%);
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ljk3MSA0Ny45NzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ3Ljk3MSA0Ny45NzE7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij4KPGc+Cgk8cGF0aCBkPSJNMjguMjI4LDIzLjk4Nkw0Ny4wOTIsNS4xMjJjMS4xNzItMS4xNzEsMS4xNzItMy4wNzEsMC00LjI0MmMtMS4xNzItMS4xNzItMy4wNy0xLjE3Mi00LjI0MiwwTDIzLjk4NiwxOS43NDRMNS4xMjEsMC44OCAgIGMtMS4xNzItMS4xNzItMy4wNy0xLjE3Mi00LjI0MiwwYy0xLjE3MiwxLjE3MS0xLjE3MiwzLjA3MSwwLDQuMjQybDE4Ljg2NSwxOC44NjRMMC44NzksNDIuODVjLTEuMTcyLDEuMTcxLTEuMTcyLDMuMDcxLDAsNC4yNDIgICBDMS40NjUsNDcuNjc3LDIuMjMzLDQ3Ljk3LDMsNDcuOTdzMS41MzUtMC4yOTMsMi4xMjEtMC44NzlsMTguODY1LTE4Ljg2NEw0Mi44NSw0Ny4wOTFjMC41ODYsMC41ODYsMS4zNTQsMC44NzksMi4xMjEsMC44NzkgICBzMS41MzUtMC4yOTMsMi4xMjEtMC44NzljMS4xNzItMS4xNzEsMS4xNzItMy4wNzEsMC00LjI0MkwyOC4yMjgsMjMuOTg2eiIgZmlsbD0iIzU1NTU1NSIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=);
    height: 8px;
    width: 8px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 8px;
    cursor: pointer;
}

.add-category-content .checkbox{
    direction: rtl;
}

.add-category-content .btn{
    margin-left: 15px;
}

.add-category-content .btn:last-child{
    margin-left: 0;
}

.add-category-content .btn-default{
    background: #eee;
    color: #999;
    border:0;
    padding: 6px 20px;
}

.add-category-content .btn-primary{
    background: #2ecc71;
    color: #fff;
    border:0;
    padding: 6px 20px;
}

.add-category-content .btn-primary:focus,
.add-category-content .btn-primary:active,
.add-category-content .btn-primary:hover{
    opacity: .8;
    background: #2ecc71;
    outline: none;
}

.add-category-content .btn-default:focus,
.add-category-content .btn-default:active,
.add-category-content .btn-default:hover{
    outline: none;
}
</style>
