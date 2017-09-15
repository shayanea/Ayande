<template>
    <div class="merge custome_modal" v-if="show">
        <div class="popup_header">
            <h2>تجمیع جداول</h2>
        </div>
        <form @submit.prevent="Save">
            <div class="form-group">
                <label>انتخاب فیلد کلید جدول مبدا</label>
                <select class="form-control">
                    <option v-for="(item, index) of fields" :key="index" :value="item.title">{{item.title}}</option>
                </select>
            </div>
            <div class="form-group">
                <label>انتخاب جدول مقصد</label>
                <select class="form-control">
                    <option v-for="(item, index) of database" :key="index" :value="item.title">{{item.title}}</option>
                </select>
            </div>
            <div class="form-group">
                <label>انتخاب فیلد کلید جدول مقصد</label>
                <select class="form-control">
                    <option v-for="(item, index) of fields" :key="index" :value="item.title">{{item.title}}</option>
                </select>
            </div>
            <div class="form-group">
                <label>نوع تجمیع</label>
                <select class="form-control">
                    <option>Inner Join</option>
                    <option>Left Outer Join</option>
                    <option>Right Outer Join</option>
                    <option>Merge</option>
                </select>
            </div>
            <button type="submit" class="btn btn-default save" @click="Save">ذخیره</button>
            <button type="button" class="btn btn-default close" @click="Close">انصراف</button>
        </form>
    </div>
</template>

<script>
export default {
    name:'merge',
    props:{
        show:{
            required: true,
            default: false
        }
    },
    data () {
        return {
            database:[
                {
                    id: 0,
                    title: 'اطلاعات حساب'
                },
                {
                    id: 1,
                    title: 'اطلاعات مشتری'
                },
                {
                    id: 2,
                    title: 'هویتی شخص'
                },
                {
                    id: 3,
                    title: 'اطلاعات تماس مشتری'
                },
                {
                    id: 4,
                    title: 'اطلاعات محصول'
                },
                {
                    id: 5,
                    title: 'نوع محصول'
                },
                {
                    id: 6,
                    title: 'اطلاعات کانال'
                },
                {
                    id: 7,
                    title: 'نوع کانال'
                } 
            ],
            fields: [
                {
                    id: 0,
                    title: 'ردیف'
                },
                {
                    id: 1,
                    title: 'شعبه های برتر'
                },
                {
                    id: 2,
                    title: 'کد شعبه'
                },
                {
                    id: 3,
                    title: 'مانده'
                },
                {
                    id: 4,
                    title: 'تغییرات مانده'
                },
                {
                    id: 5,
                    title: 'تعداد'
                },
                {
                    id: 6,
                    title: 'تغییرات تعداد'
                },
                {
                    id: 7,
                    title: 'میانگین'
                }
            ]
        }
    },
    methods: {
        Save: function() {
            this.$emit('savemerge');
        },
        Close: function() {
            this.$emit('closemerge');
        }
    }
}
</script>

<style>
.merge .form-control{
    min-width: auto!important;
}
</style>
