<template>
    <div class="topbar">
        <Logo></Logo>
        <TMenu></TMenu>
        <Notification></Notification>
        <Profile></Profile>
    </div>
</template>

<script>
import Logo from './logo'
import TMenu from './menu'
import Profile from './profile'
import Notification from './notification'

export default {
    name:'topbar',
    data () {
        return{
            
        }
    },
    components: {
        Logo,
        TMenu,
        Profile,
        Notification
    }
}
</script>

<style>
.topbar{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    padding: 15px 25px;
    background: #fff;
    direction: rtl;
    height: 65px;
    box-shadow: 0 5px 20px 5px rgba(0, 0, 0, 0.20);
    z-index: 1000;
}

.topbar .logo{
    float: right;
}

.topbar .logo:after{
    content: '';
    position: absolute;
    left: -30px;
    top: 7px;
    bottom: 7px;
    width: 2px;
    background: #eaab1f;
}
</style>
