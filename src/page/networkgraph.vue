<template>
    <div class="main">
        <FixedHeader></FixedHeader>
        <div class="container-fluid" dir="ltr">
            <d3-network ref='net' :net-nodes="nodes" :net-links="links" :options="options" @node-click="NodeClick" />
        </div>
    </div>
</template>

<script>
import D3Network from 'vue-d3-network'
import FixedHeader from '../components/header/header.vue'
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
            nodeSize: 40
        }
    },
    components: {
        D3Network,
        FixedHeader,
        Notify,
        ListAction,
        ListMethod
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
</style>
