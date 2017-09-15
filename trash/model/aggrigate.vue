<template>
    <div class="aggrigate custome_modal" v-if="show">
        <div class="popup_header">
            <h2>افزودن فیلد نتیجه ی جدید</h2>
        </div>
        <form @submit.prevent="Save">
            <div class="form-group">
                <label>فرمول محاسبه ی مقدار نتیجه ی جدید را تایپ کنید</label>
                <input type="text" class="form-control" v-model="formula"/>
            </div>
            <div class="clearfix"></div>
            <button type="submit" class="btn btn-default save" @click="Save">ثبت</button>
            <button type="button" class="btn btn-default close" @click="Close">انصراف</button>
        </form>
    </div>
</template>

<script>
export default {
    name:'aggrigate',
    props:{
        show:{
            required: true,
            default: false
        }
    },
    data () {
        return {
            formula: 'NewValue = SUM([FieldNumberOne]*[FieldNumber2])',
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
            this.$emit('saveag');
        },
        Close: function() {
            this.$emit('closeag');
        }
    }
}
</script>

<style>
.aggrigate .form-control{
    direction: ltr;
    font-size: 13px;
    min-width: 450px;
}
</style>

