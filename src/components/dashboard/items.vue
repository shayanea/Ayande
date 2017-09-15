<template>
    <div class="container-fluid boards-list">
        <!-- <div class="board" v-for="(item, index) of chart" :key="index" v-if="empty">
            <LineChart v-if="item.type == 'spline' || item.type == 'line'" :list="item.data" :title="item.title" :type="item.type" :labeltext="item.labeltext" :labelstatus="item.labelstatus" :marker="item.marker" :timeline="item.time"
            :suffix="item.suffix"></LineChart>
        </div>  -->
        <div class="add-new-dashboard-item" @click="AddNewItem">
            <span></span>
        </div>
    </div>
</template>

<script>
export default {
    name:'items',
    props: {
        items: {
            required: true,
            default: []
        }
    },
    data () {
        return {

        }
    },
    methods: {
        AddNewItem: function() {
            this.$emit('addnewitemtodashboard',true);
        }
    }
}
</script>

<style>
.add-new-dashboard-item{
    text-align: center;
    float: right;
    height: 250px;
    width: 200px;
    transition: all .3s ease;
    cursor: pointer;
    position: relative;
    background: #ddd;
    border-radius: 6px;
}

.add-new-dashboard-item:hover{
    background-color: #ccc;
}

.add-new-dashboard-item span{
    position: absolute;
    top: 50%;
    left: 50%;
    height: 40px;
    width: 40px;
    background-repeat: no-repeat;
    background-size: 40px;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMxLjQ0NCAzMS40NDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMxLjQ0NCAzMS40NDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cGF0aCBkPSJNMS4xMTksMTYuODQxYy0wLjYxOSwwLTEuMTExLTAuNTA4LTEuMTExLTEuMTI3YzAtMC42MTksMC40OTItMS4xMTEsMS4xMTEtMS4xMTFoMTMuNDc1VjEuMTI3ICBDMTQuNTk1LDAuNTA4LDE1LjEwMywwLDE1LjcyMiwwYzAuNjE5LDAsMS4xMTEsMC41MDgsMS4xMTEsMS4xMjd2MTMuNDc2aDEzLjQ3NWMwLjYxOSwwLDEuMTI3LDAuNDkyLDEuMTI3LDEuMTExICBjMCwwLjYxOS0wLjUwOCwxLjEyNy0xLjEyNywxLjEyN0gxNi44MzN2MTMuNDc2YzAsMC42MTktMC40OTIsMS4xMjctMS4xMTEsMS4xMjdjLTAuNjE5LDAtMS4xMjctMC41MDgtMS4xMjctMS4xMjdWMTYuODQxSDEuMTE5eiIgZmlsbD0iIzY2NjY2NiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);
}
</style>
