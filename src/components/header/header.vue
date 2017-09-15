<template>
    <div>
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

        }
    },
    components: {
        Logo,
        Navbar,
        Profile,
        Notifications,
        Sidebar,
        Toolbar
    }
}
</script>

<style>

</style>
