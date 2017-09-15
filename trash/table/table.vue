<template>
    <div class="column_box" :class="{'col-md-12 col-sm-12 col-xs-12': this.Full, 'col-md-6 col-sm-12 col-xs-12': !this.Full}">
        <div class="column_box_holer tbl">
            <COptions @fullcolumn="FullColumn" ></COptions>
            <h2 class="table_title">{{title}}</h2>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>ردیف</th>
                        <th>شعبه های برتر</th>
                        <th>کد شعبه</th>
                        <th>مانده</th>
                        <th>تغییرات مانده</th>
                        <th>تعداد</th>
                        <th>تغییرات تعداد</th>
                        <th>میانگین</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">1</td>
                        <td>تهران - نارمک- خیابان آیت</td>
                        <td class="number">214</td>
                        <td class="number">1,554,707</td>
                        <td class="number">3,508</td>
                        <td class="number">4,025</td>
                        <td class="number">-9</td>
                        <td class="number">386</td>
                    </tr>
                    <tr>
                        <td scope="row">2</td>
                        <td>کرج - جهانشهر</td>
                        <td class="number">1703</td>
                        <td class="number">1,130,480</td>
                        <td class="number">3,075</td>
                        <td class="number">2,382</td>
                        <td class="number">0</td>
                        <td class="number">475</td>
                    </tr>
                    <tr>
                        <td scope="row">3</td>
                        <td>تهران - آیت الله کاشانی -  تقاطع اباذر</td>
                        <td class="number">222</td>
                        <td class="number">1,115,587</td>
                        <td class="number">1,099</td>
                        <td class="number">2,014</td>
                        <td class="number">-11</td>
                        <td class="number">554</td>
                    </tr>
                    <tr>
                        <td scope="row">4</td>
                        <td>اصفهان - سی و سه پل </td>
                        <td class="number">1103</td>
                        <td class="number">1,092,186</td>
                        <td class="number">4,781</td>
                        <td class="number">2,459</td>
                        <td class="number">0</td>
                        <td class="number">444</td>
                    </tr>
                    <tr>
                        <td scope="row">5</td>
                        <td>تهران - فرمانیه </td>
                        <td class="number">207</td>
                        <td class="number">1,069,521</td>
                        <td class="number">535,23</td>
                        <td class="number">1,190</td>
                        <td class="number">-5</td>
                        <td class="number">899</td>
                    </tr>
                    <tr>
                        <td scope="row">6</td>
                        <td>اهواز - کیانپارس </td>
                        <td class="number">2,102</td>
                        <td class="number">450,631</td>
                        <td class="number">1,369</td>
                        <td class="number">1735</td>
                        <td class="number">-7</td>
                        <td class="number">260</td>
                    </tr>
                    <tr>
                        <td scope="row">7</td>
                        <td>تهران - سهروردی - آجودانی</td>
                        <td class="number">1,186</td>
                        <td class="number">446,347</td>
                        <td class="number">881</td>
                        <td class="number">827</td>
                        <td class="number">-2</td>
                        <td class="number">540</td>
                    </tr>
                    <tr>
                        <td scope="row">8</td>
                        <td>کرمانشاه - میدان فردوسی</td>
                        <td class="number">2,401</td>
                        <td class="number">443,857</td>
                        <td class="number">-209</td>
                        <td class="number">1311</td>
                        <td class="number">0</td>
                        <td class="number">339</td>
                    </tr>
                    <tr>
                        <td scope="row">9</td>
                        <td>تهران - بلوار کشاورز </td>
                        <td class="number">1,236</td>
                        <td class="number">442,527</td>
                        <td class="number">-355</td>
                        <td class="number">1015</td>
                        <td class="number">-4</td>
                        <td class="number">436</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import COptions from '../chart/options'

export default {
    name: 'table',
    props: {
        title: {
            required: true,
            default: ''
        }
    },
    data () {
        return {
            Full: false
        }
    },
    components: {
        COptions
    },
    methods: {
        FullColumn: function(status) {
            this.Full = status;
        }
    }
}
</script>

<style>
.tbl{
    padding: 0!important;
    min-height: 396px;
    background: #f5f3f3!important;
}
.table_title{
    font-size: 1.3em;
    color: #222;
    background: #ffc72f;
    padding: 10px;
    text-align: center;
    margin: 0;
    font-weight: bold;
}
.tbl .table{
    direction: rtl;
    margin-bottom: 0;
}
.tbl .table tr th {
    font-size: 12px;
    text-align: center;
    background: #eaeaea;
    font-weight: bold;
}
.tbl .table tr:nth-of-type(odd){
    background: #f5f3f3;
}
.tbl .table tr:nth-of-type(even){
    background: #eaeaea;
}
.tbl .table tr td{
    font-size: 12px;
    font-weight: bold;
}
.tbl .table tr td[scope="row"],
.number{
    font-family: "Number"
}
</style>


