<template>
    <div class="container-fluid boards_list">
        <div class="board" v-for="(item, index) of List" :key="index">
            <LineChart v-if="item.type == 'spline' || item.type == 'line'" :list="item.data" :title="item.title" :type="item.type" :labeltext="item.labeltext" :labelstatus="item.labelstatus" :marker="item.marker" :timeline="item.time"
            :suffix="item.suffix"></LineChart>
            <PieChart v-if="item.type == 'pie'" :list="item.data" :title="item.title" :type="item.type" :labeltext="item.labeltext" :labelstatus="item.labelstatus" :marker="item.marker" :timeline="item.time"
            :suffix="item.suffix"></PieChart>
            <GridTable v-if="item.type == 'table'" :list="item.data" :title="item.title"></GridTable>
        </div> 
    </div>
</template>

<script>
import LineChart from '../chart/linechart'
import PieChart from '../chart/piechart'
import GridTable from '../table/table'

export default {
    name: 'board',
    data() {
        return {
            List: [{ title: 'عملکرد شعب', type: 'table', header:[{title:''}]},
            { title: 'روند کل مانده سپرده آینده ساز', suffix: ' ریال', marker: false, type: 'spline', labeltext: 'مانده', labelstatus: true, data: {series:[75156297, 75281285, 75407194, 75575977, 75620583, 75770899, 75861813, 76048850, 76265894, 76407894, 76518405, 76659862, 76835274, 77156891, 77370932, 77623502, 77777966]},time: ['96/04/14', '96/04/15', '96/04/17', '96/04/18', '96/04/19', '96/04/20', '96/04/21','96/04/22', '96/04/23', '96/04/24', '96/04/25', '96/04/25', '96/04/26', '96/04/27', '96/04/28','96/04/29', '96/04/30', '96/04/31', '96/05/01', '96/05/02', '96/05/03', '96/05/04', '96/05/05']},
            { title: 'روند تعداد سپرده آینده ساز', suffix: ' نفر',marker: false, type: 'spline', labeltext: 'تعداد', labelstatus: true, data: {series:[197.355, 197.312, 197.741, 198.168, 198.603, 198.497, 198.572, 198.137, 198.544, 198.611, 198.600, 198.583, 198.202, 198.757, 199.026, 199.248, 199.467, 199.643, 199.410]},time: ['96/04/14', '96/04/15', '96/04/17', '96/04/18', '96/04/19', '96/04/20', '96/04/21','96/04/22', '96/04/23', '96/04/24', '96/04/25', '96/04/25', '96/04/26', '96/04/27', '96/04/28','96/04/29', '96/04/30', '96/04/31', '96/05/01', '96/05/02', '96/05/03', '96/05/04', '96/05/05']},
            { title: 'نرخ رشد مانده و تعداد سپرده آینده ساز', suffix: ' درصد', marker: true, type: 'line', labeltext: 'نرخ', labelstatus: false, data: {series:[0.10, -0.02, 0.22, 0.22, 0.22, -0.05, 0.04, -0.22, 0.21, 0.03, -0.01, -0.01, -0.19, 0.28, 0.14, 0.11, 0.11, 0.09, -0.12],series1:[0.17,0.19,0.17,0.17,0.22,0.06,0.20,0.12,0.25,0.29,0.19,0.14,0.18,0.23,0.42,0.28,0.33,0.20,0.26]},time: ['96/04/14', '96/04/15', '96/04/17', '96/04/18', '96/04/19', '96/04/20', '96/04/21','96/04/22', '96/04/23', '96/04/24', '96/04/25', '96/04/25', '96/04/26', '96/04/27', '96/04/28','96/04/29', '96/04/30', '96/04/31', '96/05/01', '96/05/02', '96/05/03', '96/05/04', '96/05/05']},
            { title: 'مبلغ سپرده در دسته بندی های مبلغی', suffix: ' درصد', marker: true, type: 'pie', labeltext: 'تعداد', labelstatus: false, data: {series:[{name:'0-50',y:0},{name:'51-100',y:1},{name:'101-200',y:1.5},{name:'201-300',y:2},{name:'301-400',y:5},{name:'401-500',y:10},{name:'501-1000',y:5},{name:'1001-2000',y:5},{name:'2001-3000',y:9},{name:'3001-5000',y:15},{name:'5001-10000',y:12},{name:'10000<',y:35}]},time: ['96/04/14', '96/04/15', '96/04/17', '96/04/18', '96/04/19', '96/04/20', '96/04/21','96/04/22', '96/04/23', '96/04/24', '96/04/25', '96/04/25', '96/04/26', '96/04/27', '96/04/28','96/04/29', '96/04/30', '96/04/31', '96/05/01', '96/05/02', '96/05/03', '96/05/04', '96/05/05']},
            { title: 'تعداد مشتری قدیمی', suffix: ' نفر', marker: true, type: 'line', labeltext: 'تعداد', labelstatus: false, data: {series:[380, 350, 369, 340, 346, 302, 293, 291, 395, 407, 406, 234, 353, 417, 616, 551, 534, 456, 446]},time: ['96/04/14', '96/04/15', '96/04/17', '96/04/18', '96/04/19', '96/04/20', '96/04/21','96/04/22', '96/04/23', '96/04/24', '96/04/25', '96/04/25', '96/04/26', '96/04/27', '96/04/28','96/04/29', '96/04/30', '96/04/31', '96/05/01', '96/05/02', '96/05/03', '96/05/04', '96/05/05']},
            { title: 'مانده مشتری قدیمی', suffix: ' نفر', marker: true, type: 'line', labeltext: 'مانده', labelstatus: false, data: {series:[241.158, 182.053, 230.441, 191.627, 258.139, 175.340, 160.248, 153.058, 317.518, 264.513, 226.509, 187.735, 200.141, 255.101, 409.587, 295.752, 322.942, 239.415, 231.404]},time: ['96/04/14', '96/04/15', '96/04/17', '96/04/18', '96/04/19', '96/04/20', '96/04/21','96/04/22', '96/04/23', '96/04/24', '96/04/25', '96/04/25', '96/04/26', '96/04/27', '96/04/28','96/04/29', '96/04/30', '96/04/31', '96/05/01', '96/05/02', '96/05/03', '96/05/04', '96/05/05']},
            { title: 'مانده مشتری جدید', suffix: ' نفر', marker: true, type: 'line', labeltext: 'مانده', labelstatus: false, data: {series:[41.615, 42.859, 47.164, 40.635, 34.825, 41.495, 58.886, 34.579, 37.663, 47.408, 57.742, 48.921, 38.367, 45.294, 64.378, 42.997, 44.842, 55.931, 39.832]},time: ['96/04/14', '96/04/15', '96/04/17', '96/04/18', '96/04/19', '96/04/20', '96/04/21','96/04/22', '96/04/23', '96/04/24', '96/04/25', '96/04/25', '96/04/26', '96/04/27', '96/04/28','96/04/29', '96/04/30', '96/04/31', '96/05/01', '96/05/02', '96/05/03', '96/05/04', '96/05/05']},
            { title: 'تعداد مشتری جدید', suffix: ' نفر', marker: true, type: 'line', labeltext: 'تعداد', labelstatus: false, data: {series:[137, 98, 91, 87, 90, 105, 103, 174, 112, 109, 106, 90, 110, 140, 175, 1, 28, 133, 165, 131]},time: ['96/04/14', '96/04/15', '96/04/17', '96/04/18', '96/04/19', '96/04/20', '96/04/21','96/04/22', '96/04/23', '96/04/24', '96/04/25', '96/04/25', '96/04/26', '96/04/27', '96/04/28','96/04/29', '96/04/30', '96/04/31', '96/05/01', '96/05/02', '96/05/03', '96/05/04', '96/05/05']}]
        }
    },
    components: {
        LineChart,
        PieChart,
        GridTable
    }
}
</script>

<style>
.boards_list{
    background: #f7f7f7;
    padding:30px;
    min-height: 100vh;
    /* display: flex;
    justify-content: space-between;
    flex-wrap: wrap; */
}
/* .board{
    flex: 1;
} */
</style>


