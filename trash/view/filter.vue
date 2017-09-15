<template>
    <div class="type_list custome_modal" v-if="show">
        <div class="popup_header">
            <h2>تنظیمات فیلد</h2>
            <svg version="1.1" id="CloseModal" @click="Close" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 47.971 47.971" style="enable-background:new 0 0 47.971 47.971;" xml:space="preserve">
                <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
                c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
                C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
                s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z" />
            </svg>
        </div>
        <form class="form-inline" @submit.prevent="Next">
            <div class="form-group">
                <label for="FieldName">فیلتر بر روی فیلدها</label>
                <select class="form-control" v-model="selectedfeilds">
                    <option v-for="(item, index) of getfields" :key="index" :value="item">{{item}}</option>
                </select>
                <select class="form-control" v-model="selectedaction">
                    <option v-for="(item, index) of actions" :key="index" :value="item.title">{{item.title}}</option>
                </select>
                <div class="add_new_db add_new_filter" @click="Create">+</div>
            </div>
            <div class="clearfix"></div>
            <div class="filter_list">
                <div class="grid_data" v-for="(item, index) of list" :key="index">
                    <span class="remove_selected" @click="RemoveSelected(item)"></span>
                    {{item.title}}
                </div>
            </div>
            <div class="clearfix"></div>
            <button type="submit" class="btn btn-default save">مرحله بعد</button>
            <button type="button" class="btn btn-default close" @click="Prev">مرحله قبل</button>
        </form>
    </div>
</template>

<script>
export default {
    name:'filter',
    props:{
        show: {
            required: true,
            default: false
        },
        active: {
            required: true,
            default: null
        }
    },
    data () {
        return {
            selectedfeilds: null,
            selectedaction: null,
            funcs:[{
                id:0,
                title:'مبلغ'
            },{
                id:1,
                title:'تاریخ'
            },{
                id:2,
                title:'سن'
            },{
                id:3,
                title:'جنسیت'
            }],
            actions:[{
                id:0,
                title:'کوچکتر'
            },{
                id:1,
                title:'بزرگتر'
            },{
                id:2,
                title:'مساوی'
            },{
                id:3,
                title:'کوچکتر مساوی'
            },{
                id:4,
                title:'بزرگتر مساوی'
            },{
                id:5,
                title:'ما بین'
            }],
            fields: [
                {
                    id: 0,
                    items: ['شماره حساب', 'تاریخ افتتاح حساب', 'کد مشتری', 'کد محصول', 'کد کانال', 'مبلغ افتتاح حساب', 'مانده حساب',
                        'تاریخ اختتام حساب']
                },
                {
                    id: 1,
                    items: ['کد مشتری', 'کد ملی', 'تاریخ ایجاد', 'کد کانال ایجاد کننده', 'نوع مشتری', 'شماره تلفن همراه', 'پست الکترونیکی',
                        'تحصیلات', 'شغل', 'حق برداشت', 'درصد برداشت ']
                },
                {
                    id: 2,
                    items: ['کد ملی', 'تابعیت', 'نام', 'نام خانوادگی', 'جنسیت', 'نام پدر', 'تاریخ تولد', 'سریال شناسنامه', 'سری شناسنامه'
                        , 'استان محل تولد', 'شهرستان محل تولد', 'شماره حوزه ثبت', 'تاریخ فوت']
                },
                {
                    id: 3,
                    items: ['کد مشتری', 'نوع آدرس', 'استان', 'شهرستان', 'خیابان اصلی', 'شرح آدرس', 'پلاک', 'طبقه', 'واحد', 'شماره تماس ثابت']
                },
                {
                    id: 4,
                    items: ['کد محصول', 'کد نوع محصول', 'تاریخ ایجاد', 'تاریخ شروع اعتبار', 'تاریخ پایان اعتبار', 'مبلغ کل اعتبار محصول',
                        'تعداد کل سهام محصول', 'حداقل سهم', 'حداقل مبلغ']
                },
                {
                    id: 5,
                    items: ['کد نوع محصول', 'عنوان نوع محصول', 'پرداخت سود', 'درصد سود', 'نوع سوددهی', 'سهام', 'مبلغ سهم به ریال',
                        'مبلغ سهم به دلار', 'اعتبار دارد؟', 'تاریخ ایجاد']
                },
                {
                    id: 6,
                    items: ['کد کانال', 'عنوان کانال', 'کد نوع کانال', 'کد موقعیت جغرافیایی', 'کد کانال سطح بالاتر', 'رتبه کانال']
                },
                {
                    id: 7,
                    items: ['کد نوع کانال', 'عنوان نوع کانال', 'وضعیت کانال']
                }],
            list:[]
        }
    },
    computed: {
        getfields: function() {
            let array = this.fields.filter(item => {
                return item.id == this.active
            });
            return array[0].items;
        }
    },
    methods: {
        Prev: function() {
            this.$emit('showtype',true);
        },
        Next: function() {
            this.$emit('showparameter',true);
        },
        Create: function() {
            if(this.selectedaction !== null || this.selectedfeilds !== null){
                this.list.push({title:this.selectedfeilds,type:this.selectedaction,id: this.list.length + 1});
            }
        },
        RemoveSelected: function(item) {
            this.list = _.reject(this.list, {'id': item.id});
        },
        Close: function() {
            this.$store.commit('ShowCreateView');
            this.$store.commit('ShowBgWrapper');
        }
    }
}
</script>

<style>
.type_list .form-control{
    min-width: 180px!important;
    margin-left: 15px;
}

.filter_list{
    max-width: 400px;
}

.filter_list .grid_data{
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
</style>
