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
                <h4 class="modal-title">مدیریت دسترسی کاربران برای مشاهدهی دشبورد/نما</h4>
            </div>
            <div class="modal-body">
                <form @submit.prevent="SaveOrUdpate">
                    <div class="form-group">
                        <label for="user">انتخاب کاربر</label>
                        <AutoComplete :items="this.$store.state.users" :propertyname="'username'" @selected="AddAccess"></AutoComplete>
                        <div class="selected-list" v-if="Selected.length > 0">
                            <div class="selected-item" v-for="(item, index) of Selected" :key="index">
                                {{item.username}}
                                <span class="remove-item" @click="RemoveAccess(item)"></span>
                            </div>
                        </div>
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
import AutoComplete from '../global/autocomplete'

export default {
    name:'newreport',
    props: {
        show: {
            required: true,
            default: false
        }
    },
    watch: {
        show: function(value){
            if(value){
                this.Selected = [];
            }
        }
    },
    data () {
        return {
            Selected: []
        }
    },
    components: {
        AutoComplete
    },
    methods: {
        AddAccess: function(item) {
            if(typeof _.find(this.Selected, function(data) { return data.id == item.id }) == "undefined"){
                this.Selected.push({username:item.username,id: item.id})   
            }
        },
        RemoveAccess: function(item) {
            this.Selected = _.reject(this.Selected, {'id': item.id});
        },
        Close: function() {
            this.$emit('closeuseraccess',true);
        },
        SaveOrUdpate: function() {
            this.$emit('saveorupdate',this.Selected)
        }
    }
}
</script>

<style>
.modal .checkbox{
    direction: rtl;
}
.modal .checkbox label{
    float: none;
}
</style>
