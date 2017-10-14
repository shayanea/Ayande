<template>
    <div class="query_list custome_modal" v-if="show">
        <div class="popup_header">
            <h2>شروط پایگاه داده</h2>
        </div>
        <form @submit.prevent="Save">
            <textarea class="form-control" rows="5" v-model="QueryText" style="direction:ltr"></textarea>
            <button type="submit" class="btn btn-default save" @click="Save">ذخیره</button>
            <button type="button" class="btn btn-default close" @click="Close">انصراف</button>
        </form>
    </div>
</template>

<script>
export default {
    name:'querylist',
    props:{
        show:{
            required: true,
            default: false
        }
    },
    data () {
        return {
            QueryText:'SELECT column1, column2, ... FROM table_name WHERE condition'
        }
    },
    methods: {
        Save: function() {
            this.$emit('saveq');
        },
        Close: function() {
            this.$emit('closeq');
        }
    }
}
</script>

<style>

</style>
