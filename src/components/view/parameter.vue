<template>
    <div class="parameter_list custome_modal" v-if="show">
        <div class="popup_header">
            <h2>پارامتر ها و دریل دان</h2>
            <svg version="1.1" id="CloseModal" @click="Close" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 47.971 47.971" style="enable-background:new 0 0 47.971 47.971;" xml:space="preserve">
                <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
                c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
                C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
                s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z" />
            </svg>
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
        },
        Close: function() {
            this.$store.commit('ShowCreateView');
            this.$store.commit('ShowBgWrapper');
        }
    }
}
</script>

