<template>
    <div class="profile">
        <click-outside :handler="Hide">
            <div class="profile_options" @click="ShowDropDown">
                <div class="name">
                    {{profile.name}}
                    <span class="dropdown_icon"></span>
                </div>
                <!-- :style="{ 'background-image': 'url(' + profile.image + ')' }"  -->
                <div class="profile_image" ></div>
                <ul class="profile_dropdown" :class="{'active' : dropdown}">
                    <li>
                        <a>پروفایـل</a>
                        <span class="user_icon"></span>
                    </li>
                    <li>
                        <a>تنظیمات</a>
                        <span class="setting_icon"></span>
                    </li>
                    <li>
                        <a @click="Logout">خروج</a>
                        <span class="logout_icon"></span>
                    </li>
                </ul>
            </div>
        </click-outside>
    </div>
</template>

<script>
// import JDate from 'jdate';
import { mapGetters } from 'vuex'
import ClickOutside from 'onclick-outside'

export default {
    name:'',
    data () {
        return {
            profile:{
                name:'محمد کاضمی',
                image:''
            },
            dropdown:false
        }
    },
    components: {
        ClickOutside
    },
    methods: {
        ShowDropDown: function() {
            this.dropdown = !this.dropdown;
        },
        Hide: function() {
            this.dropdown = false;
        },
        Logout: function() {
            this.$router.push({ path: '/login' });
        }
    },
    created() {
    }
}
</script>

<style>
.profile{
    float: left;
}

.profile .profile_options{
    position: relative;
    cursor: pointer;
}

.profile .name{
    color: #5b5b5b;
    font-size: 12px;
    display: inline-block;
    margin-left: 15px;
    padding: 0 10px;
    position: relative;
}

.profile .profile_image{
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background: #ebebeb;
    display: inline-block;
    vertical-align: middle;
    background-image: url('../../assets/image/profile.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.profile .name span.dropdown_icon{
    position: absolute;
    top: 50%;
    left: -5px;
    transform: translate(0,-50%);
    height: 7px;
    width: 7px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 7px;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDI5Mi4zNjIgMjkyLjM2MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjkyLjM2MiAyOTIuMzYyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTI4Ni45MzUsNjkuMzc3Yy0zLjYxNC0zLjYxNy03Ljg5OC01LjQyNC0xMi44NDgtNS40MjRIMTguMjc0Yy00Ljk1MiwwLTkuMjMzLDEuODA3LTEyLjg1LDUuNDI0ICAgQzEuODA3LDcyLjk5OCwwLDc3LjI3OSwwLDgyLjIyOGMwLDQuOTQ4LDEuODA3LDkuMjI5LDUuNDI0LDEyLjg0N2wxMjcuOTA3LDEyNy45MDdjMy42MjEsMy42MTcsNy45MDIsNS40MjgsMTIuODUsNS40MjggICBzOS4yMzMtMS44MTEsMTIuODQ3LTUuNDI4TDI4Ni45MzUsOTUuMDc0YzMuNjEzLTMuNjE3LDUuNDI3LTcuODk4LDUuNDI3LTEyLjg0N0MyOTIuMzYyLDc3LjI3OSwyOTAuNTQ4LDcyLjk5OCwyODYuOTM1LDY5LjM3N3oiIGZpbGw9IiM1YjViNWIiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K)
}

.profile .profile_dropdown{
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    padding: 0px 7px;
    background: #fff;
    list-style: none;
    z-index: 9;
    border-radius: 0 0 4px 4px;
    box-shadow: 0px 10px 10px 0px rgba(154, 154, 154, 0.3);
    max-height: 0;
    overflow: hidden;
    transition: max-height .3s ease;
}

.profile .profile_dropdown.active{
    max-height: 150px;
    transition: max-height .3s ease;
}

.profile .profile_dropdown li{
    border-bottom: 1px solid #ebebeb;
    padding: 10px 0;
    position: relative;
    transition: background .3s ease-in;
}

.profile .profile_dropdown li:first-child{
    margin-top: 10px;
}

.profile .profile_dropdown li:last-child{
    border:0;
    margin-bottom: 10px;
}

.profile .profile_dropdown li a{
    font-size: 11px;
    text-align: center;
    display: block;
    color: #757575;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
}

.profile .profile_dropdown li:hover{
    background: #eee;
    transition: background .3s ease-out;
}

.profile .profile_dropdown .user_icon{
    position: absolute;
    top: 12px;
    right: 20%;
    height: 10px;
    width: 10px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 10px;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDQwOS4xNjUgNDA5LjE2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDA5LjE2NSA0MDkuMTY0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTIwNC41ODMsMjE2LjY3MWM1MC42NjQsMCw5MS43NC00OC4wNzUsOTEuNzQtMTA3LjM3OGMwLTgyLjIzNy00MS4wNzQtMTA3LjM3Ny05MS43NC0xMDcuMzc3ICAgIGMtNTAuNjY4LDAtOTEuNzQsMjUuMTQtOTEuNzQsMTA3LjM3N0MxMTIuODQ0LDE2OC41OTYsMTUzLjkxNiwyMTYuNjcxLDIwNC41ODMsMjE2LjY3MXoiIGZpbGw9IiM3NTc1NzUiLz4KCQk8cGF0aCBkPSJNNDA3LjE2NCwzNzQuNzE3TDM2MC44OCwyNzAuNDU0Yy0yLjExNy00Ljc3MS01LjgzNi04LjcyOC0xMC40NjUtMTEuMTM4bC03MS44My0zNy4zOTIgICAgYy0xLjU4NC0wLjgyMy0zLjUwMi0wLjY2My00LjkyNiwwLjQxNWMtMjAuMzE2LDE1LjM2Ni00NC4yMDMsMjMuNDg4LTY5LjA3NiwyMy40ODhjLTI0Ljg3NywwLTQ4Ljc2Mi04LjEyMi02OS4wNzgtMjMuNDg4ICAgIGMtMS40MjgtMS4wNzgtMy4zNDYtMS4yMzgtNC45My0wLjQxNUw1OC43NSwyNTkuMzE2Yy00LjYzMSwyLjQxLTguMzQ2LDYuMzY1LTEwLjQ2NSwxMS4xMzhMMi4wMDEsMzc0LjcxNyAgICBjLTMuMTkxLDcuMTg4LTIuNTM3LDE1LjQxMiwxLjc1LDIyLjAwNWM0LjI4NSw2LjU5MiwxMS41MzcsMTAuNTI2LDE5LjQsMTAuNTI2aDM2Mi44NjFjNy44NjMsMCwxNS4xMTctMy45MzYsMTkuNDAyLTEwLjUyNyAgICBDNDA5LjY5OSwzOTAuMTI5LDQxMC4zNTUsMzgxLjkwMiw0MDcuMTY0LDM3NC43MTd6IiBmaWxsPSIjNzU3NTc1Ii8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==)
}

.profile .profile_dropdown .setting_icon{
    position: absolute;
    top: 12px;
    right: 20%;
    height: 10px;
    width: 10px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 10px;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2IDU2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1NiA1NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiPgo8Zz4KCTxwYXRoIGQ9Ik00MS4wOCw0OEgyYy0wLjU1MywwLTEsMC40NDgtMSwxczAuNDQ3LDEsMSwxaDM5LjA4YzAuNDg4LDMuMzg3LDMuNDAxLDYsNi45Miw2YzMuODU5LDAsNy0zLjE0LDctN3MtMy4xNDEtNy03LTcgICBDNDQuNDgxLDQyLDQxLjU2OCw0NC42MTMsNDEuMDgsNDh6IiBmaWxsPSIjNzU3NTc1Ii8+Cgk8cGF0aCBkPSJNMjAuNjk1LDI3SDJjLTAuNTUzLDAtMSwwLjQ0OC0xLDFzMC40NDcsMSwxLDFoMTguNjMyYzAuMzk2LDMuNjAyLDMuNDU2LDYuNDE0LDcuMTYxLDYuNDE0czYuNzY1LTIuODEyLDcuMTYxLTYuNDE0SDU0ICAgYzAuNTUzLDAsMS0wLjQ0OCwxLTFzLTAuNDQ3LTEtMS0xSDM0Ljg5MWMtMC41NzctMy40LTMuNTM2LTYtNy4wOTgtNlMyMS4yNzIsMjMuNiwyMC42OTUsMjd6IiBmaWxsPSIjNzU3NTc1Ii8+Cgk8cGF0aCBkPSJNOCwwQzQuMTQxLDAsMSwzLjE0LDEsN3MzLjE0MSw3LDcsN2MzLjUxOSwwLDYuNDMyLTIuNjEzLDYuOTItNkg1NGMwLjU1MywwLDEtMC40NDgsMS0xcy0wLjQ0Ny0xLTEtMUgxNC45MiAgIEMxNC40MzIsMi42MTMsMTEuNTE5LDAsOCwweiIgZmlsbD0iIzc1NzU3NSIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=)
}

.profile .profile_dropdown .logout_icon{
    position: absolute;
    top: 12px;
    right: 20%;
    height: 10px;
    width: 10px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 10px;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQ0IDQ0IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA0NCA0NCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCI+CiAgPHBhdGggZD0ibTIyLDBjLTEyLjIsMC0yMiw5LjgtMjIsMjJzOS44LDIyIDIyLDIyIDIyLTkuOCAyMi0yMi05LjgtMjItMjItMjJ6bTMuMiwyMi40bDcuNSw3LjVjMC4yLDAuMiAwLjMsMC41IDAuMywwLjdzLTAuMSwwLjUtMC4zLDAuN2wtMS40LDEuNGMtMC4yLDAuMi0wLjUsMC4zLTAuNywwLjMtMC4zLDAtMC41LTAuMS0wLjctMC4zbC03LjUtNy41Yy0wLjItMC4yLTAuNS0wLjItMC43LDBsLTcuNSw3LjVjLTAuMiwwLjItMC41LDAuMy0wLjcsMC4zLTAuMywwLTAuNS0wLjEtMC43LTAuM2wtMS40LTEuNGMtMC4yLTAuMi0wLjMtMC41LTAuMy0wLjdzMC4xLTAuNSAwLjMtMC43bDcuNS03LjVjMC4yLTAuMiAwLjItMC41IDAtMC43bC03LjUtNy41Yy0wLjItMC4yLTAuMy0wLjUtMC4zLTAuN3MwLjEtMC41IDAuMy0wLjdsMS40LTEuNGMwLjItMC4yIDAuNS0wLjMgMC43LTAuM3MwLjUsMC4xIDAuNywwLjNsNy41LDcuNWMwLjIsMC4yIDAuNSwwLjIgMC43LDBsNy41LTcuNWMwLjItMC4yIDAuNS0wLjMgMC43LTAuMyAwLjMsMCAwLjUsMC4xIDAuNywwLjNsMS40LDEuNGMwLjIsMC4yIDAuMywwLjUgMC4zLDAuN3MtMC4xLDAuNS0wLjMsMC43bC03LjUsNy41Yy0wLjIsMC4xLTAuMiwwLjUgMy41NTI3MWUtMTUsMC43eiIgZmlsbD0iIzc1NzU3NSIvPgo8L3N2Zz4K)
}

@media (min-wdith:1444px){
    .profile .profile_options .name{
        font-size: 14px;
    }
}
</style>
