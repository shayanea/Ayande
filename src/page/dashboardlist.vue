<template>
    <div class="main">
        <ul class="dashboard-list">
            <li v-for="(item, index) of this.$store.state.pin" :key="index" :class="{'multi': item.multiusers}">
                <router-link :to="{ path: 'customdashboard'}">
                    <span>{{item.name}}</span>
                </router-link>
            </li>
            <div class="add-new-dashboard" @click="AddNewDash">
                <span></span>
            </div>
        </ul>
    </div>
</template>

<script>
export default {
    name:'dashboard',
    data () {
        return {
        }
    },
    methods: {
        AddNewDash: function () {
            this.$router.push({ path: '/addnewdashboard' });
        },
        ShowNewDashboard: function (status) {
            if(status){
                this.$router.push({ path: '/dashboard' });
            }
        }
    }
}
</script>

<style>
.dashboard-list{
    list-style: none;
    text-align: right;
    padding: 20px;
    direction: rtl;
}

.dashboard-list li{
    height: 220px;
    width: 200px;
    display: inline-block;
    margin-left: 20px;
    margin-bottom: 20px;
    border-radius: 6px;
    background: #ddd;
    padding: 20px;
    position: relative;
    cursor: pointer;
    transition: all .3 ease;
}

.dashboard-list li:hover{
    background: #ffc72f;
    transition: all .3 ease;
}

.dashboard-list li.multi:after{
    content: '';
    position: absolute;
    left: 15px;
    top: 15px;
    height: 25px;
    width: 25px;
    background-size: 25px;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgODAuMTMgODAuMTMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDgwLjEzIDgwLjEzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQ4LjM1NSwxNy45MjJjMy43MDUsMi4zMjMsNi4zMDMsNi4yNTQsNi43NzYsMTAuODE3YzEuNTExLDAuNzA2LDMuMTg4LDEuMTEyLDQuOTY2LDEuMTEyICAgYzYuNDkxLDAsMTEuNzUyLTUuMjYxLDExLjc1Mi0xMS43NTFjMC02LjQ5MS01LjI2MS0xMS43NTItMTEuNzUyLTExLjc1MkM1My42NjgsNi4zNSw0OC40NTMsMTEuNTE3LDQ4LjM1NSwxNy45MjJ6IE00MC42NTYsNDEuOTg0ICAgYzYuNDkxLDAsMTEuNzUyLTUuMjYyLDExLjc1Mi0xMS43NTJzLTUuMjYyLTExLjc1MS0xMS43NTItMTEuNzUxYy02LjQ5LDAtMTEuNzU0LDUuMjYyLTExLjc1NCwxMS43NTJTMzQuMTY2LDQxLjk4NCw0MC42NTYsNDEuOTg0ICAgeiBNNDUuNjQxLDQyLjc4NWgtOS45NzJjLTguMjk3LDAtMTUuMDQ3LDYuNzUxLTE1LjA0NywxNS4wNDh2MTIuMTk1bDAuMDMxLDAuMTkxbDAuODQsMC4yNjMgICBjNy45MTgsMi40NzQsMTQuNzk3LDMuMjk5LDIwLjQ1OSwzLjI5OWMxMS4wNTksMCwxNy40NjktMy4xNTMsMTcuODY0LTMuMzU0bDAuNzg1LTAuMzk3aDAuMDg0VjU3LjgzMyAgIEM2MC42ODgsNDkuNTM2LDUzLjkzOCw0Mi43ODUsNDUuNjQxLDQyLjc4NXogTTY1LjA4NCwzMC42NTNoLTkuODk1Yy0wLjEwNywzLjk1OS0xLjc5Nyw3LjUyNC00LjQ3LDEwLjA4OCAgIGM3LjM3NSwyLjE5MywxMi43NzEsOS4wMzIsMTIuNzcxLDE3LjExdjMuNzU4YzkuNzctMC4zNTgsMTUuNC0zLjEyNywxNS43NzEtMy4zMTNsMC43ODUtMC4zOThoMC4wODRWNDUuNjk5ICAgQzgwLjEzLDM3LjQwMyw3My4zOCwzMC42NTMsNjUuMDg0LDMwLjY1M3ogTTIwLjAzNSwyOS44NTNjMi4yOTksMCw0LjQzOC0wLjY3MSw2LjI1LTEuODE0YzAuNTc2LTMuNzU3LDIuNTktNy4wNCw1LjQ2Ny05LjI3NiAgIGMwLjAxMi0wLjIyLDAuMDMzLTAuNDM4LDAuMDMzLTAuNjZjMC02LjQ5MS01LjI2Mi0xMS43NTItMTEuNzUtMTEuNzUyYy02LjQ5MiwwLTExLjc1Miw1LjI2MS0xMS43NTIsMTEuNzUyICAgQzguMjgzLDI0LjU5MSwxMy41NDMsMjkuODUzLDIwLjAzNSwyOS44NTN6IE0zMC41ODksNDAuNzQxYy0yLjY2LTIuNTUxLTQuMzQ0LTYuMDk3LTQuNDY3LTEwLjAzMiAgIGMtMC4zNjctMC4wMjctMC43My0wLjA1Ni0xLjEwNC0wLjA1NmgtOS45NzFDNi43NSwzMC42NTMsMCwzNy40MDMsMCw0NS42OTl2MTIuMTk3bDAuMDMxLDAuMTg4bDAuODQsMC4yNjUgICBjNi4zNTIsMS45ODMsMTIuMDIxLDIuODk3LDE2Ljk0NSwzLjE4NXYtMy42ODNDMTcuODE4LDQ5Ljc3MywyMy4yMTIsNDIuOTM2LDMwLjU4OSw0MC43NDF6IiBmaWxsPSIjYmFiYWJhIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==);
}

.dashboard-list li:after{
    content: '';
    position: absolute;
    left: 15px;
    top: 15px;
    height: 25px;
    width: 25px;
    background-size: 25px;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDM1MCAzNTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM1MCAzNTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxwYXRoIGQ9Ik0xNzUsMTcxLjE3M2MzOC45MTQsMCw3MC40NjMtMzguMzE4LDcwLjQ2My04NS41ODZDMjQ1LjQ2MywzOC4zMTgsMjM1LjEwNSwwLDE3NSwwcy03MC40NjUsMzguMzE4LTcwLjQ2NSw4NS41ODcgICBDMTA0LjUzNSwxMzIuODU1LDEzNi4wODQsMTcxLjE3MywxNzUsMTcxLjE3M3oiIGZpbGw9IiNiYWJhYmEiLz4KCTxwYXRoIGQ9Ik00MS45MDksMzAxLjg1M0M0MS44OTcsMjk4Ljk3MSw0MS44ODUsMzAxLjA0MSw0MS45MDksMzAxLjg1M0w0MS45MDksMzAxLjg1M3oiIGZpbGw9IiNiYWJhYmEiLz4KCTxwYXRoIGQ9Ik0zMDguMDg1LDMwNC4xMDRDMzA4LjEyMywzMDMuMzE1LDMwOC4wOTgsMjk4LjYzLDMwOC4wODUsMzA0LjEwNEwzMDguMDg1LDMwNC4xMDR6IiBmaWxsPSIjYmFiYWJhIi8+Cgk8cGF0aCBkPSJNMzA3LjkzNSwyOTguMzk3Yy0xLjMwNS04Mi4zNDItMTIuMDU5LTEwNS44MDUtOTQuMzUyLTEyMC42NTdjMCwwLTExLjU4NCwxNC43NjEtMzguNTg0LDE0Ljc2MSAgIHMtMzguNTg2LTE0Ljc2MS0zOC41ODYtMTQuNzYxYy04MS4zOTUsMTQuNjktOTIuODAzLDM3LjgwNS05NC4zMDMsMTE3Ljk4MmMtMC4xMjMsNi41NDctMC4xOCw2Ljg5MS0wLjIwMiw2LjEzMSAgIGMwLjAwNSwxLjQyNCwwLjAxMSw0LjA1OCwwLjAxMSw4LjY1MWMwLDAsMTkuNTkyLDM5LjQ5NiwxMzMuMDgsMzkuNDk2YzExMy40ODYsMCwxMzMuMDgtMzkuNDk2LDEzMy4wOC0zOS40OTYgICBjMC0yLjk1MSwwLjAwMi01LjAwMywwLjAwNS02LjM5OUMzMDguMDYyLDMwNC41NzUsMzA4LjAxOCwzMDMuNjY0LDMwNy45MzUsMjk4LjM5N3oiIGZpbGw9IiNiYWJhYmEiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);
}

.dashboard-list li a{
    text-decoration: none;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
}
.dashboard-list li span{
    position: absolute;
    right: 15px;
    bottom: 15px;
    color: #444;
    font-size: 1em;
    font-family: 'IRANSANS BOLD';
}

.add-new-dashboard{
    text-align: center;
    display: inline-block;
    height: 220px;
    width: 200px;
    transition: all .3s ease;
    cursor: pointer;
    position: relative;
    background: #ddd;
    border-radius: 6px;
    margin-left: 20px;
    margin-bottom: 20px;
}

.add-new-dashboard span{
    position: absolute;
    top: 50%;
    left: 50%;
    height: 40px;
    width: 40px;
    background-repeat: no-repeat;
    background-size: 40px;
    transform: translate(-50%,-50%);
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMxLjQ0NCAzMS40NDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMxLjQ0NCAzMS40NDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cGF0aCBkPSJNMS4xMTksMTYuODQxYy0wLjYxOSwwLTEuMTExLTAuNTA4LTEuMTExLTEuMTI3YzAtMC42MTksMC40OTItMS4xMTEsMS4xMTEtMS4xMTFoMTMuNDc1VjEuMTI3ICBDMTQuNTk1LDAuNTA4LDE1LjEwMywwLDE1LjcyMiwwYzAuNjE5LDAsMS4xMTEsMC41MDgsMS4xMTEsMS4xMjd2MTMuNDc2aDEzLjQ3NWMwLjYxOSwwLDEuMTI3LDAuNDkyLDEuMTI3LDEuMTExICBjMCwwLjYxOS0wLjUwOCwxLjEyNy0xLjEyNywxLjEyN0gxNi44MzN2MTMuNDc2YzAsMC42MTktMC40OTIsMS4xMjctMS4xMTEsMS4xMjdjLTAuNjE5LDAtMS4xMjctMC41MDgtMS4xMjctMS4xMjdWMTYuODQxSDEuMTE5eiIgZmlsbD0iIzY2NjY2NiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);
}

.add-new-dashboard:hover{
    background-color: #ccc;
    transition: all .3s ease;
}
</style>


