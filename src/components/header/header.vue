<template>
    <div class="main-header" v-if="Show">
        <div class="topbar">
            <Logo></Logo>
            <Navbar></Navbar>
            <Notifications></Notifications>
            <Profile></Profile>
        </div>
        <Sidebar></Sidebar>
        <Toolbar></Toolbar>
    </div>
</template>

<script>
import Logo from './logo'
import Navbar from './navbar'
import Profile from './profile'
import Notifications from './notification'
import Sidebar from './siderbar.vue'
import Toolbar from '../toolbar/toolbar'

export default {
    name:'header',
    data () {
        return {
            Show: true
        }
    },
    components: {
        Logo,
        Navbar,
        Profile,
        Notifications,
        Sidebar,
        Toolbar
    },
    watch: {
        '$route' : function (current){
            return this.Show = (current.name == 'login' || current.name == 'forgetpass') ? false : true;
        }
    },
    created(){
        this.Show = (this.$route.name == 'login' || this.$route.name == 'forgetpass') ? false : true;
    }
}
</script>

<style>

</style>
