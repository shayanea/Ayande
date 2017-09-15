<template>
    <div class="database_list custome_modal" v-if="show">
        <div class="popup_header">
            <h2>انتخاب پایگاه داده</h2>
        </div>
        <form v-if="adddb" class="form-inline" @submit.prevent="Add">
            <div class="form-group">
                <label for="DashboardName">آدرس پایگاه داده</label>
                <input type="text" class="form-control" v-model="database.string" />
            </div>
            <div class="clearfix"></div>
            <div class="margin_top_20">
                <div class="form-group">
                    <label for="DashboardName">عنوان پایگاه داده</label>
                    <input type="text" class="form-control" v-model="database.title" />
                </div>
            </div>
             <div class="clearfix"></div>
            <div class="margin_top_20">
                <div class="form-group">
                    <label for="DashboardName">نام کاربری</label>
                    <input type="text" class="form-control" v-model="database.username" />
                </div>
            </div>
             <div class="clearfix"></div>
            <div class="margin_top_20">
                <div class="form-group">
                    <label for="DashboardName">رمز عبور</label>
                    <input type="password" class="form-control" v-model="database.password" />
                </div>
            </div>
            <div class="clearfix"></div>
            <button type="submit" class="btn btn-default save">ذخیره</button>
            <button type="button" class="btn btn-default close" @click="Cancel">بستن</button>
        </form>
        <form v-if="!adddb" class="form-inline" @submit.prevent="Connect">
            <div class="form-group">
                <label for="DashboardName">فهرست پایگاه داده</label>
                <select class="form-control" @change="GetDatabase(select)" v-model="select">
                    <option v-for="(item, index) of list" :key="index" :value="item.title">{{item.title}}</option>
                </select>
                <div class="add_new_db" @click="Create">+</div>
            </div>
            <div class="clearfix"></div>
            <button type="submit" class="btn btn-default save">مرحله بعد</button>
            <button type="button" class="btn btn-default close" @click="CloseForm">صرف نظر</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'database',
    props: {
        show: {
            required: true,
            default: false
        },
        list: {
            required: true,
            default: []
        }
    },
    data() {
        return {
            adddb: false,
            database:{
                string: '',
                title: '',
                username:'',
                password:''
            },
            select: null
        }
    },
    methods: {
        Create: function() {
            this.adddb = true;
        },
        Add: function() {
            this.list.unshift({
                id: this.list.length + 1,
                title: this.database.title
            });
            this.database.string = '';
            this.database.title = '';
            this.adddb = false;
        },
        Cancel: function() {
            this.adddb = false;
        },
        GetDatabase: function(item) {
            this.select = item;
        },
        Connect: function() {
            this.$emit('selectdatasbe',this.select);
        }, 
        CloseForm: function() {
            this.$emit('closepopup',true);
        }
    }
}
</script>

<style>
</style>
