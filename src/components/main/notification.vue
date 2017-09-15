<template>
    <div class="pin-notifications">
        <ul>
            <li class="active">{{this.$store.state.profile.name}} عزیز، به پنل شخصی خود در نبض آینده خوش آمدید.</li>
            <li>شما <span class="number">{{this.$store.state.pin.length}}</span> پیام یا اعلان جدید دارید.</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'noitfication',
    data () {
        return {

        }
    }
}
</script>

<style>
.pin-notifications{
    border-radius: 6px;
    background: #ddd;
    list-style: none;
    margin: 25px;
    float: right;
    width: calc(100% - 50px);
}

.pin-notifications ul{
    list-style: none;
    float: right;
    margin: 0;
    padding: 0;
}

.pin-notifications li{
    padding: 15px;
    float: right;
    direction: rtl;
    position: relative;
}

.pin-notifications li:first-child{
    margin-left: 25px;
}

.pin-notifications li:first-child:after{
    content: '';
    position: absolute;
    left: -25px;
    top: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 25px 25px 25px 0;
    border-color: transparent #cccccc transparent transparent;
}

.pin-notifications li.active{
    background: #ccc
}

.pin-notifications li span.number{
    display: inline-block;
    height: 20px;
    width: 20px;
    border-radius: 100%;
    text-align: center;
    line-height: 20px;
    color: #fff;
    font-size: 10px;
    background: #f63756;
    font-family: 'Number'!important;
}
</style>

