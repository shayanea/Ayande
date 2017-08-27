<template>
    <div class="type_list custome_modal" v-if="show">
        <div class="popup_header">
            <h2>انتخاب مدل نما</h2>
        </div>
        <form @submit.prevent="Next">
            <div class="form-group">
                <label for="ViewModel">مدل</label>
                <select class="form-control" id="ViewModel" v-model="selectmodel">
                    <option v-for="(item, index) of model" :key="index" :value="item.id">{{item.title}}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="ViewType">نمایش</label>
                <select class="form-control" id="ViewType" v-model="selecttype">
                    <option v-for="(item, index) of type" :key="index" :value="item.type">{{item.title}}</option>
                </select>
            </div>
            <button type="submit" class="btn btn-default save">مرحله بعد</button>
            <button type="button" class="btn btn-default close" @click="CloseForm">صرف نظر</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'type',
    props: {
        show: {
            required: true,
            default: false
        },
        model: {
            required: true,
            default: null
        }
    },
    data() {
        return {
            selectmodel: null,
            selecttype: null,
            type: [{
                id: 0,
                title: 'خطی',
                type: 1
            }, {
                id: 1,
                title: 'دایره ای',
                type: 2
            }]
        }
    },
    methods: {
        CloseForm: function() {
            this.$emit('close', true);
        },
        Next: function() {
            this.$emit('showfilter', { model: this.selectmodel, type: this.selecttype });
        }
    }
}
</script>
