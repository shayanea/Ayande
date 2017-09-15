<template>
    <ul class="menu">
        <li>
            <router-link :to="{ name: 'network'}">پیمایش اطلاعات</router-link>
        </li>
        <li>
            <router-link :to="{ name: 'dashboardlist'}">لیست دشبورد ها</router-link>
        </li>
        <li>
            <router-link :to="{ name: 'modellist'}">لیست مدل ها</router-link>
        </li>
        <li>
            <router-link :to="{ name: 'viewlist'}">لیست نما ها</router-link>
        </li>
        <li>
            <a>مدیریت کاربران</a>
        </li>
    </ul>
</template>

<script>
export default {
    name:'Menu',
    data () {
        return {

        }
    }
}
</script>

<style>
.menu{
    list-style: none;
    position: relative;
    float: right;
    margin: 0 auto;
    padding-right: 40px;
}

.menu li{
    float: right;
    margin-left: 20px;
    padding: 5px 20px;
    position: relative;
}

.menu li a{
    color: #5b5b5b;
    text-align: center;
    font-size: 12px;
    text-decoration: none;
    cursor: pointer;
}

.menu li a:hover{
    color: #222;
}

.menu li span.dropdown_icon{
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0,-50%);
    height: 7px;
    width: 7px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 7px;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDI5Mi4zNjIgMjkyLjM2MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjkyLjM2MiAyOTIuMzYyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTI4Ni45MzUsNjkuMzc3Yy0zLjYxNC0zLjYxNy03Ljg5OC01LjQyNC0xMi44NDgtNS40MjRIMTguMjc0Yy00Ljk1MiwwLTkuMjMzLDEuODA3LTEyLjg1LDUuNDI0ICAgQzEuODA3LDcyLjk5OCwwLDc3LjI3OSwwLDgyLjIyOGMwLDQuOTQ4LDEuODA3LDkuMjI5LDUuNDI0LDEyLjg0N2wxMjcuOTA3LDEyNy45MDdjMy42MjEsMy42MTcsNy45MDIsNS40MjgsMTIuODUsNS40MjggICBzOS4yMzMtMS44MTEsMTIuODQ3LTUuNDI4TDI4Ni45MzUsOTUuMDc0YzMuNjEzLTMuNjE3LDUuNDI3LTcuODk4LDUuNDI3LTEyLjg0N0MyOTIuMzYyLDc3LjI3OSwyOTAuNTQ4LDcyLjk5OCwyODYuOTM1LDY5LjM3N3oiIGZpbGw9IiM1YjViNWIiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K)
}

@media(min-wdith:1444px){
    .menu li a{
        font-size: 14px;
    }
}

@media(max-width:768px){
    .menu{
        display: none;
    }
}
</style>
