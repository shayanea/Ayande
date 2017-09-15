<template>
    <div class="model_list custome_modal">
        <div class="popup_header">
            <h2>انتخاب فیلد</h2>
        </div>
        <div class="tabs">
            <div class="tabs_header col-md-3">
                <li v-for="(item, index) of list" :key="index" :class="{'active': item.id == idselected}"
                @click="SelectItem(item.id)">
                    {{item.title}}
                </li>
            </div>
            <div class="tabs_content col-md-9">
                <div class="field_data" v-for="(item, index) of getfields" :key="index" :class="{'active': CheckActive(item)}"
                @click="Add(item)">
                    <span class="status"></span>
                    {{item}}
                </div>
            </div>
            <button type="submit" class="btn btn-default save" @click="Next">مرحله بعد</button>
            <button type="button" class="btn btn-default close" @click="Prev">مرحله قبل</button>
            <div class="selected_item_length btn"><span style="font-family:'Number'">{{selected.length}}</span> فیلد انتخاب شده <span style="font-family:'Number'">{{list.length}}</span> از دیتابیس</div>
        </div>
    </div>
</template>

<script>
export default {
    name:'model',
    props:{
        list: {
            required: true,
            default: []
        }
    },
    data () {
        return {
            selected:[],
            idselected: this.list[0].id,
            fields:[
                {
                    id: 0,
                    items:['شماره حساب','تاریخ افتتاح حساب','کد مشتری','کد محصول','کد کانال','مبلغ افتتاح حساب','مانده حساب',
                    'تاریخ اختتام حساب']
                },
                {
                    id: 1,
                    items:['کد مشتری','کد ملی','تاریخ ایجاد','کد کانال ایجاد کننده','نوع مشتری','شماره تلفن همراه','پست الکترونیکی',
                    'تحصیلات','شغل','حق برداشت','درصد برداشت ']
                },
                {
                    id: 2,
                    items:['کد ملی','تابعیت','نام','نام خانوادگی','جنسیت','نام پدر','تاریخ تولد','سریال شناسنامه','سری شناسنامه'
                    ,'استان محل تولد','شهرستان محل تولد','شماره حوزه ثبت','تاریخ فوت']
                },
                {
                    id: 3,
                    items:['کد مشتری','نوع آدرس','استان','شهرستان','خیابان اصلی','شرح آدرس','پلاک','طبقه','واحد','شماره تماس ثابت']
                },
                {
                    id: 4,
                    items:['کد محصول','کد نوع محصول','تاریخ ایجاد','تاریخ شروع اعتبار','تاریخ پایان اعتبار','مبلغ کل اعتبار محصول',
                    'تعداد کل سهام محصول','حداقل سهم','حداقل مبلغ']
                },
                {
                    id: 5,
                    items:['کد نوع محصول','عنوان نوع محصول','پرداخت سود','درصد سود','نوع سوددهی','سهام','مبلغ سهم به ریال',
                    'مبلغ سهم به دلار','اعتبار دارد؟','تاریخ ایجاد']
                },
                {
                    id: 6,
                    items:['کد کانال','عنوان کانال','کد نوع کانال','کد موقعیت جغرافیایی','کد کانال سطح بالاتر','رتبه کانال']
                },
                {
                    id:7,
                    items:['کد نوع کانال','عنوان نوع کانال','وضعیت کانال']
                }
            ]
        }
    },
    computed: {
        getfields: function() {
            let array = this.fields.filter(item => {
                return item.id == this.idselected
            });
            return array[0].items;
        }
    },
    methods: {
        Next: function() {
            this.$emit('getselectedfields',this.selected);
        },
        Prev: function() {
            this.$emit('showgrid',this.selected);
        },
        SelectItem: function(id) {
            this.idselected = id;
        },
        CheckActive: function(data) {
            if(_.find(this.selected, {title: data})) {
                return true;
            }
        },
        Add: function(data) {
            if(_.find(this.selected, {title: data})) {
                this.selected = _.reject(this.selected, {title: data});
            }else{
                this.selected.push({title:data});
            }
        }
    }
}
</script>

<style>
.tabs{
    clear: both;
    height: 300px;
    width: 800px;
    padding: 5px 20px;
}

.tabs_header{
    list-style: none;
    padding: 0;
    margin: 0;
    height: 100%;
    overflow: scroll;
}

.tabs_header li{
    padding: 10px;
    color: #222;
    font-size: 14px;
    text-align: right;
    border-radius: 0 8px 8px 0;
    cursor: pointer;
}

.tabs_header li.active{
    background: #f1f1f1;
}

.tabs_content{
    height: 100%;
    display: inline-block;
    background: #f1f1f1; 
    padding: 20px;
    position: relative;
    border-radius: 8px 0 0 8px;
    overflow: hidden;
}

.tabs_content .field_data{
    display: inline-block;
    padding: 5px 10px;
    color: #222;
    background: #fff;
    margin-left: 15px;
    margin-bottom: 15px;
    cursor: pointer;
    position: relative;
    padding-right: 25px;
    transition: background .3s ease, color .3 ease;
}

.field_data:hover{
    background: #999;
    color: #fff;
    transition: background .3s ease, color .3 ease;
}

.field_data .status{
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translate(0,-50%);
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDUxMCA1MTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMCA1MTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0iY2hlY2stY2lyY2xlLW91dGxpbmUtYmxhbmsiPgoJCTxwYXRoIGQ9Ik0yNTUsMEMxMTQuNzUsMCwwLDExNC43NSwwLDI1NXMxMTQuNzUsMjU1LDI1NSwyNTVzMjU1LTExNC43NSwyNTUtMjU1UzM5NS4yNSwwLDI1NSwweiBNMjU1LDQ1OSAgICBjLTExMi4yLDAtMjA0LTkxLjgtMjA0LTIwNFMxNDIuOCw1MSwyNTUsNTFzMjA0LDkxLjgsMjA0LDIwNFMzNjcuMiw0NTksMjU1LDQ1OXoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);
    height: 9px;
    width: 9px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 9px;
}

.field_data:hover .status{
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDUxMCA1MTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMCA1MTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0iY2hlY2stY2lyY2xlLW91dGxpbmUtYmxhbmsiPgoJCTxwYXRoIGQ9Ik0yNTUsMEMxMTQuNzUsMCwwLDExNC43NSwwLDI1NXMxMTQuNzUsMjU1LDI1NSwyNTVzMjU1LTExNC43NSwyNTUtMjU1UzM5NS4yNSwwLDI1NSwweiBNMjU1LDQ1OSAgICBjLTExMi4yLDAtMjA0LTkxLjgtMjA0LTIwNFMxNDIuOCw1MSwyNTUsNTFzMjA0LDkxLjgsMjA0LDIwNFMzNjcuMiw0NTksMjU1LDQ1OXoiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);
}

.field_data.active{
    background: #2ECC71;
    color: #fff;
}

.field_data.active .status{
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTcuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDE5MS42NjcgMTkxLjY2NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTkxLjY2NyAxOTEuNjY3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCI+CjxwYXRoIGQ9Ik05NS44MzMsMEM0Mi45OTEsMCwwLDQyLjk5LDAsOTUuODMzczQyLjk5MSw5NS44MzQsOTUuODMzLDk1LjgzNHM5NS44MzMtNDIuOTkxLDk1LjgzMy05NS44MzRTMTQ4LjY3NiwwLDk1LjgzMywweiAgIE0xNTAuODYyLDc5LjY0NmwtNjAuMjA3LDYwLjIwN2MtMi41NiwyLjU2LTUuOTYzLDMuOTY5LTkuNTgzLDMuOTY5Yy0zLjYyLDAtNy4wMjMtMS40MDktOS41ODMtMy45NjlsLTMwLjY4NS0zMC42ODUgIGMtMi41Ni0yLjU2LTMuOTctNS45NjMtMy45Ny05LjU4M2MwLTMuNjIxLDEuNDEtNy4wMjQsMy45Ny05LjU4NGMyLjU1OS0yLjU2LDUuOTYyLTMuOTcsOS41ODMtMy45N2MzLjYyLDAsNy4wMjQsMS40MSw5LjU4MywzLjk3MSAgbDIxLjEwMSwyMS4xbDUwLjYyMy01MC42MjNjMi41Ni0yLjU2LDUuOTYzLTMuOTY5LDkuNTgzLTMuOTY5YzMuNjIsMCw3LjAyMywxLjQwOSw5LjU4MywzLjk2OSAgQzE1Ni4xNDYsNjUuNzY1LDE1Ni4xNDYsNzQuMzYyLDE1MC44NjIsNzkuNjQ2eiIgZmlsbD0iI0ZGRkZGRiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);
}

.field_data.active:hover .status{
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTcuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDE5MS42NjcgMTkxLjY2NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTkxLjY2NyAxOTEuNjY3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCI+CjxwYXRoIGQ9Ik05NS44MzMsMEM0Mi45OTEsMCwwLDQyLjk5LDAsOTUuODMzczQyLjk5MSw5NS44MzQsOTUuODMzLDk1LjgzNHM5NS44MzMtNDIuOTkxLDk1LjgzMy05NS44MzRTMTQ4LjY3NiwwLDk1LjgzMywweiAgIE0xNTAuODYyLDc5LjY0NmwtNjAuMjA3LDYwLjIwN2MtMi41NiwyLjU2LTUuOTYzLDMuOTY5LTkuNTgzLDMuOTY5Yy0zLjYyLDAtNy4wMjMtMS40MDktOS41ODMtMy45NjlsLTMwLjY4NS0zMC42ODUgIGMtMi41Ni0yLjU2LTMuOTctNS45NjMtMy45Ny05LjU4M2MwLTMuNjIxLDEuNDEtNy4wMjQsMy45Ny05LjU4NGMyLjU1OS0yLjU2LDUuOTYyLTMuOTcsOS41ODMtMy45N2MzLjYyLDAsNy4wMjQsMS40MSw5LjU4MywzLjk3MSAgbDIxLjEwMSwyMS4xbDUwLjYyMy01MC42MjNjMi41Ni0yLjU2LDUuOTYzLTMuOTY5LDkuNTgzLTMuOTY5YzMuNjIsMCw3LjAyMywxLjQwOSw5LjU4MywzLjk2OSAgQzE1Ni4xNDYsNjUuNzY1LDE1Ni4xNDYsNzQuMzYyLDE1MC44NjIsNzkuNjQ2eiIgZmlsbD0iI0ZGRkZGRiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);
}

.selected_item_length{
    cursor: default;
}
</style>
