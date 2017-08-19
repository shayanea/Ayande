<template>
    <div class="type_list custome_modal" v-if="show">
        <div class="popup_header">
            <h2>انتخاب مدل نما</h2>
        </div>
        <form @submit.prevent="Next">
            <div class="form-group">
                <label for="ViewType">مدل</label>
                <select class="form-control" id="ViewType" @change="GetDatabase(select)" v-model="select">
                    <option v-for="(item, index) of list" :key="index" :value="item.title">{{item.title}}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="ViewType">نمایش</label>
                <select class="form-control" id="ViewType" @change="GetDatabase(select)" v-model="select">
                    <option v-for="(item, index) of list" :key="index" :value="item.title">{{item.title}}</option>
                </select>
            </div>
            <button type="submit" class="btn btn-default save">مرحله بعد</button>
            <button type="button" class="btn btn-default close" @click="CloseForm">مرحله قبل</button>
        </form>
    </div>
</template>

<script>
export default {
    name:'type',
    props: {
        show: {
            required: true,
            default: false
        }
    },
    data () {
        return {
            list:[]
        }
    },
    methods: {
       CloseForm: function() {
           this.$emit('close',true);
       },
       Next: function() {

       } 
    }
}
</script>
