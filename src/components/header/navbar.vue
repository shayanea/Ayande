<template>
    <div>
        <ul class="menu">
            <li>
                <router-link class="dropdown" :to="{ path: ''}">
                    مدیریت دسته ها و گروه ها
                    <span class="dropdown-icon"></span>
                    <ul class="dropdown-menu">
                        <li>
                            <router-link :to="{ path: 'networkgraph'}">پیمایش موجودیت ها</router-link>
                        </li>
                        <li>
                            <router-link :to="{ path: 'addcategory'}">درج گره و دسته بندی جدید</router-link>
                        </li>
                    </ul>
                </router-link>
            </li>
            <li>
                <router-link class="dropdown" :to="{ path: ''}">
                    مدیریت دشبورد ها
                    <span class="dropdown-icon"></span>
                    <ul class="dropdown-menu">
                        <li>
                            <router-link :to="{ path: 'dashboardlist'}">فهرست دشبورد ها</router-link>
                        </li>
                        <li>
                            <router-link :to="{ path: 'addnewdashboard'}">درج دشبورد جدید</router-link>
                        </li>
                    </ul>
                </router-link>
            </li>
            <li>
                <router-link class="dropdown" :to="{ path: ''}">
                    مدیریت مدل ها
                    <span class="dropdown-icon"></span>
                    <ul class="dropdown-menu">
                        <li>
                            <router-link :to="{ path: 'modellist'}">لیست مدل ها</router-link>
                        </li>
                        <li>
                            <a @click="AddNewModel">درج مدل جدید</a>
                        </li>
                    </ul>
                </router-link>
            </li>
            <li>
                <router-link class="dropdown" :to="{ path: ''}">
                    مدیریت نما ها
                    <span class="dropdown-icon"></span>
                    <ul class="dropdown-menu">
                        <li>
                            <router-link :to="{ path: 'viewlist'}">لیست نماها</router-link>
                        </li>
                        <li>
                            <a @click="AddNewView">درج نما جدید</a>
                        </li>
                    </ul>
                </router-link>
            </li>
            <li>
                <router-link class="dropdown" :to="{ path: ''}">
                    مدیریت کاربران و نقش ها
                    <span class="dropdown-icon"></span>
                    <ul class="dropdown-menu">
                        <li>
                            <router-link :to="{ path: 'userlist'}">لیست کاربران</router-link>
                        </li>
                        <li>
                            <router-link :to="{ path: 'rolelist'}">لیست نقش ها</router-link>
                        </li>
                        <li>
                            <a @click="AddNewUser">درج کاربر جدید</a>
                        </li>
                        <li>
                            <router-link :to="{ path: 'addrole'}">درج نقش جدید</router-link>
                        </li>
                    </ul>
                </router-link>
            </li>
        </ul>

        <UserInfo :show="UserModal.status" @closeuserinfomodal="CloseUserInfoModal" @saveorupdate="SaveOrUpdateUser" :items="UserModal.data"></UserInfo>
    </div>
</template>

<script>
import UserInfo from '../user/userinfomodal'

export default {
    name: 'navbar',
    data() {
        return {
            UserModal: {
                status: false,
                data: null
            }
        }
    },
    components: {
        UserInfo
    },
    methods: {
        AddNewUser: function() {
            this.UserModal = {
                status: true,
                data : null
            }  
        },
        CloseUserInfoModal: function() {
            this.UserModal = {
                status: false,
                data : null
            }  
        },
        SaveOrUpdateUser: function(user) {
            this.UserModal = {
                status: false,
                data : null
            }  
        },
        AddNewModel: function() {
            if(!this.$store.state.showbgwrapper){
                this.$store.commit('ShowBgWrapper');
            }
            this.$store.commit('ShowCreateModel');
        },
        AddNewView: function() {
            if(!this.$store.state.showbgwrapper){
                this.$store.commit('ShowBgWrapper');
            }
            this.$store.commit('ShowCreateView');
        }
    }
}
</script>

<style>
.dropdown-menu {
    position: absolute;
    right: 0;
    list-style: none;
    padding: 0;
    padding-top: 25px;
    opacity: 0;
    visibility: hidden;
    transition: all .3s ease-in;
}

.menu li:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transition: all .3s ease-in;
}

.dropdown-menu li {
    padding: 0;
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    border-right: 1px solid #eee;
    border-left: 1px solid #eee;
}

.dropdown-menu li:first-child {
    border-top: 1px solid #eee;
}

.dropdown-menu li a {
    padding: 10px 15px;
    display: block;
    text-align: right;
}
</style>
