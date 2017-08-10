<template>
    <div class="workspace" :class="{'active' : show}" v-if="show">
        <svg version="1.1" id="CloseWorkspace" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 47.971 47.971" style="enable-background:new 0 0 47.971 47.971;" xml:space="preserve">
            <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
            c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
            C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
            s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z" />
        </svg>
        <click-outside :handler="Hide">
            <ul>
                <li v-for="(item, index) of list" :key="index" :class="{'active' : item.active}" @click="Open(item)">
                    <div class="workspace_name">{{item.name}}</div>
                </li>
                <li class="empty" @click="Open('')">
                    <span class="addnew_dashboard_col"></span>
                </li>
            </ul>
        </click-outside>
    </div>
</template>

<script>
import ClickOutside from 'onclick-outside'

export default {
    name: 'workspace',
    props: {
        show: {
            required: true,
            default: false
        },
        list: {
            required: true,
            default: []
        }
    },
    data() {
        return {

        }
    },
    components: {
        ClickOutside
    },
    methods: {
        Hide: function() {
            console.log('hide');
            this.$store.commit('ShowDashboardList');
        },
        Open: function(item) {
            this.$store.commit('ShowDashboardList');
        }
    }
}
</script>

<style>
.workspace {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
    z-index: -1;
    padding: 80px;
}

.workspace.active {
    opacity: 1;
    z-index: 999;
}

.workspace ul {
    list-style: none;
    display: block;
    position: relative;
    float: right;
    padding: 0;
    margin: 0 auto;
}

.workspace ul li {
    float: right;
    margin-left: 25px;
    height: 210px;
    width: 150px;
    display: block;
    text-align: right;
    border-radius: 6px;
    background: #d9d9d9;
    position: relative;
    cursor: pointer;
    transition: background .3s ease;
}

.workspace ul li.empty {
    background: rgba(256, 256, 256, .7);
    color: #333;
}

.workspace ul li.empty:hover{
    background: rgba(256, 256, 256, 1);
}

.workspace ul li.active {
    background: #fdbe13;
}

.workspace ul li:hover{
    background: #fdbe13;
    transition: background .3s ease;
}

.workspace ul li .workspace_name {
    position: absolute;
    right: 15px;
    bottom: 15px;
    color: #333;
    font-size: 14px;
    font-family: 'IRANSANS BOLD';
}

.workspace ul li.empty .addnew_dashboard_col {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 40px;
    background-size: 40px;
    transform: translate(-50%, -50%);
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ5MS44NiA0OTEuODYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5MS44NiA0OTEuODY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMjU2cHgiIGhlaWdodD0iMjU2cHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00NjUuMTY3LDIxMS42MTRIMjgwLjI0NVYyNi42OTFjMC04LjQyNC0xMS40MzktMjYuNjktMzQuMzE2LTI2LjY5cy0zNC4zMTYsMTguMjY3LTM0LjMxNiwyNi42OXYxODQuOTI0SDI2LjY5ICAgIEMxOC4yNjcsMjExLjYxNCwwLDIyMy4wNTMsMCwyNDUuOTI5czE4LjI2NywzNC4zMTYsMjYuNjksMzQuMzE2aDE4NC45MjR2MTg0LjkyNGMwLDguNDIyLDExLjQzOCwyNi42OSwzNC4zMTYsMjYuNjkgICAgczM0LjMxNi0xOC4yNjgsMzQuMzE2LTI2LjY5VjI4MC4yNDVINDY1LjE3YzguNDIyLDAsMjYuNjktMTEuNDM4LDI2LjY5LTM0LjMxNlM0NzMuNTksMjExLjYxNCw0NjUuMTY3LDIxMS42MTR6IiBmaWxsPSIjMzMzMzMzIi8+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==)
}

#CloseWorkspace{
    position: fixed;
    top: 20px;
    left: 20px;
    width: 20px;
    stroke-width: 4px;
    cursor: pointer;
}
</style>
