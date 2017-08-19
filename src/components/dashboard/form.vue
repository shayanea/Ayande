<template>
    <form class="dashboard_from form-inline" v-if="show" @submit.prevent="Save">
        <div class="form-group">
            <label for="DashboardName">نام دشبورد جدید</label>
            <input type="text" class="form-control" id="DashboardName" v-model="title" 
            autocomplete="false" autofocus spellcheck="false"/>
        </div>
        <div class="clearfix"></div>
        <button type="submit" class="btn btn-default save">درج</button>
        <button type="button" class="btn btn-default close" @click="CloseForm">بستن</button>
    </form>
</template>

<script>
export default {
    name:'dashboardform',
    props:{
        show:{
            required: true,
            default: true
        }
    },
    data () {
        return {
            title:'',
            status: this.show
        }
    },
    methods: {
        CloseForm: function() {
            this.status = false;
            this.$emit('add',null);
        },
        Save: function() {
            this.status = false;
            this.$emit('add',{title: this.title});
        }
    }
}
</script>

<style scoped>
.dashboard_from{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    padding: 40px;
    direction: rtl;
    border-radius: 6px;
}

.dashboard_from .form-group label{
    margin-left: 20px;
}

.dashboard_from .form-control{
    font-size: 2em;
    color: #222;
    border-radius: 6px;
    outline: none;
    box-shadow: none;
    border:1px solid #e1e1e1;
    background: #fbfbfb;
    font-size: 14px;
    min-width: 350px;
}

.dashboard_from .btn{
    margin-top: 20px;
    float: left;
    outline: none;
}

.dashboard_from .save{
    background: #2ECC71;
    padding: 6px 40px;
    border:0;
    margin-right: 20px;
    color: #fff;
    transition: opacity .3s ease;
}

.dashboard_from .close{
    background: #eee;
    padding: 6px 40px;
    border:0;
    margin-right: 20px;
    color: #999;
    transition: opacity .3s ease;
}

.dashboard_from .btn:hover{
    opacity: .8;
    transition: opacity .3s ease;
}
</style>

