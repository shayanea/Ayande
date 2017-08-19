<template>
    <click-outside :handler="Hide" class="charts_option">
        <svg @click="ShowDrp" xmlns="http://www.w3.org/2000/svg" class="more" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;" xml:space="preserve">
            <circle cx="69.545" cy="306" r="69.545" fill="#c5c4d8"/>
            <circle cx="306" cy="306" r="69.545" fill="#c5c4d8"/>
            <circle cx="542.455" cy="306" r="69.545" fill="#c5c4d8"/>
        </svg>
        <ul class="charts_option_list" :class="{'active': show}">
            <li v-if="!full" @click="FullColumn">بزرگ نمایی</li>
            <li v-if="full" @click="MinimizeColumn">کوچک نمایی</li>
            <li>تنظیمات</li>
        </ul>
    </click-outside>
</template>

<script>
import ClickOutside from 'onclick-outside'

export default {
    name:'chartoptions',
    data () {
        return {
            show: false,
            full: false
        }
    },
    components: {
        ClickOutside
    },
    methods: {
        ShowDrp: function() {
            this.show = !this.show; 
        },
        Hide: function() {
            this.show = false;
        },
        FullColumn: function() {
            this.full = true;
            this.show = false;
            this.$emit('fullcolumn',true)
        },
        MinimizeColumn: function() {
            this.full = false;
            this.show = false;
            this.$emit('fullcolumn',false)
        }
    }
}
</script>

<style>
.column_box_holer .charts_option{
    position: absolute;
    left: 15px;
    top: 10px;
    cursor: pointer;
}

.column_box_holer .charts_option svg{
    width: 15px;
}

.charts_option .charts_option_list{
    list-style: none;
    padding-left: 0;
    border-radius: 4px;
    background: #363636;
    box-shadow: 0px 0px 10px 1px rgba(154, 154, 154, 0.3);
    position: absolute;
    z-index: 99;
    min-width: 100px;
    top: 7px;
    left: -5px;
    opacity: 0;
    visibility: hidden;
    transition: opacity .3s ease, visibility .3s ease;
}

.charts_option .charts_option_list.active{
    opacity: 1;
    visibility: visible;
    transition: opacity .3s ease, visibility .3s ease;
}

.charts_option .charts_option_list::before{
    content:'';
    position: absolute;
    top: -6px;
    left: 10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 4px 6px 4px;
    border-color: transparent transparent #363636 transparent;
}

.charts_option .charts_option_list li{
    font-size: 11px;
    color: #eee;
    text-align: right;
    padding: 10px;
    border-bottom: 1px solid #4c4b4b;
}

.charts_option .charts_option_list li:last-child{
    border-bottom: 0;
}
</style>


