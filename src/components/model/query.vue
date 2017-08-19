<template>
    <div class="query_list custome_modal" v-if="show">
        <div class="popup_header">
            <h2>شروط پایگاه داده</h2>
        </div>
        <form @submit.prevent="Add">
            <textarea class="form-control" rows="5" v-model="QueryText"></textarea>
            <button type="submit" class="btn btn-default save" @click="Next">مرحله بعد</button>
            <button type="button" class="btn btn-default close" @click="Prev">مرحله قبل</button>
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
        Next: function() {
            this.$emit('getquery',this.QueryText);
        },
        Prev: function() {
            this.$emit('showmodel',true);
        }
    }
}
</script>

<style>

</style>
