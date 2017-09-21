<template>
    <div class="custom-autocomplete">
        <div class="autocomplete-placeholder form-control" @click="Show">
            {{selected}}
        </div>
        <ClickOutside :handler="Hide" v-show="status">
            <div class="custom-autocomplete-items">
                <input type="text" class="form-control" v-model="search" />
                <ul>
                    <li v-for="(item, index) of filteredList" :key="index" @click="Select(item)">
                        {{item[propertyname]}}
                    </li>
                </ul>
            </div>
        </ClickOutside>
    </div>
</template>

<script>
import ClickOutside from 'onclick-outside'

export default {
    name:'autocomplete',
    props: {
        items: {
            required: true,
            default: []
        },
        propertyname: {
            required: true,
            default: null
        }
    },
    data () {
        return {
            search:'',
            status: false,
            selected: this.items[0][this.propertyname]
        }
    },
    components: {
        ClickOutside
    },
    computed : {
        filteredList: function() {
            return this.items.filter(item => {
                return item[this.propertyname].toLowerCase().includes(this.search.toLowerCase());
            })
        }
    },
    methods: {
        Show: function() {
            this.status = true;
        },
        Select: function(item) {
            this.selected = item[this.propertyname];
            this.status = false;
            this.$emit('selected',item);
        },
        Hide: function() {
            this.status = false;
        }
    }
}
</script>

<style>
.custom-autocomplete{
    clear: both;
    position: relative;
}

.autocomplete-placeholder{
    cursor: pointer;
    background-position: 3% center;
    background-size: 12px;
    background-repeat: no-repeat;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI1NnB4IiBoZWlnaHQ9IjI1NnB4IiB2aWV3Qm94PSIwIDAgNDUxLjg0NyA0NTEuODQ3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NTEuODQ3IDQ1MS44NDc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMjI1LjkyMywzNTQuNzA2Yy04LjA5OCwwLTE2LjE5NS0zLjA5Mi0yMi4zNjktOS4yNjNMOS4yNywxNTEuMTU3Yy0xMi4zNTktMTIuMzU5LTEyLjM1OS0zMi4zOTcsMC00NC43NTEgICBjMTIuMzU0LTEyLjM1NCwzMi4zODgtMTIuMzU0LDQ0Ljc0OCwwbDE3MS45MDUsMTcxLjkxNWwxNzEuOTA2LTE3MS45MDljMTIuMzU5LTEyLjM1NCwzMi4zOTEtMTIuMzU0LDQ0Ljc0NCwwICAgYzEyLjM2NSwxMi4zNTQsMTIuMzY1LDMyLjM5MiwwLDQ0Ljc1MUwyNDguMjkyLDM0NS40NDlDMjQyLjExNSwzNTEuNjIxLDIzNC4wMTgsMzU0LjcwNiwyMjUuOTIzLDM1NC43MDZ6IiBmaWxsPSIjMDAwMDAwIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==);
}

.custom-autocomplete-items{
    border-radius: 6px;
    border:1px solid #eee;
    padding: 10px;
    max-height: 250px;
    position: absolute;
    top: 50px;
    background: #fff;
    left: 0;
    right: 0;
    overflow: scroll;
    z-index: 9;
}

.custom-autocomplete-items ul{
    list-style: none;
    padding: 0;
    margin: 5px auto;
}

.custom-autocomplete-items ul li{
    text-align: right;
    padding: 10px;
    cursor: pointer;
    border-bottom: 1px solid #eee;
}

.custom-autocomplete-items ul li:hover{
    background: #eee;
}
</style>
