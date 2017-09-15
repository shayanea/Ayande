<template>
    <div class="add_column custome_modal" v-if="show">
        <div class="popup_header">
            <h2>افزودن ستون جدید</h2>
        </div>
        <form @submit.prevent="Save">
            <div class="form-group">
                <label>فرمول محاسبه ی مقدار ستون جدید را تایپ کنید</label>
                <input type="text" class="form-control" v-model="formula">
            </div>
            <div class="clearfix"></div>
            <button type="submit" class="btn btn-default save" @click="Save">ثبت</button>
            <button type="button" class="btn btn-default close" @click="Close">انصراف</button>
        </form>
    </div>
</template>

<script>
export default {
    name:'addcolumn',
    props:{
        show:{
            required: true,
            default: false
        }
    },
    data () {
        return {
            formula:'NewField = ([FieldNumberOne] * [FieldNumber2])'
        }
    },
    methods: {
        Save: function() {
            this.$emit('savec');
        },
        Close: function() {
            this.$emit('closec');
        }
    }
}
</script>

<style>
.add_column .form-control{
    direction: ltr;
    font-size: 13px;
    min-width: 450px;
}
</style>

