<template>
    <div class="main">
        
        <!-- list for chart -->
        <DashboardItems :items="Items" @addnewitemtodashboard="AddNewItemToDashboard"></DashboardItems>

        <NewItemModal :show="ShowNewItemModal" @savenewitem="AddNewItem" @closenewitemmodal="CloseNewItemModal"></NewItemModal>

        <SaveModal :show="ShowSaveDashboardModal" @savenewdashboard="SaveNewDashboard" @closesavenewdashboard="CloseSaveNewDashboard"></SaveModal>

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
            console.log('add');
            this.ShowNewItemModal = false;
            this.Items.push({ title: 'روند کل مانده سپرده آینده ساز', suffix: ' ریال', marker: false, type: 'spline', labeltext: 'مانده', labelstatus: true, data: {series:[75156297, 75281285, 75407194, 75575977, 75620583, 75770899, 75861813, 76048850, 76265894, 76407894, 76518405, 76659862, 76835274, 77156891, 77370932, 77623502, 77777966]},time: ['96/04/14', '96/04/15', '96/04/17', '96/04/18', '96/04/19', '96/04/20', '96/04/21','96/04/22', '96/04/23', '96/04/24', '96/04/25', '96/04/25', '96/04/26', '96/04/27', '96/04/28','96/04/29', '96/04/30', '96/04/31', '96/05/01', '96/05/02', '96/05/03', '96/05/04', '96/05/05']});
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


