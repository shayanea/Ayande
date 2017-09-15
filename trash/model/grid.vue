<template>
    <div class="grid_list custome_modal" v-if="show">
        <div class="popup_header">
            <h2>انتخاب جداول <span>{{id}}</span></h2>
        </div>
        <div class="form">
            <div class="list_autocomplete">
                <div class="autocomplete_placeholder" @click="ShowDropdown">
                    {{list[0].title}}
                </div>
                <click-outside :handler="Hide" v-if="showdropdown" class="autocomplete_list">
                    <input type="text" class="form-control" v-model="searchtext"/> 
                    <ul class="autocomplete_dropdown">
                        <li v-for="(item, index) of filteredList" :key="index" @click="Pick(item)">
                            {{item.title}}
                        </li>
                    </ul>
                </click-outside>
            </div>
            <div class="grid_data_holder">
                <div class="grid_data" v-for="(item, index) of selected" :key="index">
                    <span class="remove_selected" @click="RemoveSelected(item)"></span>
                    {{item.title}}
                </div>
            </div>
            <button type="submit" class="btn btn-default save" @click="Next">مرحله بعد</button>
            <button type="button" class="btn btn-default close" @click="Prev">مرحله قبل</button>
        </div>
    </div>
</template>

<script>
import ClickOutside from 'onclick-outside'

export default {
    name:'gridlist',
    props: {
        show: {
            required: true,
            default: false
        },
        id: {
            required: true,
            default: ''
        },
        list: {
            required: true,
            default: []
        }
    },
    data() {
        return {
            grids: this.list,
            status: this.show,
            selected: [],
            searchtext: '',
            showdropdown: false
        }
    },
    components: {
        ClickOutside
    },
    computed: {
        filteredList: function() {
            return this.grids.filter(grid => {
                return grid.title.toLowerCase().includes(this.searchtext.toLowerCase())
            })
        }
    },
    methods: {
        Next: function() {
            this.$emit('save',this.selected);
        },
        Prev: function() {
            this.$emit('showdatabase',true);
        },
        Pick: function(item) {
            if(!_.find(this.selected, {id: item.id})) {
                this.selected.push(item);
                this.grids = _.reject(this.grids, {'id': item.id});
                if(this.grids.length == 0){
                    this.showdropdown = false;
                }
            }
        },
        RemoveSelected: function(item) {
            this.selected = _.reject(this.selected, {'id': item.id});
            this.grids.push(item);
        },
        ShowDropdown: function() {
            this.showdropdown = !this.showdropdown;
        },
        Hide: function() {
            this.showdropdown = false;
        }
    }
}
</script>

<style>
.grid_list{
    max-width: 400px;
}

.grid_list .grid_data{
    display: inline-block;
    padding: 5px 10px;
    color: #222;
    background: #eee;
    margin-left: 15px;
    margin-top: 15px;
    cursor: pointer;
    position: relative;
    padding-right: 25px;
    transition: background .3s ease;
}

.grid_data:hover{
    background: #ddd;
    transition: background .3s ease;
}

.grid_data .remove_selected{
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translate(0,-50%);
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ljk3MSA0Ny45NzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ3Ljk3MSA0Ny45NzE7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij4KPGc+Cgk8cGF0aCBkPSJNMjguMjI4LDIzLjk4Nkw0Ny4wOTIsNS4xMjJjMS4xNzItMS4xNzEsMS4xNzItMy4wNzEsMC00LjI0MmMtMS4xNzItMS4xNzItMy4wNy0xLjE3Mi00LjI0MiwwTDIzLjk4NiwxOS43NDRMNS4xMjEsMC44OCAgIGMtMS4xNzItMS4xNzItMy4wNy0xLjE3Mi00LjI0MiwwYy0xLjE3MiwxLjE3MS0xLjE3MiwzLjA3MSwwLDQuMjQybDE4Ljg2NSwxOC44NjRMMC44NzksNDIuODVjLTEuMTcyLDEuMTcxLTEuMTcyLDMuMDcxLDAsNC4yNDIgICBDMS40NjUsNDcuNjc3LDIuMjMzLDQ3Ljk3LDMsNDcuOTdzMS41MzUtMC4yOTMsMi4xMjEtMC44NzlsMTguODY1LTE4Ljg2NEw0Mi44NSw0Ny4wOTFjMC41ODYsMC41ODYsMS4zNTQsMC44NzksMi4xMjEsMC44NzkgICBzMS41MzUtMC4yOTMsMi4xMjEtMC44NzljMS4xNzItMS4xNzEsMS4xNzItMy4wNzEsMC00LjI0MkwyOC4yMjgsMjMuOTg2eiIgZmlsbD0iIzU1NTU1NSIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=);
    height: 8px;
    width: 8px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 8px;
}

.list_autocomplete{
    position: relative;
    width: 100%;
}

.autocomplete_placeholder{
    padding: 6px 12px;
    height: 34px;
    border: 1px solid #eee;
    border-radius: 4px;
    margin-bottom: 10px;
    text-align: right;
    color: #222;
    font-size: 14px;
    cursor: pointer;
    background: #fff;
    transition: background .2s ease;
    position: relative;
}

.autocomplete_placeholder:hover{
    background: #eee;
    transition: background .2s ease;
}

.autocomplete_placeholder:after{
    content: '';
    position: absolute;
    top: 50%;
    left: 15px;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDI5Mi4zNjIgMjkyLjM2MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjkyLjM2MiAyOTIuMzYyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTI4Ni45MzUsNjkuMzc3Yy0zLjYxNC0zLjYxNy03Ljg5OC01LjQyNC0xMi44NDgtNS40MjRIMTguMjc0Yy00Ljk1MiwwLTkuMjMzLDEuODA3LTEyLjg1LDUuNDI0ICAgQzEuODA3LDcyLjk5OCwwLDc3LjI3OSwwLDgyLjIyOGMwLDQuOTQ4LDEuODA3LDkuMjI5LDUuNDI0LDEyLjg0N2wxMjcuOTA3LDEyNy45MDdjMy42MjEsMy42MTcsNy45MDIsNS40MjgsMTIuODUsNS40MjggICBzOS4yMzMtMS44MTEsMTIuODQ3LTUuNDI4TDI4Ni45MzUsOTUuMDc0YzMuNjEzLTMuNjE3LDUuNDI3LTcuODk4LDUuNDI3LTEyLjg0N0MyOTIuMzYyLDc3LjI3OSwyOTAuNTQ4LDcyLjk5OCwyODYuOTM1LDY5LjM3N3oiIGZpbGw9IiMzMzMzMzMiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);
    height: 8px;
    width: 8px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 8px;
    transform: translate(0,-50%);
}

.autocomplete_list{
    position: relative;
    background: #fff;
    box-shadow: 0 2px 2px 0px rgba(160, 160, 160, 0.39);
    border-radius: 4px;
    border: 1px solid #eee;
    padding: 15px;
    overflow: hidden;
}

.autocomplete_list .form-control{
    font-size: 13px;
    min-width: 100%!important;
    width: 100%;
}

.autocomplete_list .autocomplete_dropdown{
    list-style: none;
    display: block;
    padding: 0;
    margin: 10px auto;
    max-height: 150px;
    overflow-y: auto;
    min-height: 50px;
}

.autocomplete_list .autocomplete_dropdown li{
    font-size: 15px;
    color: #222;
    padding: 10px;
    border-bottom: 1px solid #eee;
    cursor: pointer;
}

.autocomplete_list .autocomplete_dropdown li:last-child{
    border-bottom: 0px;
}
</style>
