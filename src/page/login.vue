<template>
    <div class="login">
        <div class="login_holder row">
            <div class="logo_holder">
                <img src="../assets/logo.png" class="logo hidden-xs" />
                <img src="../assets/logo_white.png" class="logo hidden-sm hidden-md hidden-lg" />
            </div>
            <div class="col-md-6 col-sm-6 col-xs-12 login_column">
                <div class="horizantal_center">
                    <h2 class="form_title">سامانه مدیریت بانک آینـده</h2>
                    <form class="col-md-7 col-sm-7 col-xs-12" @submit.prevent="Login">
                        <input name="bnkuser" type="text" v-model="user.username" maxlength="70" class="form-control" placeholder="نام کاربـری" />
                        <div class="password_holder">
                            <input name="bnkpsw" v-model="user.password" type="password" maxlength="150" class="form-control" placeholder="رمز عبور" @keyup="PasswordLength" v-if="!HaveClass" />
                            <input name="bnkpsw" v-model="user.password" type="text" maxlength="150" class="form-control" placeholder="رمز عبور" @keyup="PasswordLength" v-if="HaveClass" />
                            <span v-show="show" @click="ShowPass" :class="{'eye': HaveClass}"></span>
                        </div>
                        <button type="submit" @click="Login" class="btn btn-block login_btn">ورود به سیستم</button>
                    </form>
                    <a href="" class="forget_pass_btn">رمز عبـور خود را فراموش کردین؟</a>
                </div>
            </div>
            <div class="col-md-6 hidden-sm hidden-xs bg_color">
                <div class="banner">
                    <div class="slogan">
                        برترین بانک
                    </div>
                    <div class="slogan">
                        تحول ساز خاورمیانه
                    </div>
                    <p>به انتخاب موسسه یورومانی</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "login",
    data() {
        return {
            user: {
                username: '',
                password: '',
                type: 'password'
            },
            show: false,
            HaveClass: false
        }
    },
    methods: {
        PasswordLength: function (e) {
            if (this.user.password.length > 0) {
                this.show = true;
            } else {
                this.show = false
            }
        },
        ShowPass: function () {
            this.HaveClass = !this.HaveClass;
        },
        Login: function () {
            this.$router.push({ path: '/main' });
        }
    }
}
</script>

<style scoped>
.login {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: #f6f7fb;
}

.login_holder {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 860px;
    height: 550px;
    transform: translate(-50%, -50%);
    background: #eeeeee;
    border-radius: 10px;
    z-index: 9;
}

.login_holder:after {
    content: "";
    position: absolute;
    z-index: -1;
    box-shadow: 0 15px 100px rgba(0, 0, 0, 0.3);
    bottom: 0px;
    left: 10%;
    right: 10%;
    width: 80%;
    height: 50%;
    -moz-border-radius: 100%;
    border-radius: 100%;
}

@media(min-width: 1441px) {
    .login_holder {
        width: 960px;
        height: 600px;
    }
}

.login_holder .logo {
    position: absolute;
    top: -55px;
    right: 0;
    width: 240px;
}

.login_holder .login_column {
    text-align: center;
    height: 100%;
    background: #efeff0;
    border-radius: 0 10px 10px 0;
}

.login_holder .horizantal_center {
    position: absolute;
    left: 0;
    right: 0;
    top: 43%;
    transform: translate(0, -50%);
}

.login_holder .bg_color {
    background-color: #eeb42f;
    height: 100%;
    border-radius: 10px 0 0 10px;
    background-image: url('../assets/Back.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.login_holder .bg_color .banner {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
}

.login_holder .bg_color .banner .slogan {
    font-size: 2.9em;
    font-family: 'Lalezar';
    display: block;
    text-align: right;
    padding: 0px 50px;
    color: #522d1d;
}

.login_holder .bg_color .banner p {
    margin-bottom: 30px;
    color: #fff;
    font-size: 1.2em;
    text-align: right;
    padding: 5px 50px;
    margin-top: 0;
}

.login_holder .form_title {
    font-size: 1.1em;
    color: #3f3f3f;
    text-align: center;
    margin: 60px auto;
    font-family: 'IRANSANS BOLD';
}

.login_holder form {
    float: none;
    margin: 0 auto;
}

.login_holder .form-control {
    outline: none;
    box-shadow: none;
    border: 0;
    border-bottom: 1px solid #c5c5c5;
    background: transparent;
    color: #222;
    text-align: right;
    border-radius: 0;
    margin-bottom: 20px;
    font-size: .9em;
    display: inline-block;
}

.login_holder .form-control::-webkit-input-placeholder {
    color: #c5c5c5;
    font-size: .9em;
}

.login_holder .form-control::-moz-placeholder {
    color: #c5c5c5;
    font-size: .9em;
}

.login_holder .form-control:-ms-input-placeholder {
    color: #c5c5c5;
    font-size: .9em;
}

.login_holder .form-control:-moz-placeholder {
    color: #c5c5c5;
    font-size: .9em;
}

.login_holder .form-control:hover {
    border-bottom: 2px solid #c5c5c5;
    font-weight: bold;
}

.login_holder .password_holder {
    position: relative;
}

.login_holder .password_holder span {
    position: absolute;
    left: 0;
    top: 15%;
    width: 20px;
    height: 20px;
    background-size: 20px;
    cursor: pointer;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDU3Mi4wOTggNTcyLjA5NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTcyLjA5OCA1NzIuMDk3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTI4Ni4wNDksMTI4LjU3MmMtMTA3LjY2MywwLTIwOS43MzgsNTIuMTU1LTI3My4wMzgsMTM5LjUyNEwwLDI4Ni4wNTJsMTMuMDExLDE3Ljk1NyAgICBjNjMuMjk5LDg3LjM2MiwxNjUuMzc1LDEzOS41MTgsMjczLjAzOCwxMzkuNTE4czIwOS43MzgtNTIuMTU1LDI3My4wMzgtMTM5LjUyNGwxMy4wMTEtMTcuOTU2bC0xMy4wMTEtMTcuOTU2ICAgIEM0OTUuNzg3LDE4MC43MzMsMzkzLjcxMiwxMjguNTcyLDI4Ni4wNDksMTI4LjU3MnogTTM3MC4xMjUsMjQ0LjE1NGMwLDE3LjAyLTEzLjc5NCwzMC44Mi0zMC44MiwzMC44MiAgICBjLTE3LjAyNSwwLTMwLjgyLTEzLjgwMS0zMC44Mi0zMC44MmMwLTE3LjAyLDEzLjgwMS0zMC44MiwzMC44Mi0zMC44MkMzNTYuMzI1LDIxMy4zMzQsMzcwLjEyNSwyMjcuMTM0LDM3MC4xMjUsMjQ0LjE1NHogICAgIE0yODYuMDQ5LDM4Mi4zMjZjLTgwLjQ2NiwwLTE1Ny4xMjUtMzUuNjEyLTIwOS4yOTItOTYuMjc0YzI5LjE5Mi0zMy45NDEsNjYuMDUzLTYwLjAyNSwxMDYuOTUzLTc2LjQzMyAgICBjLTYuMjc5LDE0LjAwMi05Ljg1OSwyOS40ODYtOS44NTksNDUuODMzYzAsNjEuOTY1LDUwLjIzMywxMTIuMTk4LDExMi4xOTgsMTEyLjE5OHMxMTIuMTk4LTUwLjIzMywxMTIuMTk4LTExMi4xOTggICAgYzAtMTYuMzQ3LTMuNTc0LTMxLjgyNC05Ljg1OS00NS44MzNjNDAuODk5LDE2LjQwOCw3Ny43NjEsNDIuNDkxLDEwNi45NTMsNzYuNDMzICAgIEM0NDMuMTc0LDM0Ni43MTMsMzY2LjUxNSwzODIuMzI2LDI4Ni4wNDksMzgyLjMyNnoiIGZpbGw9IiNjNWM1YzUiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K)
}

.login_holder .password_holder span.eye {
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDU3Mi4wOTggNTcyLjA5OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTcyLjA5OCA1NzIuMDk4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTk5LjE4NywzOTguOTk5bDQ0LjMzMy00NC4zMzJjLTI0Ljg5LTE1LjAzNy00Ny41MDMtMzMuOTg0LTY2Ljc2My01Ni4zNzljMjkuMTg3LTMzLjk0MSw2Ni4wNTMtNjAuMDE4LDEwNi45NDctNzYuNDI2ICAgIGMtNi4yNzksMTQuMDAyLTkuODUzLDI5LjQ4Ni05Ljg1Myw0NS44MjdjMCwxNi41OTcsMy42OTYsMzIuMywxMC4xNjUsNDYuNDc2bDM1LjgwMi0zNS43OTcgICAgYy01LjY5OC01LjU5NC05LjI0OC0xMy4zNi05LjI0OC0yMS45NzdjMC0xNy4wMiwxMy44MDEtMzAuODIsMzAuODItMzAuODJjOC42MTEsMCwxNi4zODMsMy41NSwyMS45NzEsOS4yNDhsMzIuNTM0LTMyLjUzNCAgICBsMzYuNjM1LTM2LjYyOGwxOC4zNjYtMTguMzczYy0yMS4yMDYtNC4xODYtNDIuODk2LTYuNDY5LTY0Ljg0OC02LjQ2OWMtMTA3LjY2MywwLTIwOS43MzIsNTIuMTU1LTI3My4wMzgsMTM5LjUxOEwwLDI5OC4yODggICAgbDEzLjAxMSwxNy45NTdDMzYuODMsMzQ5LjExNiw2Ni4xNTEsMzc2Ljk5OSw5OS4xODcsMzk4Ljk5OXoiIGZpbGw9IiNjNWM1YzUiLz4KCQk8cGF0aCBkPSJNNDU5LjIwOCwxODguOTk4bC00NC44NTQsNDQuODU0YzMwLjUzOSwxNi4wNzEsNTguMTE1LDM3Ljg0Niw4MC45ODYsNjQuNDM3ICAgIGMtNTIuMTY3LDYwLjY2Mi0xMjguODI2LDk2LjI3My0yMDkuMjkyLDk2LjI3M2MtMTAuMywwLTIwLjUzMy0wLjYtMzAuNjYxLTEuNzQ0bC01Mi4zNzUsNTIuMzc1ICAgIGMyNi45MDMsNi44ODcsNTQuNzYyLDEwLjU3LDgzLjAzNiwxMC41N2MxMDcuNjYzLDAsMjA5LjczOC01Mi4xNTQsMjczLjAzOC0xMzkuNTIzbDEzLjAxMS0xNy45NTdsLTEzLjAxMS0xNy45NTYgICAgQzUzMi4wMjMsMjQyLjk5NSw0OTcuODQ0LDIxMi4xNSw0NTkuMjA4LDE4OC45OTh6IiBmaWxsPSIjYzVjNWM1Ii8+CgkJPHBhdGggZD0iTTI4Ni4wNDksMzc5Ljg4OGM2MS45NjUsMCwxMTIuMTk4LTUwLjIzNCwxMTIuMTk4LTExMi4xOTljMC01LjU4OC0wLjU0NS0xMS4wMzUtMS4zMzUtMTYuNDAyTDI2OS42NDcsMzc4LjU2ICAgIEMyNzUuMDE1LDM3OS4zNDksMjgwLjQ2MSwzNzkuODg4LDI4Ni4wNDksMzc5Ljg4OHoiIGZpbGw9IiNjNWM1YzUiLz4KCQk8cGF0aCBkPSJNMjQ4LjgxNSwzNzMuNDMxTDM5MS43OSwyMzAuNDU1bDQuOTk0LTQuOTk0bDQ1Ljc5Ni00NS43OTZsODYuNzY0LTg2Ljc3YzEzLjU0My0xMy41NDMsMTMuNTQzLTM1LjUwMiwwLTQ5LjA0NiAgICBjLTYuNzctNi43NjktMTUuNjQ5LTEwLjE1OS0yNC41MjMtMTAuMTU5cy0xNy43NTQsMy4zODQtMjQuNTIyLDEwLjE1OWwtMTA4LjMzLDEwOC4zMzZsLTIyLjc3MiwyMi43NzJsLTI5LjI0OCwyOS4yNDggICAgbC00OC4xNCw0OC4xNGwtMzQuNDU2LDM0LjQ1NmwtNDQuMDI3LDQ0LjAyN2wtMzMuMTE1LDMzLjExNWwtNDUuMDU2LDQ1LjA1NWwtNzAuMjA4LDcwLjIwMyAgICBjLTEzLjU0MywxMy41NDMtMTMuNTQzLDM1LjUwMiwwLDQ5LjA0NWM2Ljc2OSw2Ljc3LDE1LjY0OSwxMC4xNiwyNC41MjMsMTAuMTZzMTcuNzU0LTMuMzg1LDI0LjUyMy0xMC4xNmw4OC44OTktODguODk4ICAgIGw1MC4wODYtNTAuMDg2TDI0OC44MTUsMzczLjQzMXoiIGZpbGw9IiNjNWM1YzUiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K)
}

.login_holder .login_btn {
    background: #ffc94d;
    font-size: .9em;
    color: #222;
    margin: 20px auto;
    font-weight: bold;
    outline: none;
    box-shadow: none;
    padding: 10px 12px;
    cursor: pointer;
}

.login_holder .login_btn:hover,
.login_holder .login_btn:active {
    opacity: .8;
}

.login_holder .forget_pass_btn {
    font-size: .8em;
    color: #222;
    text-align: center;
    margin: 20px auto;
    display: inline-block;
    position: relative;
    transition: color .3s ease;
    text-decoration: none!important;
    cursor: pointer;
}

.login_holder .forget_pass_btn:hover {
    color: #444;
    transition: color .3s ease;
}

.login_holder .forget_pass_btn:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    right: 0;
    height: 1px;
    background: #ffc94d;
    opacity: 0;
    visibility: hidden;
    transition: all .3s ease;
    cursor: pointer;
}

.login_holder .forget_pass_btn:hover:after {
    opacity: 1;
    visibility: visible;
    transition: all .3s ease;
}

@media(max-width:768px){
    .login {
        position: relative;
        height: 100%;
        display: block;
    }

    .login_holder {
        position: relative;
        top: auto;
        left: auto;
        width: 100%;
        height: 100%;
        transform: translate(0, 0);
        display: block;
        margin: 0 auto;
    }

    .login_holder:after {
        display: none;
    }

    .login_holder .login_column {
        width: 50%;
        height: 50%;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        position: absolute;
        background: #fff;
        border-radius: 10px;
    }

    .login_holder .horizantal_center{
        left: 50%;
        top: 43%;
        transform: translate(-50%, -50%);
        width: 80%;
    }

    .login_holder .logo {
        position: absolute;
        right: auto;
        margin: 0 auto;
        left: 50%;
        top: 20%;
        transform: translate(-50%,-20%);
    }
}
@media(max-width:550px){
    .login_holder .login_column {
        background: #fff;
        border-radius: 10px;
        float: none;
        margin: 20px;
        padding: 0;
        width: auto;
        height: calc(100% - 40px);
        transform: translate(0%,0%);
        position: relative;
        left: auto;
        top: auto;
    }

    .login_holder .logo_holder {
        position: absolute;
        right: 20px;
        bottom: 20px;
        z-index: 10;
        top: auto;
        left: 20px;
        padding: 20px;
        text-align: center;
        background-color: #eeb42f;
        border-radius: 0 0 10px 10px;
    }

    .login_holder .logo {
        position: relative;
        right: auto;
        margin: 0 auto;
        left: auto;
        top: auto;
        transform: translate(0%,0%);
    }
}
</style>

