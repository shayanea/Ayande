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
    position: absolute;
    top: 0;
    right: 24px;
    left: 0;
    padding: 15px 25px;
    background: #fff;
    direction: rtl;
    height: 65px;
    box-shadow: 0 5px 20px 10px rgba(154, 154, 154, 0.1);
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
