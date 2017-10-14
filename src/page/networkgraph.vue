<template>
    <div class="main">
        <div class="container-fluid" dir="ltr" @contextmenu="Handler($event)">
            <d3-network ref='net' :net-nodes="nodes" :net-links="links" :options="options" @node-click="NodeClick" />
            <ClickOutside :handler="Hide" v-show="context.show">
                <ul class="context-menu" :style="{top: context.top, left: context.left}">
                    <li>
                        <router-link :to="{ path: 'categoryreportlist'}">
                            مشاهده گزارش ها 
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ path: 'addcategory'}">
                            ویرایش گره
                        </router-link>
                    </li>
                    <li>
                        <a href="">حذف گره</a>
                    </li>
                    <li>
                        <router-link :to="{ path: 'addcategory'}">
                            درح گره فرزند جدید
                        </router-link>
                    </li>
                </ul>
            </ClickOutside>
        </div>
    </div>
</template>

<script>
import D3Network from 'vue-d3-network'
import ClickOutside from 'onclick-outside'
import Notify from '../components/main/notification'
import ListAction from '../components/main/listaction'
import ListMethod from '../components/main/listmethod'
import Nodes from '../components/json/nodes.json'
import Links from '../components/json/links.json'

export default {
    name: 'networkgraph',
    data() {
        return {
            nodes: [
                {
                    "id": 0,
                    "name": " ",
                    "_cssClass": "minimal-node",
                    "_color": "#666",
                    "_labelClass": "node-title"
                }, {
                    "id": 1,
                    "name": "مشتری",
                    "_cssClass": "main-node",
                    "_color": "#666",
                    "_labelClass": "node-title"
                },
                {
                    "id": 2,
                    "name": "محصول",
                    "_cssClass": "main-node",
                    "_color": "#666",
                    "_labelClass": "node-title"
                },
                {
                    "id": 3,
                    "name": "کانال",
                    "_cssClass": "main-node",
                    "_color": "#666",
                    "_labelClass": "node-title"
                },
                {
                    "id": 1001,
                    "name": " ",
                    "_cssClass": "minimal-node",
                    "_color": "#666",
                    "_labelClass": "node-title"
                },
                {
                    "id": 1002,
                    "name": " ",
                    "_cssClass": "minimal-node",
                    "_color": "#666",
                    "_labelClass": "node-title"
                }, {
                    "id": 1003,
                    "name": " ",
                    "_cssClass": "minimal-node",
                    "_color": "#666",
                    "_labelClass": "node-title"
                }
            ],
            links: [
            {
                "sid": 1,
                "tid": 0
            },
            {
                "sid": 2,
                "tid": 0
            },
            {
                "sid": 3,
                "tid": 0
            },
            {
                "sid": 1001,
                "tid": 1
            },
            {
                "sid": 1001,
                "tid": 2
            },
            {
                "sid": 1002,
                "tid": 2
            },
            {
                "sid": 1002,
                "tid": 3
            },
            {
                "sid": 1003,
                "tid": 3
            },
            {
                "sid": 1003,
                "tid": 1
            }
            ],
            nodeSize: 40,
            context:{
                top: 0,
                left: 0,
                show: false
            }
        }
    },
    components: {
        D3Network,
        Notify,
        ListAction,
        ListMethod,
        ClickOutside
    },
    computed: {
        options() {
            return {
                force: 3000,
                size: { w: 1000, h: 800 },
                nodeSize: this.nodeSize,
                nodeLabels: true,
                canvas: false,
                strLinks: true
            }
        }
    },
    methods: {
        NodeClick: function(e, obj) {
            let array = this.nodes;
            let sarray = this.links;

            _.filter(Nodes, function(item) {
                if (item.parent == obj.id) {
                    array.push(item);
                }
            });

            _.filter(Links, function(item) {
                if (item.tid == obj.id) {
                    sarray.push(item);
                }
            });
        },
        Handler: function(e) {
            if(e.path[0].nodeName == "circle"){
                e.preventDefault();
                console.log(e);
                this.context = {
                    top: e.pageY + "px",
                    left: e.pageX + "px",
                    show: true
                }
            }else{
                this.context.show = false;
            }
        },
        Hide: function() {
            this.context.show = false;
        }
    }
}
</script>

<style>
.net {
    padding: 50px;
    text-align: center;
}

.node {
    stroke: #f3b233;
    fill: #e2a500!important;
}

.minimal-node {
    r: 4px;
}

.main-node {
    stroke: #acacac!important;
    fill: #cccccc!important;
}

.node:hover {
    stroke: #f3b233;
    fill: #e2a500!important;
}

.link {
    stroke: #f3b233;
}

.node-title {
    font-size: 16px!important;
    fill: #000!important;
}

.node-label {
    fill: #666;
    font-size: 11px;
}

.context-menu{
    position: absolute;
    top: 300px;
    left: 300px;
    background-color:#fff;
    box-shadow: 0 10px 20px 0px rgba(0, 0, 0, 0.2);
    border: 1px solid #ddd;
    list-style: none;
    padding: 0;
    border-radius: 6px;
}

.context-menu li{
    text-align: right;
    padding: 10px;
    padding-right: 30px;
    border-bottom: 1px solid #ddd;
}

.context-menu li:hover{
    background-color: #eee;
}

.context-menu li a{
    text-decoration: none;
    color: #222;
    position: relative;
}

.context-menu li:nth-child(1) a:after{
    content: '';
    position: absolute;
    right: -20px;
    top: 50%;
    transform: translate(0,-50%);
    height: 12px;
    width: 12px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 12px;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMjU2LDk2QzE0NC4zNDEsOTYsNDcuNTU5LDE2MS4wMjEsMCwyNTZjNDcuNTU5LDk0Ljk3OSwxNDQuMzQxLDE2MCwyNTYsMTYwYzExMS42NTYsMCwyMDguNDM5LTY1LjAyMSwyNTYtMTYwICAgQzQ2NC40NDEsMTYxLjAyMSwzNjcuNjU2LDk2LDI1Niw5NnogTTM4Mi4yMjUsMTgwLjg1MmMzMC4wODIsMTkuMTg3LDU1LjU3Miw0NC44ODcsNzQuNzE5LDc1LjE0OCAgIGMtMTkuMTQ2LDMwLjI2MS00NC42MzksNTUuOTYxLTc0LjcxOSw3NS4xNDhDMzQ0LjQyOCwzNTUuMjU3LDMwMC43NzksMzY4LDI1NiwzNjhjLTQ0Ljc4LDAtODguNDI4LTEyLjc0My0xMjYuMjI1LTM2Ljg1MiAgIGMtMzAuMDgtMTkuMTg4LTU1LjU3LTQ0Ljg4OC03NC43MTctNzUuMTQ4YzE5LjE0Ni0zMC4yNjIsNDQuNjM3LTU1Ljk2Miw3NC43MTctNzUuMTQ4YzEuOTU5LTEuMjUsMy45MzgtMi40NjEsNS45MjktMy42NSAgIEMxMzAuNzI1LDE5MC44NjYsMTI4LDIwNS42MTMsMTI4LDIyMWMwLDcwLjY5MSw1Ny4zMDgsMTI4LDEyOCwxMjhjNzAuNjkxLDAsMTI4LTU3LjMwOSwxMjgtMTI4ICAgYzAtMTUuMzg3LTIuNzI1LTMwLjEzNC03LjcwMy00My43OTlDMzc4LjI4NSwxNzguMzksMzgwLjI2NiwxNzkuNjAyLDM4Mi4yMjUsMTgwLjg1MnogTTI1NiwyMDVjMCwyNi41MS0yMS40OSw0OC00OCw0OCAgIHMtNDgtMjEuNDktNDgtNDhzMjEuNDktNDgsNDgtNDhTMjU2LDE3OC40OSwyNTYsMjA1eiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=);
}

.context-menu li:nth-child(2) a:after{
    content: '';
    position: absolute;
    right: -20px;
    top: 50%;
    transform: translate(0,-50%);
    height: 10px;
    width: 10px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 10px;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCIgdmlld0JveD0iMCAwIDUyOC44OTkgNTI4Ljg5OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTI4Ljg5OSA1MjguODk5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTMyOC44ODMsODkuMTI1bDEwNy41OSwxMDcuNTg5bC0yNzIuMzQsMjcyLjM0TDU2LjYwNCwzNjEuNDY1TDMyOC44ODMsODkuMTI1eiBNNTE4LjExMyw2My4xNzdsLTQ3Ljk4MS00Ny45ODEgICBjLTE4LjU0My0xOC41NDMtNDguNjUzLTE4LjU0My02Ny4yNTksMGwtNDUuOTYxLDQ1Ljk2MWwxMDcuNTksMTA3LjU5bDUzLjYxMS01My42MTEgICBDNTMyLjQ5NSwxMDAuNzUzLDUzMi40OTUsNzcuNTU5LDUxOC4xMTMsNjMuMTc3eiBNMC4zLDUxMi42OWMtMS45NTgsOC44MTIsNS45OTgsMTYuNzA4LDE0LjgxMSwxNC41NjVsMTE5Ljg5MS0yOS4wNjkgICBMMjcuNDczLDM5MC41OTdMMC4zLDUxMi42OXoiIGZpbGw9IiMwMDAwMDAiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);
}

.context-menu li:nth-child(3) a:after{
    content: '';
    position: absolute;
    right: -20px;
    top: 50%;
    transform: translate(0,-50%);
    height: 11px;
    width: 11px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 11px;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDIyLjg4IDIyLjg4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMi44OCAyMi44ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIxMjhweCIgaGVpZ2h0PSIxMjhweCI+CjxwYXRoIGQ9Ik0wLjMyNCwxLjkwOWMtMC40MjktMC40MjktMC40MjktMS4xNDMsMC0xLjU4N2MwLjQ0NC0wLjQyOSwxLjE0My0wLjQyOSwxLjU4NywwbDkuNTIzLDkuNTM5ICBsOS41MzktOS41MzljMC40MjktMC40MjksMS4xNDMtMC40MjksMS41NzEsMGMwLjQ0NCwwLjQ0NCwwLjQ0NCwxLjE1OSwwLDEuNTg3bC05LjUyMyw5LjUyNGw5LjUyMyw5LjUzOSAgYzAuNDQ0LDAuNDI5LDAuNDQ0LDEuMTQzLDAsMS41ODdjLTAuNDI5LDAuNDI5LTEuMTQzLDAuNDI5LTEuNTcxLDBsLTkuNTM5LTkuNTM5bC05LjUyMyw5LjUzOWMtMC40NDQsMC40MjktMS4xNDMsMC40MjktMS41ODcsMCAgYy0wLjQyOS0wLjQ0NC0wLjQyOS0xLjE1OSwwLTEuNTg3bDkuNTIzLTkuNTM5TDAuMzI0LDEuOTA5eiIgZmlsbD0iIzIyMjIyMiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);
}

.context-menu li:last-child a:after{
    content: '';
    position: absolute;
    right: -20px;
    top: 50%;
    transform: translate(0,-50%);
    height: 12px;
    width: 12px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 12px;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMxLjQ0NCAzMS40NDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMxLjQ0NCAzMS40NDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4Ij4KPHBhdGggZD0iTTEuMTE5LDE2Ljg0MWMtMC42MTksMC0xLjExMS0wLjUwOC0xLjExMS0xLjEyN2MwLTAuNjE5LDAuNDkyLTEuMTExLDEuMTExLTEuMTExaDEzLjQ3NVYxLjEyNyAgQzE0LjU5NSwwLjUwOCwxNS4xMDMsMCwxNS43MjIsMGMwLjYxOSwwLDEuMTExLDAuNTA4LDEuMTExLDEuMTI3djEzLjQ3NmgxMy40NzVjMC42MTksMCwxLjEyNywwLjQ5MiwxLjEyNywxLjExMSAgYzAsMC42MTktMC41MDgsMS4xMjctMS4xMjcsMS4xMjdIMTYuODMzdjEzLjQ3NmMwLDAuNjE5LTAuNDkyLDEuMTI3LTEuMTExLDEuMTI3Yy0wLjYxOSwwLTEuMTI3LTAuNTA4LTEuMTI3LTEuMTI3VjE2Ljg0MUgxLjExOXoiIGZpbGw9IiMwMDAwMDAiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==);
}
</style>
