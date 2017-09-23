<template>
    <div class="main">
        <div class="row container-fluid new_model">
            <div class="col-md-2 col-sm-2 col-xs-12 columns border_left">
                <h2>لیست جداول</h2>
                <ul class="table_list">
                    <li v-for="(item, index) of table" :key="index" @click="ChangeTable">
                        {{item.title}}
                    </li>
                </ul>
            </div>
            <div class="col-md-10 col-sm-10 col-xs-12">
                <button class="btn action_btn" @click="AddColumn">
                    <div class="text">ستون جدید</div>
                </button>
                <button class="btn action_btn" @click="ShowMerge">
                    <div class="text">تجمع جداول</div>
                </button>
                <button class="btn action_btn" @click="ShowAggrigate">
                    <div class="text">فیلد نتایج جدید</div>
                </button>
                <button class="btn action_btn" @click="ShowQuery">
                    <div class="text">کویری دلخواه</div>
                </button>
                <div class="row" style="margin-top:20px;float:right;width:100%;">
                    <div class="col-md-10 col-sm-10 col-xs-12 tbl">
                        <h2 class="table_title">عملکرد شعب</h2>
                        <table class="table table-striped" v-if="switchstatus">
                            <thead>
                                <tr>
                                    <th v-for="(item, index) of reservedfields" :key="index" v-if="removetdindex !== index" :class="Find(index)">
                                        {{item.title}}
                                        <span class="more" @click="ShowOptions(index)"></span>
                                        <ul class="options">
                                            <li>
                                                پیمایش فیلد
                                                <span class="drilldown"></span>
                                            </li>
                                            <li>
                                                فیلتر کردن
                                                <span class="filter"></span>
                                            </li>
                                            <li>
                                                مرتب سازی
                                                <span class="sort"></span>
                                            </li>
                                        </ul>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) of reservedtablerows" :key="index">
                                    <td class="number" :class="Find(0)" scope="row">{{index + 1}}</td>
                                    <td class="number" :class="Find(1)">{{item.date}}</td>
                                    <td class="number" :class="Find(2)">{{item.remain}}</td>
                                    <td class="number" :class="Find(3)">{{item.number}}</td>
                                    <td class="number" :class="Find(4)">{{item.growthremain}}</td>
                                    <td class="number" :class="Find(5)">{{item.growthnumber}}</td>
                                    <td class="number" :class="Find(6)">{{item.remainnewclient}}</td>
                                    <td class="number" :class="Find(7)">{{item.remainoldclient}}</td>
                                    <td class="number" :class="Find(8)" v-if="item.new">{{item.new}}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="table table-striped" v-if="!switchstatus">
                            <thead>
                                <tr>
                                    <th v-for="(item, index) of fields" :key="index" v-if="removetdindex !== index" :class="Find(index)">
                                        {{item.title}}
                                        <span class="more" @click="ShowOptions(index)"></span>
                                        <ul class="options">
                                            <li>
                                                پیمایش فیلد
                                                <span class="drilldown"></span>
                                            </li>
                                            <li>
                                                فیلتر کردن
                                                <span class="filter"></span>
                                            </li>
                                            <li>
                                                مرتب سازی
                                                <span class="sort"></span>
                                            </li>
                                        </ul>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) of tablerows" :key="index">
                                    <td :class="Find(0)" scope="row">{{index + 1}}</td>
                                    <td :class="Find(1)">{{item.branch}}</td>
                                    <td class="number" :class="Find(2)">{{item.branchcode}}</td>
                                    <td class="number" :class="Find(3)">{{item.remain}}</td>
                                    <td class="number" :class="Find(4)">{{item.remainchange}}</td>
                                    <td class="number" :class="Find(5)">{{item.number}}</td>
                                    <td class="number" :class="Find(6)">{{item.numberchange}}</td>
                                    <td class="number" :class="Find(7)">{{item.avg}}</td>
                                    <td class="number" :class="Find(8)" v-if="item.new">{{item.new}}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button class="btn save_model" @click="Save">ذخیره</button>
                    </div>
                    <div class="col-md-2 col-sm-2 col-xs-12">
                        <h2>فهرست فیلد ها</h2>
                        <div v-if="!switchstatus">
                            <div class="form-group" v-for="(item, index) of fields" :key="index" >
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" checked @change="GetSelectedFields(index)"> {{item.title}}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div v-if="switchstatus">
                            <div class="form-group" v-for="(item, index) of reservedfields" :key="index">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" checked @change="GetSelectedFields(index)"> {{item.title}}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="seperator"></div>
                        <h2>فهرست فیلد نتایج</h2>
                        <div class="form-group" v-for="(item, index) of result" :key="index" style="direction: rtl;cursor:pointer">
                            <label>{{item.title}}</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Query Popup -->
        <Query :show="showquery" @saveq="SaveQuery" @closeq="CloseQuery"></Query> 

        <!-- Add Column Popup -->
        <AddCl :show="showaddcl" @savec="SaveColumn" @closec="CloseColumn"></AddCl> 

        <!-- Aggrigate Popup -->
        <Aggrigate :show="showag" @saveag="SaveAggrigate" @closeag="CloseAggrigate"></Aggrigate> 

        <!-- Merge Popup -->
        <Merge :show="showmerge" @savemerge="SaveMerge" @closmerge="CloseMerge"></Merge>
        
    </div>
</template>

<script>
import Query from '../components/model/query'
import AddCl from '../components/model/addcolumn'
import Aggrigate from '../components/model/aggrigate'
import Merge from '../components/model/merge'

export default {
    name: 'model',
    data() {
        return {
            showquery: false,
            showaddcl: false,
            showag: false,
            showmerge: false,
            switchstatus: false,
            removetdindex: [],
            list: [
                {
                    id: 0,
                    active: false,
                    name: 'گزارش عملکرد سپرده آینده سـاز'
                }, {
                    id: 1,
                    active: false,
                    name: 'گزارش سپرده سالیانه'
                }, {
                    id: 2,
                    active: false,
                    name: 'عملکرده ماهانه شعب'
                }
            ],
            table: [
                {
                    id: 0,
                    title: 'اطلاعات حساب'
                },
                {
                    id: 1,
                    title: 'اطلاعات مشتری'
                },
                {
                    id: 2,
                    title: 'هویتی شخص'
                },
                {
                    id: 3,
                    title: 'اطلاعات تماس مشتری'
                },
                {
                    id: 4,
                    title: 'اطلاعات محصول'
                },
                {
                    id: 5,
                    title: 'نوع محصول'
                },
                {
                    id: 6,
                    title: 'اطلاعات کانال'
                },
                {
                    id: 6,
                    title: 'نوع کانال'
                }
            ],
            models: [
                {
                    id: 0,
                    title: 'مدل شماره ۱'
                },
                {
                    id: 1,
                    title: 'مدل شماره ۲'
                },
                {
                    id: 2,
                    title: 'مدل شماره ۳'
                }
            ],
            fields: [
                {
                    id: 0,
                    title: 'ردیف'
                },
                {
                    id: 1,
                    title: 'شعبه های برتر'
                },
                {
                    id: 2,
                    title: 'کد شعبه'
                },
                {
                    id: 3,
                    title: 'مانده'
                },
                {
                    id: 4,
                    title: 'تغییرات مانده'
                },
                {
                    id: 5,
                    title: 'تعداد'
                },
                {
                    id: 6,
                    title: 'تغییرات تعداد'
                },
                {
                    id: 7,
                    title: 'میانگین'
                }
            ],
            reservedfields: [
                {
                    id: 0,
                    title: 'ردیف'
                },
                {
                    id: 1,
                    title: 'تاریخ'
                },
                {
                    id: 2,
                    title: 'مانده'
                },
                {
                    id: 3,
                    title: 'تعداد'
                },
                {
                    id: 4,
                    title: 'نرخ رشد مانده'
                },
                {
                    id: 5,
                    title: 'نرخ رشد تعداد'
                },
                {
                    id: 6,
                    title: 'مانده مشتری جدید'
                },
                {
                    id: 7,
                    title: 'تعداد مشتری جدید'
                }
            ],
            result: [
                {
                    id: 0,
                    title: 'جمع مانده'
                },
                {
                    id: 1,
                    title: 'جمع تعداد'
                },
                {
                    id: 2,
                    title: 'کل میانگین'
                }
            ],
            tablerows: [
                {
                rows: "1",
                branch: "تهران - نارمک- خیابان آیت",
                branchcode: "214",
                remain: "1,554,707",
                remainchange: "3,508",
                number: "4,025",
                numberchange: "-9",
                avg: "386"
            }, {
                rows: "2",
                branch: "کرج - جهانشهر",
                branchcode: "1703",
                remain: "1,130,480",
                remainchange: "3,075",
                number: "2,382",
                numberchange: "0",
                avg: "475"
            }, {
                rows: "3",
                branch: "تهران - آیت الله کاشانی - تقاطع اباذر",
                branchcode: "222",
                remain: "1,115,587",
                remainchange: "1,099",
                number: "2,014",
                numberchange: "-11",
                avg: "554"
            }, {
                rows: "4",
                branch: "اصفهان - سی و سه پل",
                branchcode: "1103",
                remain: "1,092,186",
                remainchange: "4,781",
                number: "2,459",
                numberchange: "0",
                avg: "444"
            }, {
                rows: "5",
                branch: "تهران - فرمانیه",
                branchcode: "207",
                remain: "1,069,521",
                remainchange: "535,23",
                number: "1,190",
                numberchange: "-5",
                avg: "899"
            }, {
                rows: "6",
                branch: "اهواز - کیانپارس",
                branchcode: "2,102",
                remain: "450,631",
                remainchange: "1,369",
                number: "1735",
                numberchange: "-7",
                avg: "260"
            }, {
                rows: "7",
                branch: "تهران - سهروردی - آجودانی",
                branchcode: "1,186",
                remain: "446,347",
                remainchange: "881",
                number: "827",
                numberchange: "-2",
                avg: "540"
            }, {
                rows: "8",
                branch: "کرمانشاه - میدان فردوسی",
                branchcode: "2,401",
                remain: "443,857",
                remainchange: "-209",
                number: "1311",
                numberchange: "0",
                avg: "339"
            }, {
                rows: "9",
                branch: "تهران - بلوار کشاورز",
                branchcode: "1,236",
                remain: "442,527",
                remainchange: "-355",
                number: "1015",
                numberchange: "-4",
                avg: "436"
            }
            ],
            reservedtablerows: [
                {
                    rows: "1",
                    date: "96/04/27",
                    remain: "76,518,405",
                    number: "198,583",
                    growthremain: "0.14%",
                    growthnumber: "-0.01%",
                    remainnewclient: "48,921",
                    remainoldclient: "90"
                },
                {
                    rows: "2",
                    date: "96/04/28",
                    remain: "76,659,862",
                    number: "198,202",
                    growthremain: "0.18%",
                    growthnumber: "-0.09%",
                    remainnewclient: "38,367",
                    remainoldclient: "110"
                },
                {
                    rows: "3",
                    date: "96/04/31",
                    remain: "76,835,274",
                    number: "198,757",
                    growthremain: "0.23%",
                    growthnumber: "0.28%",
                    remainnewclient: "45,294",
                    remainoldclient: "140"
                },
                {
                    rows: "4",
                    date: "96/04/01",
                    remain: "77,156,891",
                    number: "199,026",
                    growthremain: "0.42%",
                    growthnumber: "0.14%",
                    remainnewclient: "64,378",
                    remainoldclient: "175"
                },
                {
                    rows: "5",
                    date: "96/04/02",
                    remain: "77,370,932",
                    number: "199,248",
                    growthremain: "0.28%",
                    growthnumber: "0.11%",
                    remainnewclient: "42,997",
                    remainoldclient: "128"
                },
                {
                    rows: "6",
                    date: "96/04/03",
                    remain: "77,623,502",
                    number: "199,467",
                    growthremain: "0.33%",
                    growthnumber: "0.11%",
                    remainnewclient: "44,842",
                    remainoldclient: "133"
                },
                {
                    rows: "7",
                    date: "96/04/04",
                    remain: "77,777,966",
                    number: "199,643",
                    growthremain: "0.20%",
                    growthnumber: "0.09%",
                    remainnewclient: "55,931",
                    remainoldclient: "165"
                },
                {
                    rows: "8",
                    date: "96/04/05",
                    remain: "77,982,987",
                    number: "199,410",
                    growthremain: "0.26%",
                    growthnumber: "-0.12%",
                    remainnewclient: "39,832",
                    remainoldclient: "131"
                }
            ]
        }
    },
    components: {
        Query,
        AddCl,
        Aggrigate,
        Merge
    },
    methods: {
        Find(index){
            if(typeof _.find(this.removetdindex,function(item){ return item.id == index}) !== "undefined"){
                return 'hide';
            }else {
                return '';
            }
        },
        ChangeTable: function () {
            this.switchstatus = !this.switchstatus;
            this.removetdindex = [];
        },
        ShowNewDashboard: function(status) {
            if (status) {
                this.$store.commit('ShowDashboardList');
                this.$router.push({ path: '/dashboard' });
            }
        },
        ShowOptions: function () {

        },
        GetSelectedFields: function (index) {
            if(typeof _.find(this.removetdindex,function(item){ return item.id == index}) == "undefined"){
                this.removetdindex.push({id: index}); 
            }else{
                this.removetdindex = _.reject(this.removetdindex,function (item) { return item.id == index})
            }    
            console.log(this.removetdindex)
        },
        ShowQuery: function() {
            this.showquery = true;
            this.$store.commit('ShowBgWrapper');
        },
        SaveQuery: function() {
            this.showquery = false;
            this.$store.commit('ShowBgWrapper');
        },
        CloseQuery: function() {
            this.showquery = false;
            this.$store.commit('ShowBgWrapper');
        },
        AddColumn: function() {
            this.showaddcl = true;
            this.$store.commit('ShowBgWrapper');
        },
        SaveColumn: function() {
            this.showaddcl = false;
            if(this.switchstatus){
                _.forEach(this.reservedtablerows, function(value) {
                        value['new'] = Math.floor(1000 + Math.random() * 9000);
                });
                this.reservedfields.push({id: this.reservedfields.length + 1, title:'ستون جدید'});
            }else{
                _.forEach(this.tablerows, function(value) {
                        value['new'] = Math.floor(1000 + Math.random() * 9000);
                });
                this.fields.push({id: this.fields.length + 1, title:'ستون جدید'});
            }
            this.$store.commit('ShowBgWrapper');
        },
        CloseColumn: function() {
            this.showaddcl = false;
            this.$store.commit('ShowBgWrapper');
        },
        ShowAggrigate: function() {
            this.showag = true;
            this.$store.commit('ShowBgWrapper');
        },
        SaveAggrigate: function() {
            this.showag = false;
            this.result.push({id: this.result.length + 1,title: 'نتیجه جدید'})
            this.$store.commit('ShowBgWrapper');
        },
        CloseAggrigate: function() {
            this.showag = false;
            this.$store.commit('ShowBgWrapper');
        },
        ShowMerge: function() {
            this.showmerge = true;
            this.$store.commit('ShowBgWrapper');
        },
        SaveMerge: function() {
            this.showmerge = false;
            this.$store.commit('ShowBgWrapper');
        },
        CloseMerge: function() {
            this.showmerge = false;
            this.$store.commit('ShowBgWrapper');
        },
        Save: function() {
            this.$router.push({ path: '/modellist' });
        }
    }
}
</script>

<style scoped>
.new_model .columns {
    padding-top: 20px;
    margin-bottom: 20px;
}

.new_model .action_btn {
    position: relative;
    color: #222;
    background: rgb(206, 204, 204);
    padding: 6px 20px;
    float: right;
    outline: none!important;
    box-shadow: none;
    font-size: 13px;
    font-weight: bold;
    margin-left: 15px;
    font-weight: bold;
    font-family: "IRANSANS NORMAL";
    transition: background .3s ease;
    margin-top: 20px;
}

.new_model .action_btn:hover {
    background: #ffc72f;
    transition: background .3s ease;
}

.new_model .border_left {
    border-left: 1px solid #ddd;
}

.new_model h2 {
    font-size: 1.1em;
    color: #222;
    text-align: right;
}

.new_model .table_title {
    font-size: 1.1em;
    color: #222;
    background: #ffc72f;
    padding: 10px;
    text-align: center;
    margin: 0;
    font-weight: bold;
}

.new_model .seperator {
    height: 1px;
    width: 100%;
    float: right;
    clear: both;
    background: #ddd;
    margin: 10px auto;
}

.new_model .table_list,
.new_model .model_list {
    list-style: none;
    padding: 0;
}

.new_model .table_list li,
.new_model .model_list li {
    display: block;
    padding: 10px;
    color: #777;
    margin-bottom: 10px;
    border-bottom: 1px solid #ddd;
    text-align: right;
    font-size: 12px;
    cursor: pointer;
}

.new_model .table_list li:last-child,
.new_model .model_list li:last-child {
    border-bottom: 0;
}

.new_model .checkbox {
    direction: rtl;
}

.tbl {
    padding: 0!important;
    min-height: 396px;
    background: #f5f3f3!important;
    min-height: 100vh;
}

.table_title {
    font-size: 1.3em;
    color: #222;
    background: #ffc72f;
    padding: 10px;
    text-align: center;
    margin: 0;
    font-weight: bold;
}

.tbl .table {
    direction: rtl;
    margin-bottom: 0;
}

.tbl .table tr th {
    font-size: 12px;
    text-align: right;
    background: #eaeaea;
    font-weight: bold;
    position: relative;
}

.tbl .table tr:nth-of-type(odd) {
    background: #f5f3f3;
}

.tbl .table tr:nth-of-type(even) {
    background: #eaeaea;
}

.tbl .table tr td {
    font-size: 12px;
    font-weight: bold;
    text-align: right;
    position: relative;
}

.tbl .table tr td[scope="row"],
.number {
    font-family: "Number";
    font-size: 10px;
}

.tbl .more{
    height: 18px;
    width: 18px;
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translate(0,-50%);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 10px;
    background-color: transparent;
    border-radius: 4px;
    cursor: pointer;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDYxMiA2MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYxMiA2MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8Y2lyY2xlIGN4PSI2OS41NDUiIGN5PSIzMDYiIHI9IjY5LjU0NSIgZmlsbD0iIzAwMDAwMCIvPgoJCTxjaXJjbGUgY3g9IjMwNiIgY3k9IjMwNiIgcj0iNjkuNTQ1IiBmaWxsPSIjMDAwMDAwIi8+CgkJPGNpcmNsZSBjeD0iNTQyLjQ1NSIgY3k9IjMwNiIgcj0iNjkuNTQ1IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==);
}

.tbl .more:hover{
    background-color: #ddd;
}

.tbl .options{
    position: absolute;
    left: 0;
    top: 20px;
    background: #ffffff;
    border-radius: 4px;
    list-style: none;
    padding: 0;
    min-width: 110px;
    z-index: 9;
    opacity: 0;
    visibility: hidden;
}

.tbl .options li{
    display: block;
    padding: 10px 30px 10px 10px;
    border-bottom: 1px solid #eee;
    position: relative;
}

.sort{
    height: 18px;
    width: 18px;
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translate(0,-50%);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 10px;
    border-radius: 4px;
    cursor: pointer;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4OS4zIDQ4OS4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODkuMyA0ODkuMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0xMTksNDY4Ljg1VjUwLjA1bDczLjYsNzMuNmMyLjQsMi40LDUuNSwzLjYsOC43LDMuNnM2LjMtMS4yLDguNy0zLjZjNC44LTQuOCw0LjgtMTIuNSwwLTE3LjNsLTk0LjUtOTQuNSAgICBjLTQuNi00LjYtMTIuNy00LjYtMTcuMywwbC05NC42LDk0LjVjLTQuOCw0LjgtNC44LDEyLjUsMCwxNy4zYzQuOCw0LjgsMTIuNSw0LjgsMTcuMywwbDczLjYtNzMuNnY0MTguOCAgICBjMCw2LjgsNS41LDEyLjMsMTIuMywxMi4zQzExMy41LDQ4MS4wNSwxMTksNDc1LjU1LDExOSw0NjguODV6IiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTM3My44LDQ3Ny40NWMyLjQsMi40LDUuNSwzLjYsOC43LDMuNnM2LjMtMS4yLDguNy0zLjZsOTQuNS05NC41YzQuOC00LjgsNC44LTEyLjUsMC0xNy4zcy0xMi41LTQuOC0xNy4zLDBsLTczLjYsNzMuNiAgICBWMjAuNDVjMC02LjgtNS41LTEyLjMtMTIuMy0xMi4zcy0xMi4zLDUuNS0xMi4zLDEyLjN2NDE4LjhsLTczLjUtNzMuNmMtNC44LTQuOC0xMi41LTQuOC0xNy4zLDBzLTQuOCwxMi41LDAsMTcuM0wzNzMuOCw0NzcuNDV6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==);
}

.tbl .drilldown{
    height: 18px;
    width: 18px;
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translate(0,-50%);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 10px;
    border-radius: 4px;
    cursor: pointer;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZD0iTTM4Ny40NzksMjEuMzk5djQzOC4yMjlsLTc3LjAxNS03Ny4wMTRjLTIuNTExLTIuNTExLTUuNzU1LTMuNzY3LTkuMTA0LTMuNzY3cy02LjU5MiwxLjI1Ni05LjEwNCwzLjc2Nw0KCWMtNS4wMjMsNS4wMjMtNS4wMjMsMTMuMDgsMCwxOC4xMDNsOTguODg0LDk4Ljg4NGM0LjgxMyw0LjgxMywxMy4yODksNC44MTMsMTguMTAzLDBsOTguOTg5LTk4Ljg4NA0KCWM1LjAyMy01LjAyMyw1LjAyMy0xMy4wOCwwLTE4LjEwM3MtMTMuMDgtNS4wMjMtMTguMTAzLDBsLTc3LjAxNCw3Ny4wMTRWMjEuMzk5YzAtNy4xMTUtNS43NTUtMTIuODcxLTEyLjg3MS0xMi44NzENCglDMzkzLjIzNCw4LjYzMywzODcuNDc5LDE0LjM4OCwzODcuNDc5LDIxLjM5OXoiLz4NCjxwYXRoIGQ9Ik0xMDIuNTQ2LDQ5OS43MDVjMi41MTEsMi41MTEsNS43NTUsMy43NjcsOS4xMDQsMy43NjdjMy4zNDgsMCw2LjU5Mi0xLjI1Niw5LjEwNC0zLjc2N2w5OC44ODQtOTguODg0DQoJYzUuMDIzLTUuMDIzLDUuMDIzLTEzLjA4LDAtMTguMTAzcy0xMy4wOC01LjAyMy0xOC4xMDMsMGwtNzcuMDE1LDc3LjAxNVYyMS41MDNjMC03LjExNS01Ljc1NS0xMi44NzEtMTIuODcxLTEyLjg3MQ0KCWMtNy4xMTUsMC0xMi44NzEsNS43NTUtMTIuODcxLDEyLjg3MXY0MzguMjI5bC03Ni45MS03Ny4wMTVjLTUuMDIzLTUuMDIzLTEzLjA4LTUuMDIzLTE4LjEwMywwcy01LjAyMywxMy4wOCwwLDE4LjEwMw0KCUwxMDIuNTQ2LDQ5OS43MDV6Ii8+DQo8L3N2Zz4NCg==);
}

.tbl .filter{
    height: 18px;
    width: 18px;
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translate(0,-50%);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 10px;
    border-radius: 4px;
    cursor: pointer;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ1Ni4xODYgNDU2LjE4NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDU2LjE4NiA0NTYuMTg2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ1NC4yNTQsMTUuODc2Yy0zLjExNy01LjM4My04Ljc4My04Ljc4My0xNS4wMTctOC43ODNIMTcuMDcxYy01Ljk1LDAtMTEuNjE3LDMuMTE3LTE0LjczMyw4LjVzLTMuMTE3LDExLjYxNywwLDE3ICAgIGwxNDMuNjUsMjQ4LjJ2MTUxLjNjMCw5LjM1LDcuNjUsMTcsMTcsMTdoMTEzLjMzM2M5LjM1LDAsMTctNy42NSwxNy0xN3YtMTUwLjQ1TDQ1My40MDQsMzMuMTYgICAgQzQ1Ni44MDQsMjguMDYsNDU3LjA4NywyMS41NDMsNDU0LjI1NCwxNS44NzZ6IE0yNjIuMTU0LDI2Ny40NzZjLTEuNywyLjgzMy0yLjgzMyw1Ljk1LTIuODMzLDkuMzV2MTM4LjI2N2gtNzkuMzMzVjI3Ni4yNiAgICBjMC0zLjExNy0wLjg1LTUuOTUtMi4yNjctOC41TDQ2LjUzOCw0MS4wOTNoMzYxLjUzM0wyNjIuMTU0LDI2Ny40NzZ6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==)
}

.save_model{
    position: fixed;
    bottom: 15px;
    color: #fff;
    background: #2ECC71;
    padding: 10px 40px;
    outline: none!important;
    box-shadow: none;
    font-size: 16px;
    font-weight: bold;
    margin-left: 15px;
    font-weight: bold;
    font-family: "IRANSANS NORMAL";
    transition: background .3s ease;
    margin-top: 20px;
}
</style>


