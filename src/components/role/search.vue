<template>
    <div class="search-role">
        <ul>
            <li class="active">فهرست نقش ها</li>
            <li>
                <form>
                    <div class="form-group">
                        <input class="form-control" v-model="text" @keyup="Search" />
                    </div>
                </form>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'rolesearch',
    data () {
        return {
            text: ''
        }
    },
    methods: {
        Search: function() {
            this.$emit('search',{searchtext : this.text})
        }
    }
}
</script>

<style>
.search-role{
    border-radius: 6px;
    background: #ddd;
    list-style: none;
    float: right;
    width: 100%;
}

.search-role ul{
    list-style: none;
    float: right;
    margin: 0;
    padding: 0;
}

.search-role li{
    float: right;
    direction: rtl;
    position: relative;
}

.search-role li:first-child{
    margin-left: 25px;
    padding-right: 25px!important;
}

.search-role li:first-child:after{
    content: '';
    position: absolute;
    left: -25px;
    top: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 25px 25px 25px 0;
    border-color: transparent #cccccc transparent transparent;
}

.search-role li.active{
    background: #ccc;
    padding: 15px;
}

.search-role li .form-group{
    margin-bottom: 0;
    padding-right: 20px;
}

.search-role li .form-control{
    height: 45px;
    line-height: 55px;
    color: #222;
    background: transparent;
    border: 0;
    border-bottom: 1px solid #ccc;
    box-shadow: none;
    outline: none;
    border-radius: 0;
    min-width: 250px;
    text-align: right;
    background-position: left center;
    background-repeat: no-repeat;
    background-size: 15px;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ1MSA0NTEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1MSA0NTE7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQ3LjA1LDQyOGwtMTA5LjYtMTA5LjZjMjkuNC0zMy44LDQ3LjItNzcuOSw0Ny4yLTEyNi4xQzM4NC42NSw4Ni4yLDI5OC4zNSwwLDE5Mi4zNSwwQzg2LjI1LDAsMC4wNSw4Ni4zLDAuMDUsMTkyLjMgICBzODYuMywxOTIuMywxOTIuMywxOTIuM2M0OC4yLDAsOTIuMy0xNy44LDEyNi4xLTQ3LjJMNDI4LjA1LDQ0N2MyLjYsMi42LDYuMSw0LDkuNSw0czYuOS0xLjMsOS41LTQgICBDNDUyLjI1LDQ0MS44LDQ1Mi4yNSw0MzMuMiw0NDcuMDUsNDI4eiBNMjYuOTUsMTkyLjNjMC05MS4yLDc0LjItMTY1LjMsMTY1LjMtMTY1LjNjOTEuMiwwLDE2NS4zLDc0LjIsMTY1LjMsMTY1LjMgICBzLTc0LjEsMTY1LjQtMTY1LjMsMTY1LjRDMTAxLjE1LDM1Ny43LDI2Ljk1LDI4My41LDI2Ljk1LDE5Mi4zeiIgZmlsbD0iI2EzYTNhMyIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=);
}
</style>


