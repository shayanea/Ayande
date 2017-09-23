<template>
    <div class="type_list custome_modal" v-if="show">
        <div class="popup_header">
            <h2>انتخاب مدل نما</h2>
            <svg version="1.1" id="CloseModal" @click="Close" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 47.971 47.971" style="enable-background:new 0 0 47.971 47.971;" xml:space="preserve">
                <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
                c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
                C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
                s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z" />
            </svg>
        </div>
        <form @submit.prevent="Next">
            <div class="form-group">
                <label for="ViewModel">مدل داده</label>
                <select class="form-control" id="ViewModel" v-model="selectmodel">
                    <option v-for="(item, index) of model" :key="index" :value="item.id">{{item.title}}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="ViewType">نحوه نمایش</label>
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
        },
        Close: function() {
            this.$store.commit('ShowCreateView');
            this.$store.commit('ShowBgWrapper');
        }
    }
}
</script>
