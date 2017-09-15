<template>
    <div>
        <!-- Toolbar -->
        <div class="main" :class="{'blur' : this.$store.state.showdashboardlist}">
            <Topbar></Topbar>
            <Dlist :list="list"></Dlist>
            <!-- <CityStock></CityStock> -->
        </div>
        <div class="container-fluid" dir="ltr">
            <d3-network ref='net' :net-nodes="nodes" :net-links="links" :options="options" @node-click="NodeClick" />
        </div>

        <!-- Notification List -->
        <Notifications :show="this.$store.state.shownotificationlist"></Notifications>

        <!-- Create Model -->
        <CreateModel></CreateModel>

        <!-- Create View -->
        <CreateView></CreateView>

        <!-- Background Wrapper -->
        <BgWrapper :show="this.$store.state.showbgwrapper"></BgWrapper>
    </div>
</template>

<script>
import Topbar from '../components/toolbar/topbar'
import Dlist from '../components/dashboard/dlist'
import D3Network from 'vue-d3-network'
import Nodes from '../components/network/nodes.json'
import Links from '../components/network/links.json'
import BgWrapper from '../components/bgwrapper'
import CreateView from '../components/view/popup'
import CreateModel from '../components/model/popup'
import Notifications from '../components/notificationlist'

export default {
    name: 'network',
    data() {
        return {
            list: [
                {
                    id: 0,
                    active: false,
                    name: 'گزارش عملکرد سپرده آینده سـاز'
                }, {
                    id: 1,
                    active: false,
                    name: 'گزارش سپرده سالیانه'
                }, {
                    id: 2,
                    active: false,
                    name: 'عملکرده ماهانه شعب'
                }
            ],
            nodes: [
                {
                    "id": 0,
                    "name": " ",
                    "_cssClass": "minimal_node",
                    "_color": "#666",
                    "_labelClass": "node_title"
                }, {
                    "id": 1,
                    "name": "مشتری",
                    "_cssClass": "main_node",
                    "_color": "#666",
                    "_labelClass": "node_title"
                },
                {
                    "id": 2,
                    "name": "محصول",
                    "_cssClass": "main_node",
                    "_color": "#666",
                    "_labelClass": "node_title"
                },
                {
                    "id": 3,
                    "name": "کانال",
                    "_cssClass": "main_node",
                    "_color": "#666",
                    "_labelClass": "node_title"
                },
                {
                    "id": 1001,
                    "name": " ",
                    "_cssClass": "minimal_node",
                    "_color": "#666",
                    "_labelClass": "node_title"
                },
                {
                    "id": 1002,
                    "name": " ",
                    "_cssClass": "minimal_node",
                    "_color": "#666",
                    "_labelClass": "node_title"
                }, {
                    "id": 1003,
                    "name": " ",
                    "_cssClass": "minimal_node",
                    "_color": "#666",
                    "_labelClass": "node_title"
                }],
            links: [{
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
            }],
            nodeSize: 40
        }
    },
    components: {
        Topbar,
        Dlist,
        D3Network,
        BgWrapper,
        CreateView,
        CreateModel,
        Notifications
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

            // console.log(_.some(array, function (item) {return item.id === obj.id;}))

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

.minimal_node {
    r: 4px;
}

.main_node {
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

.node_title {
    font-size: 16px!important;
    fill: #000!important;
}

.node-label {
    fill: #666;
    font-size: 11px;
}
</style>
