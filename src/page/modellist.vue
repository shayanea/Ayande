<template>
    <div class="main">
        <ul class="model-list">
            <li v-for="(item, index) of this.$store.state.models" :key="index" @click="EditModel(item)">
                {{item.title}}
            </li>
            <div class="add-new-model" @click="AddNewModel">
                <span></span>
            </div>
        </ul>
    </div>
</template>
 
<script>
export default {
    name:'main',
    data () {
        return {
        }
    },
    methods: {
        EditModel: function(item) {
            
        },
        AddNewModel: function() {
            if(!this.$store.state.showbgwrapper) this.$store.commit('ShowBgWrapper')
            this.$store.commit('ShowCreateModel');
        }
    }
}
</script>

<style>
.model-list{
    list-style: none;
    text-align: right;
    padding: 20px;
    direction: rtl;
}

.model-list li{
    height: 100px;
    width: 150px;
    float: right;
    margin-left: 20px;
    margin-bottom: 20px;
    border-radius: 6px;
    background: #ddd;
    padding: 20px;
    position: relative;
    cursor: pointer;
    transition: all .3 ease;
    color: #444;
    font-size: 14px;
    font-family: 'IRANSANS BOLD';
    line-height: 65px;
    text-align: center;
}

.model-list li:hover{
    background: #f3b233;
    transition: all .3 ease;
}

.add-new-model{
    text-align: center;
    float: right;
    height: 100px;
    width: 150px;
    transition: all .3s ease;
    cursor: pointer;
    position: relative;
    background: #ddd;
    border-radius: 6px;
    margin-left: 20px;
    margin-bottom: 20px;
}

.add-new-model span{
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

.add-new-model:hover{
    color: #ccc;
    transition: all .3s ease;
}
</style>