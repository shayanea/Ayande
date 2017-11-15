<template>
    <div class="main">
        <div class="container-fluid boards_list">
            <div class="board" v-for="(item, index) of List" :key="index" v-if="List.length > 0">
                <LineChart v-if="item.type == 'spline' || item.type == 'line'" :list="item.data" :title="item.title" :type="item.type" :labeltext="item.labeltext" :labelstatus="item.labelstatus" :marker="item.marker" :timeline="item.time"
                :suffix="item.suffix"></LineChart>
                <PieChart v-if="item.type == 'pie'" :list="item.data" :title="item.title" :type="item.type" :labeltext="item.labeltext" :labelstatus="item.labelstatus" :marker="item.marker" :timeline="item.time"
                :suffix="item.suffix"></PieChart>
                <BarChart v-if="item.type == 'bar'" :list="item.data" :title="item.title" :type="item.type" :labeltext="item.labeltext" :labelstatus="item.labelstatus" :xAxis="item.xAxis" :stacking="item.stacking"
                :suffix="item.suffix"></BarChart>
                <GridTable v-if="item.type == 'table'" :list="item.rows" :title="item.title" :header="item.header"></GridTable>
            </div> 
        </div>
    </div>
</template>

<script>
import LineChart from "../components/chart/linechart";
import PieChart from "../components/chart/piechart";
import GridTable from "../components/chart/table";
import BarChart from '../components/chart/barchart'
import DashboardData from '../../static/dashboard.json'

export default {
    name: "board",
    data() {
        return {
            id: null,
            parentId: null,
            List: []
        }
    },
    components: {
        LineChart,
        PieChart,
        GridTable,
        BarChart
    },
    created () {
        return this.GetChartData();
    },
    methods: {
        GetChartData: function () {
            let result = _.find(DashboardData, {parentid:parseInt(this.$route.params.parentid), id: parseInt(this.$route.params.id)});
            console.log(result)
            this.List.push(result);
        }
    }
};
</script>

<style>
.boards_list {
  background: #f7f7f7;
  padding: 30px;
  min-height: 100vh;
}
</style>


