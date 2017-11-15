<template>
    <div :class="{'active': show}" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <svg version="1.1" class="close-modal" @click="Close" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 47.971 47.971" style="enable-background:new 0 0 47.971 47.971;" xml:space="preserve">
                    <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
                    c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
                    C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
                    s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z" />
                </svg>
                <h4 class="modal-title">درج پیمایش جدید</h4>
            </div>
            <div class="modal-body">
                <form @submit.prevent="SaveOrUdpate">
                    <div class="form-group">
                        <label for="user">نام پیمایش</label>
                        <input type="text" class="form-control" v-model="graph.name"/>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" @click="Close">انصراف</button>
                <button type="submit" class="btn btn-primary" @click="SaveOrUdpate">ثبت</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'newgraph',
    props: {
        show: {
            required: true,
            default: false
        }
    },
    data () {
        return {
            graph: {
                name: ''
            }
        }
    },
    methods: {
        Close: function() {
            this.$emit('closeuserinfomodal',true);
        },
        SaveOrUdpate: function() {
            this.$emit('saveorupdate',this.user)
        }
    }
}
</script>

<style>

</style>

