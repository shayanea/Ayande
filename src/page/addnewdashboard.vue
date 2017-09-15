<template>
    <div class="main">
        <FixedHeader></FixedHeader>
        
        <!-- list for chart -->
        <DashboardItems :items="Items" @addnewitemtodashboard="AddNewItemToDashboard"></DashboardItems>

        <NewItemModal :show="ShowNewItemModal" @savenewitem="AddNewItem" @closenewitemmodal="CloseNewItemModal"></NewItemModal>

        <!-- modal for save dashboard -->
        <SaveModal :show="ShowSaveDashboardModal" @savenewdashboard="SaveNewDashboard" @closesavenewdashboard="CloseSaveNewDashboard"></SaveModal>

        <!-- save new dashboard tooltip -->
        <div class="save-new-dashboard">
            <div class="save-dashboaard-btn" @click="SaveDashboard">
                ذخیره دشبورد
                <br>
                Ctrl + S
            </div>
            <div class="info">
                توجه !<br>
                دشبورد شما ذخیره نشده است.
            </div>
        </div>
    </div>
</template>

<script>
import FixedHeader from '../components/header/header.vue'
import SaveModal from '../components/newdashboard/savenewdashboard'
import DashboardItems from '../components/dashboard/items'
import NewItemModal from '../components/newdashboard/savenewitemfordashboard'

export default {
    name:'dashboard',
    data () {
        return {
            ShowSaveDashboardModal: false,
            ShowNewItemModal: false,
            Items: []
        }
    },
    components: {
        FixedHeader,
        SaveModal,
        DashboardItems,
        NewItemModal
    },
    created() {
        return window.addEventListener('keyup', this.CatchButton);
    },
    methods: {
        CatchButton: function(event) {
        },
        SaveDashboard: function() {
            this.ShowSaveDashboardModal = true;
        },
        CloseSaveNewDashboard: function() {
            this.ShowSaveDashboardModal = false;
        },
        SaveNewDashboard: function () {
            this.$router.push({ path: '/dashboardlist' });
        },
        AddNewItemToDashboard: function() {
            this.ShowNewItemModal = true;
        },
        AddNewItem: function() {
            
        },
        CloseNewItemModal: function() {
            this.ShowNewItemModal = false;
        }
    }
}
</script>

<style>
.boards-list{
    background: #f7f7f7;
    padding:30px;
    min-height: 100vh;
}

.save-new-dashboard{
    position: absolute;
    bottom: 15px;
    left: 15px;
}

.save-dashboaard-btn{
    display: inline-block;
    background: rgb(46, 204, 113);
    color: #fff;
    font-size: 15px;
    padding: 25px 40px;
    border-radius: 6px;
    text-align: center;
    margin-bottom: 25px;
    cursor: pointer;
}

.save-new-dashboard .info{
    display: inline-block;
    background: #F7ED98;
    color: #222;
    font-size: 15px;
    padding: 25px 40px;
    border-radius: 6px;
    text-align: right;
    direction: rtl;
    margin-bottom: 25px;
    margin-left: 15px;
    font-weight: bold;
}
</style>


