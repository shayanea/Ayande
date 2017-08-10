<template>
    <div class="city_stock">
        <div class="total_stock">
            <div class="total_header">موجـودی کـل</div>
            <span class="dropdown_icon"></span>
        </div>
        <v-bar wrapper="chart_container"
        vBar=""
        vBarInternal=""
        hBar=""
        hBarInternal="">
            <div class="charts" v-for="(item, index) of list" :key="index">
                <svg xmlns="http://www.w3.org/2000/svg" class="more" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;" xml:space="preserve">
                    <circle cx="69.545" cy="306" r="69.545" fill="#c5c4d8"/>
                    <circle cx="306" cy="306" r="69.545" fill="#c5c4d8"/>
                    <circle cx="542.455" cy="306" r="69.545" fill="#c5c4d8"/>
                </svg>
                <div class="trend_info">
                    <div class="city_name">{{item.name}}</div>
                    <div class="city_total">{{item.total}}</div>
                    <div class="city_percentage" :class="{'growth_perc' : item.growth}">
                        {{item.percentage}}
                        <svg v-if="item.growth" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 447.243 447.243" style="enable-background:new 0 0 447.243 447.243;" xml:space="preserve">
                            <path d="M409.217,172.662c-0.844-1.152-1.764-2.247-2.754-3.276l-160-160C233.973-3.119,213.712-3.13,201.209,9.36    c-0.008,0.008-0.017,0.017-0.025,0.025l-160,160c-12.479,12.514-12.451,32.775,0.063,45.255c0.985,0.982,2.033,1.899,3.137,2.745    c13.381,8.971,31.276,7.013,42.4-4.64l88.64-88.32c4.7-4.695,8.641-10.093,11.68-16l4.32-9.6v314.24    c-0.607,16.347,10.812,30.689,26.88,33.76c17.445,2.829,33.881-9.019,36.71-26.465c0.297-1.83,0.434-3.682,0.41-5.535V99.305    l3.2,6.88c3.183,6.725,7.515,12.843,12.8,18.08l88.48,88.48c11.124,11.653,29.019,13.611,42.4,4.64    C416.563,206.944,419.658,186.921,409.217,172.662z" fill="#19e487"/>
                        </svg>
                        <svg v-if="!item.growth" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 447.243 447.243" style="enable-background:new 0 0 447.243 447.243;" xml:space="preserve">
                            <path d="M406.101,232.603c-0.978-0.982-2.019-1.899-3.116-2.745c-13.381-8.971-31.276-7.013-42.4,4.64l-88.64,88.32    c-4.7,4.695-8.641,10.093-11.68,16l-5.12,9.76v-314.4c0.677-16.099-10.332-30.349-26.08-33.76    c-17.445-2.829-33.881,9.019-36.71,26.465c-0.297,1.83-0.434,3.682-0.41,5.535v315.52l-3.2-6.88    c-3.183-6.725-7.515-12.843-12.8-18.08l-88.64-88.48c-11.124-11.653-29.019-13.611-42.4-4.64    c-14.259,10.441-17.355,30.464-6.914,44.724c0.844,1.152,1.764,2.247,2.754,3.276l160,160    c12.49,12.504,32.751,12.515,45.255,0.025c0.008-0.008,0.017-0.017,0.025-0.025l160-160    C418.542,265.382,418.577,245.121,406.101,232.603z" fill="#ff255d"/>
                        </svg>
                    </div>
                </div>
                <trend :data="item.chart" :gradient="['#EC644B', '#F5D76E']" 
                auto-draw smooth>
                </trend>
            </div>
        </v-bar>
    </div>
</template>

<script>
import VBar from 'v-bar'

export default {
    name:'CityStock',
    data () {
        return {
            list:[
                {
                    name:'تهـران',
                    total:'۲۴.۲۳۳.۴۲۲.۰۰۰',
                    percentage:'٪۱.۴۵',
                    growth:true,
                    chart:[0,11,8,16,12,6,12,12,3,16,9,5,4,10,5,8,0]
                },{
                    name:'فـارس',
                    total:'۱۲.۴۰۸.۸۷۰.۰۰۰',
                    percentage:'٪-۰.۴۵',
                    growth:false,
                    chart:[13,12,5,10,7,11,1,3,7,13,7,12,11,4,15,3]
                },{
                    name:'خراسان رضوی',
                    total:'۲۴.۲۳۳.۴۲۲.۰۰۰',
                    percentage:'٪۱.۴۵',
                    growth:true,
                    chart:[2,3,0,1,7,1,2,5,11,7,5,1,8,12,0,3]
                },{
                    name:'اصفهان',
                    total:'۱۲.۴۰۸.۸۷۰.۰۰۰',
                    percentage:'٪-۰.۴۵',
                    growth:false,
                    chart:[12,6,3,3,13,5,2,15,6,1,8,12,10,14,11,10]
                },{
                    name:'رشت',
                    total:'۲۴.۲۳۳.۴۲۲.۰۰۰',
                    percentage:'٪۱.۴۵',
                    growth:true,
                    chart:[10,10,12,1,2,5,11,12,9,4,3,11,16,9,10,12]
                },{
                    name:'خوزستان',
                    total:'۱۲.۴۰۸.۸۷۰.۰۰۰',
                    percentage:'٪-۰.۴۵',
                    growth:false,
                    chart:[6,3,1,13,16,6,7,0,11,11,13,2,2,9,9,7]
                },{
                    name:'تبریز',
                    total:'۲۴.۲۳۳.۴۲۲.۰۰۰',
                    percentage:'٪۱.۴۵',
                    growth:true,
                    chart:[13,10,14,14,10,13,8,7,9,15,0,8,1,10,4,12]
                },{
                    name:'یزد',
                    total:'۱۲.۴۰۸.۸۷۰.۰۰۰',
                    percentage:'٪-۰.۴۵',
                    growth:false,
                    chart:[3,13,11,11,6,7,8,15,3,2,15,4,2,13,10,11]
                }
            ]
        }
    },
    components:{
		VBar
	}
}
</script>

<style scoped>
.city_stock{
    position: relative;
    padding: 0 25px 0 0;
    background: #efefef;
    width: 100%;
    height: 128px;
}

.city_stock .total_stock{
    text-align: center;
    position: absolute;
    right: 25px;
    top: 50%;
    transform: translate(0,-50%);
}

.city_stock .total_stock .total_header{
    font-size: 1.1em;
    color: #383838;
    font-weight: bold;
    display: inline;
    font-family: 'IRANSANS NORMAL';
}

.city_stock .total_stock .dropdown_icon{
    position: absolute;
    top: 50%;
    left: -20px;
    transform: translate(0,-50%);
    height: 8px;
    width: 8px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 8px;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDI5Mi4zNTkgMjkyLjM1OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjkyLjM1OSAyOTIuMzU5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTIyMi45NzksNS40MjRDMjE5LjM2NCwxLjgwNywyMTUuMDgsMCwyMTAuMTMyLDBjLTQuOTQ5LDAtOS4yMzMsMS44MDctMTIuODQ4LDUuNDI0TDY5LjM3OCwxMzMuMzMxICAgYy0zLjYxNSwzLjYxNy01LjQyNCw3Ljg5OC01LjQyNCwxMi44NDdjMCw0Ljk0OSwxLjgwOSw5LjIzMyw1LjQyNCwxMi44NDdsMTI3LjkwNiwxMjcuOTA3YzMuNjE0LDMuNjE3LDcuODk4LDUuNDI4LDEyLjg0OCw1LjQyOCAgIGM0Ljk0OCwwLDkuMjMyLTEuODExLDEyLjg0Ny01LjQyOGMzLjYxNy0zLjYxNCw1LjQyNy03Ljg5OCw1LjQyNy0xMi44NDdWMTguMjcxQzIyOC40MDUsMTMuMzIyLDIyNi41OTYsOS4wNDIsMjIyLjk3OSw1LjQyNHoiIGZpbGw9IiNlMmE1MDAiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);
}

.city_stock .chart_container{
    white-space:nowrap;
    overflow-x:auto;
    direction: rtl;
    padding: 10px 25px;
    margin-right: 100px;
    width: calc(100% - 100px);
    height: 150px;
}

.city_stock .chart_container .charts{
    display: inline-block;
    border-radius: 10px;
    padding: 25px 10px 10px;
    margin-left: 10px;
    background: transparent;
    transition: background .3s ease, box-shadow .3s ease, padding .2s ease;
    position: relative;
}

.city_stock .chart_container .charts .more{
    width: 11px;
    position: absolute;
    left: 13px;
    top: -3px;
    cursor: pointer;
}

.city_stock .chart_container .charts:hover{
    background: #fff;
    transition: background .3s ease, box-shadow .3s ease, padding .2s ease;
    box-shadow: 0 2px 20px 2px rgba(154, 154, 154, 0.3);
    z-index: 99;
    padding: 25px 10px 30px;
}

.city_stock .chart_container .charts .city_name,
.city_stock .chart_container .charts .city_total,
.city_stock .chart_container .charts .city_percentage{
    font-size: 12px;
    color: #222;
    text-align: right;
    display: block;
    margin-bottom: 7px;
    color: #605e7c;
    font-weight: bold;
}

.city_stock .chart_container .charts .city_percentage{
    color: #ff255d;
    direction: ltr;
    display:inline;
}

.city_stock .chart_container .charts .city_percentage svg{
    height: 8px;
    width: auto;
}

.city_stock .chart_container .charts .growth_perc{
    color: #19e487;
}

.city_stock .chart_container .charts .trend_info{
    display: inline-block;
    vertical-align: top;
    margin-left: 10px;
}

.city_stock .chart_container .charts svg{
    stroke-width: 3px;
    width: 120px;
    margin-top: 10px;
}
</style>

