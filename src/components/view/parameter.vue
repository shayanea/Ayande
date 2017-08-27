<template>
    <div class="parameter_list custome_modal" v-if="show">
        <div class="popup_header">
            <h2>پارامتر ها و دریل دان</h2>
        </div>
        <form @submit.prevent="Next">
            <div class="form-group">
                <label for="ParameterName">پارامتر ارسالی</label>
                <select class="form-control" v-model="selectedparameter">
                    <option v-for="(item, index) of list" :key="index" :value="item.title">{{item.title}}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="ParameterName">به نمای</label>
                <select class="form-control" v-model="selectedview">
                    <option v-for="(item, index) of view" :key="index" :value="item.title">{{item.title}}</option>
                </select>
            </div>
            <div class="clearfix"></div>
            <button type="submit" class="btn btn-default save">مرحله بعد</button>
            <button type="button" class="btn btn-default close" @click="Prev">مرحله قبل</button>
        </form>
    </div>
</template>

<script>
export default {
    name:'parameter',
    props: {
        show: {
            required: true,
            default: false
        }
    },
    data () {
        return {
            selectedparameter:null,
            selectedview:null,
            list:[{
                id:0,
                title:'مقدار مبلغ'
            },{
                id:0,
                title:'مقدار تاریخ'
            }],
            view:[{
                id:0,
                title:'نمای شماره ۱'
            },{
                id:0,
                title:'نمای شماره ۲'
            },
            {
                id:0,
                title:'نمای شماره ۳'
            },
            {
                id:0,
                title:'نمای شماره ۴'
            }]
        }
    },
    methods: {
        Prev: function() {
            this.$emit('hideparameter',true);
        },
        Next: function() {
            this.$emit('showconfig',true);
        }
    }
}
</script>

