<template>
    <div class="column_box" :class="{'col-md-12 col-sm-12 col-xs-12': this.Full, 'col-md-6 col-sm-12 col-xs-12': !this.Full}">
        <div class="column_box_holer tbl">
            <COptions @fullcolumn="FullColumn" ></COptions>
            <h2 class="table_title">{{title}}</h2>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th v-for="(item, index) of header" :key="index">
                            {{item}}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(data, index) of list" :key="index">
                        <td v-for="(item, index) of data" :key="index">
                            {{item}}
                        </td>
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
        },
        header: {
            required: true,
            default: null
        },
        list: {
            required: true,
            default: null
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


