<template>
    <div class="main">
        <UserSearch @search="Search"></UserSearch>

        <div class="user-content">
            <div class="row">
                <div class="col-md-6 col-sm-6 col-xs-12 user-table">
                    <h2 class="table-title">لیست کاربران</h2>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>شماره مشخصه</th>
                                <th>شناسه کاربری</th>
                                <th>نام و نام خانوادگی</th>
                                <th>تاریخ ثبت نام</th>
                                <th>تاریخ آخرین ورود</th>
                                <th colspan="2" style="text-align:center">ابزار</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) of filteredList" :key="index">
                                <td>{{item.id}}</td>
                                <td>{{item.username}}</td>
                                <td>{{item.firstname}} {{item.lastname}}</td>
                                <td>{{item.createdate}}</td>
                                <td>{{item.lastlogin}}</td>
                                <td @click="EditUser(item)">
                                    <div class="edit-user"></div>
                                </td>
                                <td @click="RemoveUser(item)">
                                    <div class="remove-user"></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <uib-pagination v-model="pagination" :items-per-page="10" :total-items="totalItems" :max-size="maxSize" class="pagination-sm" :boundary-link-numbers="false" :direction-links="true" :rotate="false" :next-text="'بعدی'" :previous-text="'قبلی'"></uib-pagination>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-3 col-xs-12">
                    <div class="total-user-info">
                        <span>تعداد کل کاربران سیستم</span>
                        <h2><span class="number">{{this.$store.state.users.length}}</span> کاربر</h2>
                        <div class="add-new-user" @click="AddNewUser()">
                            درج کاربر جدید
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <UserInfo :show="UserModal.status" @closeuserinfomodal="CloseUserInfoModal"
        @saveorupdate="SaveOrUpdateUser" :items="UserModal.data"></UserInfo>

        <Notify :message="NotifyObj.message" :show="NotifyObj.status"></Notify>
    </div>
</template>

<script>
import UserSearch from '../components/user/search'
import UserInfo from '../components/user/userinfomodal'
import Notify from '../components/global/notify'

export default {
    name: 'userlist',
    data() {
        return {
            totalItems: this.$store.state.users.length,
            pagination: { currentPage: 1 },
            setPage: function(pageNo) {
                this.pagination.currentPage = pageNo;
            },
            pageChanged: function() {
                console.log('Page changed to: ' + this.pagination.currentPage);
            },
            maxSize: 5,
            searchtext: '',
            UserModal: {
                status: false,
                data: null
            },
            NotifyObj: {
                status: false,
                message: ''
            }
        }
    },
    components: {
        UserSearch,
        UserInfo,
        Notify
    },
    computed: {
        filteredList: function() {
            return this.$store.state.users.filter(item => {
                return item.firstname.toLowerCase().includes(this.searchtext.toLowerCase()) ||
                item.lastname.toLowerCase().includes(this.searchtext.toLowerCase()) ||
                item.username.toLowerCase().includes(this.searchtext.toLowerCase())
            })
        }
    },
    methods: {
        Search: function(obj) {
            this.searchtext = obj.searchtext;
        },
        RemoveUser: function(item) {
            
        },
        EditUser: function(item) {
            this.UserModal = {
                status: true,
                data : item
            }  
        },
        AddNewUser: function() {
            this.UserModal = {
                status: true,
                data : false
            }  
        },
        CloseUserInfoModal: function() {
            this.UserModal = {
                status: false,
                data : null
            }  
        },
        SaveOrUpdateUser: function(user) {
            let self = this;
            this.UserModal = {
                status: false,
                data : null
            }  
            if(this.UserModal.data == null){
                this.NotifyObj = {
                    status: true,
                    message: 'اطلاعات کاربر با موفقیت در سیستم ثبت شد.'
                }
            }else{
                this.NotifyObj = {
                    status: true,
                    message: 'اطلاعات کاربر با موفقیت به روزرسانی شد.'
                }
            }
            setTimeout(function() {
                self.NotifyObj.status = false;
            },2000);
        },
        HideNotify: function(){
            this.NotifyObj.state = false;
        }
    }
}
</script>

<style>
.user-content {
    padding: 25px;
    display: block;
    clear: both;
}

.user-table {
    overflow: hidden;
    border-radius: 6px;
    text-align: center;
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

.user-table .table {
    direction: rtl;
    margin-bottom: 0;
}

.user-table .table tr th {
    font-size: 12px;
    text-align: right;
    background: #eaeaea;
    font-weight: bold;
    position: relative;
}

.user-table .table tr:nth-of-type(odd) {
    background: #f5f3f3;
}

.user-table .table tr:nth-of-type(even) {
    background: #eaeaea;
}

.user-table .table tr td {
    font-size: 12px;
    font-weight: bold;
    text-align: right;
    position: relative;
}

.user-table .table tr td .edit-user{
    margin: 0 auto;
    height: 15px;
    width: 15px;
    background-position: center;
    background-size: 15px;
    background-repeat: no-repeat;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQzLjAwNiA0My4wMDYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQzLjAwNiA0My4wMDY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4Ij4KPHBhdGggZD0iTTI1Ljg4OCwwLjAzNGMxLjM5NywwLjI4NiwyLjczLDAuNjk4LDQsMS4yMjJjMS4zMTcsMC41NCwyLjU1NSwxLjIwNiwzLjczLDEuOTg0ICBjMC41MjQsMC4zNDksMC42NjcsMS4wNDgsMC4zMTcsMS41NTVjLTAuMDQ4LDAuMDYzLTAuMDc5LDAuMTI3LTAuMTQzLDAuMTc1Yy0wLjU0LDAuNTg3LTAuODA5LDEuMzMzLTAuODA5LDIuMDc5ICBjMC4wMTYsMC43NjIsMC4zMTcsMS41MDgsMC44ODksMi4wOTVjMC41NzEsMC41NzEsMS4zMzMsMC44NzMsMi4wNzksMC44NzNjMC43NjIsMC4wMTYsMS41MjQtMC4yNywyLjExMS0wLjgyNSAgYzAuNDQ0LTAuNDI5LDEuMTU5LTAuMzk3LDEuNTcxLDAuMDQ4YzAuMDQ4LDAuMDQ4LDAuMDk1LDAuMDk1LDAuMTI3LDAuMTQzbDAsMGMwLjc3OCwxLjE3NSwxLjQ0NCwyLjQyOSwyLDMuNzMgIGMwLjUyNCwxLjI4NiwwLjkzNiwyLjY1MSwxLjIyMiw0LjA0OGMwLjEyNywwLjYwMy0wLjI3LDEuMTktMC44NzMsMS4zMTdjLTAuMDYzLDAuMDE2LTAuMTI3LDAuMDE2LTAuMTksMC4wMTZsMCwwICBjLTAuODEsMC4wMzItMS41NCwwLjM2NS0yLjA3OSwwLjkyMWMtMC41MjQsMC41NC0wLjg0MSwxLjI3LTAuODQxLDIuMDk1YzAsMC44MSwwLjMxNywxLjU1NSwwLjg0MSwyLjA5NSAgYzAuNTQsMC41NCwxLjI3LDAuODg5LDIuMDc5LDAuOTA1YzAuNjE5LDAuMDE2LDEuMDk1LDAuNTI0LDEuMDc5LDEuMTQzYzAsMC4wNzksMCwwLjE1OS0wLjAxNiwwLjIzOCAgYy0wLjI4NiwxLjM5Ny0wLjY5OCwyLjczLTEuMjIyLDRjLTAuNTU2LDEuMzE3LTEuMjIyLDIuNTU1LTIsMy43M2MtMC4zMzMsMC41MjQtMS4wMzIsMC42NTEtMS41NCwwLjMxNyAgYy0wLjA2My0wLjA0OC0wLjEyNy0wLjA5NS0wLjE3NS0wLjE0M2MtMC41ODctMC41NC0xLjM0OS0wLjgxLTIuMDk1LTAuODFjLTAuNzQ2LDAuMDE2LTEuNTA4LDAuMzAyLTIuMDc5LDAuODg5ICBjLTAuNTcxLDAuNTcxLTAuODczLDEuMzMzLTAuODg5LDIuMDc5YzAsMC43NjIsMC4yNywxLjUyNCwwLjgyNSwyLjExMWMwLjQyOSwwLjQ0NCwwLjQxMywxLjE0My0wLjAzMiwxLjU3MSAgYy0wLjA0OCwwLjA0OC0wLjA5NSwwLjA5NS0wLjE1OSwwLjEyN2wwLDBjLTEuMTc1LDAuNzc4LTIuNDEzLDEuNDQ0LTMuNzMsMS45ODRjLTEuMjg2LDAuNTQtMi42MzUsMC45NTItNC4wNDcsMS4yMzggIGMtMC42MDMsMC4xMTEtMS4xOS0wLjI3LTEuMzAyLTAuODczYy0wLjAxNi0wLjA2My0wLjAzMi0wLjEyNy0wLjAzMi0wLjE5bDAsMGMtMC4wMTYtMC44MS0wLjM2NS0xLjU1Ni0wLjkwNS0yLjA3OSAgYy0wLjU0LTAuNTI0LTEuMjg2LTAuODQxLTIuMDk1LTAuODQxYy0wLjgyNSwwLTEuNTU1LDAuMzE3LTIuMDk1LDAuODQxYy0wLjU0LDAuNTI0LTAuODg5LDEuMjctMC45MDUsMi4wNzkgIGMtMC4wMTYsMC42MDMtMC41MjQsMS4wOTUtMS4xNDMsMS4wNzljLTAuMDc5LDAtMC4xNTktMC4wMTYtMC4yMzgtMC4wMzJjLTEuMzk3LTAuMjg2LTIuNzMtMC42ODMtNC0xLjIyMiAgYy0xLjMxNy0wLjU0LTIuNTcxLTEuMjA2LTMuNzMtMS45ODRjLTAuNTI0LTAuMzQ5LTAuNjY3LTEuMDMyLTAuMzE3LTEuNTU2YzAuMDMyLTAuMDYzLDAuMDc5LTAuMTExLDAuMTI3LTAuMTU5ICBjMC41NTYtMC41ODcsMC44MjUtMS4zNDksMC44MDktMi4wOTVjMC0wLjc0Ni0wLjMwMi0xLjUwOC0wLjg3My0yLjA3OWMtMC41ODctMC41ODctMS4zMzMtMC44NzMtMi4wNzktMC44ODkgIGMtMC43NjIsMC0xLjUyNCwwLjI3LTIuMTExLDAuODI1Yy0wLjQ0NCwwLjQyOS0xLjE1OSwwLjQxMy0xLjU4Ny0wLjAzMmMtMC4wNDgtMC4wNDgtMC4wNzktMC4xMTEtMC4xMTEtMC4xNTlsMCwwICBjLTAuNzc4LTEuMTc1LTEuNDYtMi40MTMtMi0zLjczYzAtMC4wMTYtMC4wMTYtMC4wMzItMC4wMTYtMC4wNjNjLTAuNTI0LTEuMjctMC45MzYtMi42MDMtMS4yMDYtMy45ODQgIGMtMC4xMjctMC42MDMsMC4yNy0xLjE5LDAuODczLTEuMzE3YzAuMDYzLDAsMC4xMjctMC4wMTYsMC4xOS0wLjAxNmwwLDBjMC44MDktMC4wMTYsMS41NC0wLjM2NSwyLjA2My0wLjkwNSAgYzAuNTQtMC41NCwwLjg1Ny0xLjI4NiwwLjg1Ny0yLjA5NWMwLTAuODI1LTAuMzE3LTEuNTU2LTAuODU3LTIuMDk1Yy0wLjUyNC0wLjU1Ni0xLjI1NC0wLjg4OS0yLjA2My0wLjkyMSAgYy0wLjYxOSwwLTEuMTExLTAuNTI0LTEuMDk1LTEuMTI3YzAtMC4wOTUsMC4wMTYtMC4xNTksMC4wMzItMC4yMzhjMC4yODYtMS4zOTcsMC42OTgtMi43MywxLjIyMi00LjAxNiAgYzAuNTQtMS4zMDIsMS4yMjItMi41NTUsMi0zLjczYzAuMzMzLTAuNTA4LDEuMDMyLTAuNjUxLDEuNTQtMC4zMTdjMC4wNjMsMC4wNDgsMC4xMjcsMC4wOTUsMC4xNzUsMC4xNDMgIGMwLjU4NywwLjU1NiwxLjMzMywwLjgyNSwyLjA5NSwwLjgxYzAuNzQ2LDAsMS40OTItMC4zMDIsMi4wNzktMC44NzNjMC41NzEtMC41ODcsMC44NzMtMS4zMzMsMC44NzMtMi4wOTUgIGMwLjAxNi0wLjc0Ni0wLjI1NC0xLjUwOC0wLjgyNS0yLjA5NUM4Ljc3OCw0LjUxLDguNzk0LDMuNzk2LDkuMjM4LDMuMzY3QzkuMjg2LDMuMzE5LDkuMzMzLDMuMjg4LDkuMzk3LDMuMjRsMCwwICBjMS4xNTktMC43NzgsMi40MTMtMS40NDQsMy43My0xLjk4NGMxLjI3LTAuNTI0LDIuNjM1LTAuOTUyLDQuMDQ3LTEuMjIyYzAuNjAzLTAuMTI3LDEuMTksMC4yNywxLjMwMiwwLjg3MyAgYzAuMDE2LDAuMDYzLDAuMDE2LDAuMTI3LDAuMDMyLDAuMTlsMCwwYzAuMDE2LDAuODA5LDAuMzY1LDEuNTQsMC45MDUsMi4wNjNjMC41NCwwLjUyNCwxLjI3LDAuODU3LDIuMDk1LDAuODU3ICBjMC44MDksMCwxLjU1NS0wLjMzMywyLjA5NS0wLjg1N2MwLjU0LTAuNTI0LDAuODg5LTEuMjU0LDAuOTA1LTIuMDYzYzAuMDE2LTAuNjE5LDAuNTI0LTEuMTExLDEuMTQzLTEuMDk1ICBDMjUuNzI5LDAuMDAyLDI1LjgwOSwwLjAxOCwyNS44ODgsMC4wMzRMMjUuODg4LDAuMDM0eiBNMjEuNTA3LDEwLjg0M2MyLjkzNiwwLDUuNjAzLDEuMTksNy41MzksMy4xMjcgIGMxLjkyMSwxLjkyMSwzLjExMSw0LjU4NywzLjExMSw3LjUzOWMwLDIuOTM2LTEuMTksNS42MDMtMy4xMTEsNy41MzljLTEuOTM2LDEuOTIxLTQuNjAzLDMuMTExLTcuNTM5LDMuMTExICBjLTIuOTUyLDAtNS42MDMtMS4xOS03LjUzOS0zLjExMWMtMS45MjEtMS45MzYtMy4xMjctNC42MDMtMy4xMjctNy41MzljMC0yLjk1MiwxLjIwNi01LjYxOSwzLjEyNy03LjUzOSAgQzE1LjkwNCwxMi4wMzMsMTguNTU1LDEwLjg0MywyMS41MDcsMTAuODQzTDIxLjUwNywxMC44NDN6IE0yNy40NTksMTUuNTU3Yy0xLjUyNC0xLjUyNC0zLjYzNS0yLjQ3Ni01Ljk1Mi0yLjQ3NiAgYy0yLjMzMywwLTQuNDI4LDAuOTUyLTUuOTUyLDIuNDc2Yy0xLjUyNCwxLjUyNC0yLjQ2LDMuNjE5LTIuNDYsNS45NTJjMCwyLjMxNywwLjkzNiw0LjQyOCwyLjQ2LDUuOTUyICBjMS41MjQsMS41MjQsMy42MTksMi40Niw1Ljk1MiwyLjQ2YzIuMzE3LDAsNC40MjgtMC45MzYsNS45NTItMi40NmMxLjUyNC0xLjUyNCwyLjQ2LTMuNjM1LDIuNDYtNS45NTIgIEMyOS45MTksMTkuMTc2LDI4Ljk4MywxNy4wODEsMjcuNDU5LDE1LjU1N0wyNy40NTksMTUuNTU3eiBNMjkuMDMxLDMuMzE5QzI4LjIyMSwyLjk4NiwyNy4zOCwyLjcsMjYuNTM5LDIuNDc4ICBjLTAuMjU0LDAuODczLTAuNzQ2LDEuNjY3LTEuMzgxLDIuMjg2Yy0wLjkzNiwwLjkyMS0yLjIzOCwxLjQ5Mi0zLjY1MSwxLjQ5MmMtMS40MjksMC0yLjcxNC0wLjU3MS0zLjY1MS0xLjQ5MiAgYy0wLjY1MS0wLjYxOS0xLjEyNy0xLjQxMy0xLjM4MS0yLjI4NmMtMC44NTcsMC4yMjItMS42ODIsMC41MDgtMi40OTIsMC44NDFjLTAuODI1LDAuMzQ5LTEuNjE5LDAuNzMtMi4zODEsMS4xNzUgIGMwLjQ0NCwwLjgxLDAuNjY3LDEuNjk4LDAuNjUxLDIuNTg3Yy0wLjAxNiwxLjMxNy0wLjUyNCwyLjYzNS0xLjUyNCwzLjYzNWMtMS4wMTYsMS4wMTYtMi4zMTcsMS41MjQtMy42NTEsMS41NCAgYy0wLjg4OSwwLjAxNi0xLjc3OC0wLjIwNi0yLjU4Ny0wLjY1MWMtMC40NDQsMC43NjItMC44MjUsMS41NTUtMS4xNzUsMi4zODFjLTAuMzMzLDAuODEtMC42MTksMS42MzUtMC44NDEsMi40OTIgIGMwLjg4OSwwLjI1NCwxLjY2NywwLjczLDIuMjg2LDEuMzY1YzAuOTIxLDAuOTUyLDEuNDkyLDIuMjM4LDEuNDkyLDMuNjY3YzAsMS40MTMtMC41NzEsMi42OTgtMS40OTIsMy42NTEgIGMtMC42MTksMC42MzUtMS4zOTcsMS4xMTEtMi4yODYsMS4zODFjMC4yMjIsMC44MjUsMC40OTIsMS42NTEsMC44MjUsMi40MjljMCwwLjAzMiwwLjAxNiwwLjA0OCwwLjAxNiwwLjA2MyAgYzAuMzQ5LDAuODI1LDAuNzMsMS42MDMsMS4xNzUsMi4zNjVjMC44MDktMC40NDQsMS42OTgtMC42NTEsMi41ODctMC42MzVjMS4zMzMsMC4wMTYsMi42MzUsMC41MjQsMy42NTEsMS41MjQgIGMxLDEsMS41MDgsMi4zMTcsMS41MjQsMy42MzVjMC4wMTYsMC44ODktMC4yMDYsMS43OTQtMC42NTEsMi41ODdjMC43NjIsMC40NDQsMS41NTUsMC44NDEsMi4zODEsMS4xNzUgIGMwLjgwOSwwLjMzMywxLjYzNSwwLjYxOSwyLjQ5MiwwLjg1N2MwLjI1NC0wLjg4OSwwLjczLTEuNjgyLDEuMzgxLTIuMzAyYzAuOTM2LTAuOTIxLDIuMjIyLTEuNDkyLDMuNjUxLTEuNDkyICBjMS40MTMsMCwyLjcxNCwwLjU3MSwzLjY1MSwxLjQ5MmMwLjYzNSwwLjYxOSwxLjEyNywxLjQxMywxLjM4MSwyLjMwMmMwLjg0MS0wLjIzOCwxLjY4Mi0wLjUyNCwyLjQ5Mi0wLjg1NyAgYzAuODI1LTAuMzMzLDEuNjE5LTAuNzMsMi4zNjUtMS4xNzVjLTAuNDI5LTAuNzk0LTAuNjUxLTEuNjk4LTAuNjM1LTIuNTg3YzAuMDE2LTEuMzE3LDAuNTI0LTIuNjM1LDEuNTI0LTMuNjM1ICBjMS0xLDIuMzE3LTEuNTA4LDMuNjM1LTEuNTI0YzAuOTA1LTAuMDE2LDEuNzk0LDAuMTksMi41ODcsMC42MzVjMC40NDQtMC43NjIsMC44NDEtMS41NCwxLjE5LTIuMzY1ICBjMC4zMzMtMC44MSwwLjYxOS0xLjY1MSwwLjg0MS0yLjQ5MmMtMC44ODktMC4yNTQtMS42NjctMC43NDYtMi4zMDEtMS4zODFjLTAuOTIxLTAuOTUyLTEuNDc2LTIuMjM4LTEuNDc2LTMuNjUxICBjMC0xLjQyOSwwLjU1Ni0yLjcxNCwxLjQ3Ni0zLjY2N2MwLjYzNS0wLjYzNSwxLjQxMy0xLjExMSwyLjMwMS0xLjM2NWMtMC4yMjItMC44NTctMC41MDgtMS42ODItMC44NDEtMi41MDggIGMtMC4zNDktMC44MS0wLjc0Ni0xLjYwMy0xLjE5LTIuMzY1Yy0wLjc5NCwwLjQ0NC0xLjY4MiwwLjY2Ny0yLjU4NywwLjY1MWMtMS4zMTctMC4wMTYtMi42MzUtMC41MjQtMy42MzUtMS41NCAgYy0xLTEtMS41MDgtMi4zMTctMS41MjQtMy42MzVjLTAuMDE2LTAuODg5LDAuMjA2LTEuNzc4LDAuNjM1LTIuNTg3QzMwLjY1LDQuMDUsMjkuODU2LDMuNjUzLDI5LjAzMSwzLjMxOUwyOS4wMzEsMy4zMTl6IiBmaWxsPSIjMjIyMjIyIi8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=);
    cursor: pointer;
}

.user-table .table tr td .remove-user{
    margin: 0 auto;
    height: 15px;
    width: 15px;
    background-position: center;
    background-size: 12px;
    background-repeat: no-repeat;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDIyLjg4IDIyLjg4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMi44OCAyMi44ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIxMjhweCIgaGVpZ2h0PSIxMjhweCI+CjxwYXRoIGQ9Ik0wLjMyNCwxLjkwOWMtMC40MjktMC40MjktMC40MjktMS4xNDMsMC0xLjU4N2MwLjQ0NC0wLjQyOSwxLjE0My0wLjQyOSwxLjU4NywwbDkuNTIzLDkuNTM5ICBsOS41MzktOS41MzljMC40MjktMC40MjksMS4xNDMtMC40MjksMS41NzEsMGMwLjQ0NCwwLjQ0NCwwLjQ0NCwxLjE1OSwwLDEuNTg3bC05LjUyMyw5LjUyNGw5LjUyMyw5LjUzOSAgYzAuNDQ0LDAuNDI5LDAuNDQ0LDEuMTQzLDAsMS41ODdjLTAuNDI5LDAuNDI5LTEuMTQzLDAuNDI5LTEuNTcxLDBsLTkuNTM5LTkuNTM5bC05LjUyMyw5LjUzOWMtMC40NDQsMC40MjktMS4xNDMsMC40MjktMS41ODcsMCAgYy0wLjQyOS0wLjQ0NC0wLjQyOS0xLjE1OSwwLTEuNTg3bDkuNTIzLTkuNTM5TDAuMzI0LDEuOTA5eiIgZmlsbD0iIzIyMjIyMiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);
    cursor: pointer;
}

.user-table .pagination>li>a,
.user-table .pagination>li>span {
    border: 0;
    background-color: #eaeaea;
    margin: 0 5px;
    border-radius: 6px!important;
    color: #222;
}

.user-table .pagination>.disabled>span,
.user-table .pagination>.disabled>span:hover,
.user-table .pagination>.disabled>span:focus,
.user-table .pagination>.disabled>a,
.user-table .pagination>.disabled>a:hover,
.user-table .pagination>.disabled>a:focus {
    background-color: #999;
    color: #666;
}

.user-table .pagination>.active>a,
.user-table .pagination>.active>span,
.user-table .pagination>.active>a:hover,
.user-table .pagination>.active>span:hover,
.user-table .pagination>.active>a:focus,
.user-table .pagination>.active>span:focus {
    background-color: #ffc72f;
    color: #222;
}

.total-user-info{
    background-color: #eaeaea;
    border-radius: 10px;
    position: relative;
    min-height: 200px;
    overflow: hidden;
}

.total-user-info span{
    text-align: right;
    display: block;
    color: #999;
    padding: 15px;
}

.total-user-info h2{
    position: absolute;
    top: calc(50% - 20px);
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    color: #222;
    font-size: 1.5em;
    direction: rtl;
    color: #ffc72f;
}

.total-user-info .number{
    font-size: 2em;
    font-family: "Number";
    display: inline;
    color: #ffc72f;
    padding: 0;
}

.total-user-info .add-new-user{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #d8d5d5;
    padding: 10px;
    text-align: center;
    color: #444;
    border-radius: 0 0 6px 6px;
    cursor: pointer;
}

.total-user-info .add-new-user:hover{
    background-color: #d8d5d5;
}

.total-user-info .add-new-user:after{
    content: '';
    position: absolute;
    right: 25%;
    top: 50%;
    height: 15px;
    width: 15px;
    transform: translate(0,-50%);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 15px;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMxLjQ0NCAzMS40NDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMxLjQ0NCAzMS40NDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4Ij4KPHBhdGggZD0iTTEuMTE5LDE2Ljg0MWMtMC42MTksMC0xLjExMS0wLjUwOC0xLjExMS0xLjEyN2MwLTAuNjE5LDAuNDkyLTEuMTExLDEuMTExLTEuMTExaDEzLjQ3NVYxLjEyNyAgQzE0LjU5NSwwLjUwOCwxNS4xMDMsMCwxNS43MjIsMGMwLjYxOSwwLDEuMTExLDAuNTA4LDEuMTExLDEuMTI3djEzLjQ3NmgxMy40NzVjMC42MTksMCwxLjEyNywwLjQ5MiwxLjEyNywxLjExMSAgYzAsMC42MTktMC41MDgsMS4xMjctMS4xMjcsMS4xMjdIMTYuODMzdjEzLjQ3NmMwLDAuNjE5LTAuNDkyLDEuMTI3LTEuMTExLDEuMTI3Yy0wLjYxOSwwLTEuMTI3LTAuNTA4LTEuMTI3LTEuMTI3VjE2Ljg0MUgxLjExOXoiIGZpbGw9IiMwMDAwMDAiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==);
}
</style>
