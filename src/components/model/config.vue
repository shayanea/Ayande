<template>
    <div class="title_list custome_modal" v-if="show">
        <div class="popup_header">
            <h2>انتخاب پایگاه داده</h2>
        </div>
        <form class="form-inline" @submit.prevent="Save">
            <div class="form-group">
                <label for="DashboardName">عنوان</label>
                <input type="text" class="form-control" v-model="title" />
            </div>
            <div class="clearfix"></div>
            <button type="submit" class="btn btn-default save">ذخیره</button>
            <button type="button" class="btn btn-default close" @click="Prev">مرحله قبل</button>
        </form>
    </div>
</template>

<script>
export default {
    name:'config',
    props: {
        show: {
            required: true,
            default: false
        }
    },
    data () {
        return {
            title: ''
        }
    },
    methods: {
        Save: function() {
            this.$emit('save',this.title);
        },
        Prev: function() {
            this.$emit('showquery',true);
        }
    }
}
</script>

<style>

</style>

