<template>
    <div :class="{'active': show}" class="modal" style="z-index:99999">
        <div class="modal-content">
            <div class="modal-header">
                <svg version="1.1" class="close-modal" @click="Close" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 47.971 47.971" style="enable-background:new 0 0 47.971 47.971;" xml:space="preserve">
                    <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
                    c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
                    C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
                    s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z" />
                </svg>
                <h4 class="modal-title">ذخیره مدل جدید</h4>
            </div>
            <div class="modal-body">
                <form @submit.prevent="Save">
                    <div class="form-group">
                        <label>نام مدل</label>
                        <input class="form-control" type="text"/>
                    </div>
                    <div class="form-group">
                        <label for="users">لیست کاربران مجاز برای مشاهده</label>
                        <select class="form-control" id="user" v-model="User" @change="AddUser">
                            <option v-for="(item, index) of this.$store.state.users" :key="index" :value="item">{{item.username}}</option>
                        </select>
                        <div class="selected-list" v-if="SeletedUsers.length > 0">
                            <div class="selected-item" v-for="(item, index) of SeletedUsers" :key="index">
                                {{item.username}}
                                <span class="remove-item" @click="RemoveUser(item)"></span>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="roles">لیست نقش های مجاز برای مشاهده</label>
                        <select class="form-control" id="roles" v-model="Role" @change="AddRole">
                            <option v-for="(item, index) of this.$store.state.roles" :key="index" :value="item">{{item.name}}</option>
                        </select>
                        <div class="selected-list" v-if="SelectedRoles.length > 0">
                            <div class="selected-item" v-for="(item, index) of SelectedRoles" :key="index">
                                {{item.name}}
                                <span class="remove-item" @click="RemoveRole(item)"></span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" @click="Close">انصراف</button>
                <button type="button" class="btn btn-primary" @click="Save">ذخیره مدل</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'savenewmodel',
    props: {
        show: {
            required: true,
            default: false
        }
    },
    data() {
        return {
            User:null,
            Role:null,
            SeletedUsers:[],
            SelectedRoles:[]
        }
    },
    methods: {
        Close: function() {
            this.$emit('closenewmodel',true);
        },
        AddUser: function() {
            this.SeletedUsers.push({username:this.User.username,id: this.User.id})
        },
        RemoveUser: function(item) {
            this.SeletedUsers = _.reject(this.SeletedUsers, {'id': item.id});
        },
        AddRole: function() {
            this.SelectedRoles.push({name:this.Role.name,id: this.Role.id})
        },
        RemoveRole: function(item) {
            this.SelectedRoles = _.reject(this.SelectedRoles, {'id': item.id});
        },
        Save: function() {
            this.$emit('savenewmodel',true);
        }
    }
}
</script>

<style>
</style>

