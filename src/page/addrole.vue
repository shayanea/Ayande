<template>
    <div class="main">
        <Toolbar></Toolbar>

        <div class="add-role-content">
            <div class="row">
                <form class="col-lg-4 col-md-6 col-sm-6 col-xs-12" @submit.prevent="SaveOrUdpate">
                    <div class="form-group">
                        <label for="RoleName">نام نقش</label>
                        <input type="text" class="form-control" id="RoleName" v-model="role.name"/>
                    </div>
                    <div class="form-group">
                        <label for="Description">شرح مختصر</label>
                        <textarea type="text" class="form-control" id="Description" v-model="role.description" rows="5"></textarea>
                    </div>
                    <div class="form-group access-table">
                        <label>دسترسی به امکانات و زیرسیستم ها</label>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>نام زیرسیستم</th>
                                    <th>مشاهده</th>
                                    <th>درج</th>
                                    <th>ویرایش</th>
                                    <th>حذف</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) of role.access" :key="index">
                                    <td>{{item.title}}</td>
                                    <td>
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" v-model="item.property.view">
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" v-model="item.property.add">
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" v-model="item.property.edit">
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" v-model="item.property.remove">
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="form-group">
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" v-model="role.active"> این نقش در سیستم فعال باشد ؟
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
import Toolbar from '../components/role/addroletoolbar'
import Notify from '../components/global/notify'

export default {
    name:'addrole',
    data () {
        return {
            role:{
                name: '',
                description: '',
                access: this.$store.state.access,
                active: false
            },
            ButtonText:'درج نقش',
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
        if(this.$store.state.editroleobj !== null){
            return this.role = this.$store.state.editroleobj;
        }
    },
    methods: {
        Close: function() {
            this.$router.push({ path: '/rolelist' });
        },
        SaveOrUdpate: function() {
            let self = this;
            this.NotifyObj = {
                status: true,
                message: 'اطلاعات نقش جدید با موفقیت در سیستم ثبت شد.'
            }
            setTimeout(function() {
                self.NotifyObj.status = false;
            },2000);
            // this.$router.push({ path: '/rolelist' });
        },
        HideNotify: function(){
            this.NotifyObj.state = false;
        }
    }
}
</script>

<style>
.add-role-content{
    padding: 25px;
    float: right;
    width: 100%;
}

.add-role-content label{
    color: #777;
    float: right;
    font-size: 13px;
    margin-bottom: 15px;
    clear: both;
}

.add-role-content .form-control{
    background-color: #eee;
    border: 1px solid #ccc;
    border-radius: 6px;
    box-shadow: none;
    outline: none;
    clear: both;
    float: right;
    margin-bottom: 15px;
}

.add-role-content input[type="text"].form-control{
    width: 250px;
}

.add-role-content textarea{
    resize: none;
}

.access-table {
    border-radius: 6px;
    text-align: center;
    margin-bottom: 25px;
}

.table-title {
    font-size: 1.3em;
    color: #222;
    background: #ffc72f;
    padding: 10px;
    text-align: center;
    margin: 0;
    font-weight: bold;
}

.access-table .table {
    direction: rtl;
    margin-bottom: 0;
    border-top: 2px solid #ffc72f;
}

.access-table .table tr th {
    font-size: 12px;
    text-align: center;
    background: #eaeaea;
    font-weight: bold;
    position: relative;
}

.access-table .table tr th:first-child{
    text-align: right;
}

.access-table .table tr:nth-of-type(odd) {
    background: #f5f3f3;
}

.access-table .table tr:nth-of-type(even) {
    background: #eaeaea;
}

.access-table .table tr td {
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    position: relative;
}

.access-table .table tr td:first-child{
    text-align: right;
}

.access-table .table tr td .checkbox{
    margin: 0 auto;
}

.access-table .table tr td label{
    float: none;
    margin: 0;
}

.add-role-content .checkbox{
    direction: rtl;
}

.add-role-content .btn{
    margin-left: 15px;
}

.add-role-content .btn:last-child{
    margin-left: 0;
}

.add-role-content .btn-default{
    background: #eee;
    color: #999;
    border:0;
    padding: 6px 20px;
}

.add-role-content .btn-primary{
    background: #2ecc71;
    color: #fff;
    border:0;
    padding: 6px 20px;
}

.add-role-content .btn-primary:focus,
.add-role-content .btn-primary:active,
.add-role-content .btn-primary:hover{
    opacity: .8;
    background: #2ecc71;
    outline: none;
}

.add-role-content .btn-default:focus,
.add-role-content .btn-default:active,
.add-role-content .btn-default:hover{
    outline: none;
}
</style>
