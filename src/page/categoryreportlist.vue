<template>
    <div class="main">
        <Toolbar></Toolbar>

        <div class="report-content">
            <div class="row">
                <div class="col-md-6 col-sm-6 col-xs-12 report-table">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>شماره مشخصه</th>
                                <th>عنوان گزارش ها</th>
                                <th>تاریخ درج</th>
                                <th>تاریخ آخرین به روز رسانی</th>
                                <th colspan="3" style="text-align:center">ابزار</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) of this.$store.state.report" :key="index">
                                <td>{{item.id}}</td>
                                <td>{{item.title}}</td>
                                <td>{{item.createdate}}</td>
                                <td>{{item.lastupdate}}</td>
                                <td @click="ViewReport(item)" class="customtooltip">
                                    <span class="tooltiptext">مشاهده گزارش ها</span>
                                    <div class="view-report"></div>
                                </td>
                                <td @click="AccessUser(item)" class="customtooltip">
                                    <span class="tooltiptext">دسترسی کاربران</span>
                                    <div class="access-report"></div>
                                </td>
                                <td @click="RemoveReport(item)" class="customtooltip">
                                    <span class="tooltiptext">حذف گزارش ها از دسته بندی</span>
                                    <div class="remove-report"></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <uib-pagination v-model="pagination" :items-per-page="10" :total-items="totalItems" :max-size="maxSize" class="pagination-sm" :boundary-link-numbers="false" :direction-links="true" :rotate="false" :next-text="'بعدی'" :previous-text="'قبلی'"></uib-pagination>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-3 col-xs-12">
                    <div class="total-report-info">
                        <span> گزارش ها موجود در دسته بندی</span>
                        <h2><span class="number">{{this.$store.state.report.length}}</span> گزارش</h2>
                        <div class="add-new-report" @click="AddNewReport()">
                            درج گزارش ها به دسته بندی
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <NewReport :show="ReportModal.status" @closereport="CloseReportModal"
        @saveorupdate="SaveOrUpdateReport"></NewReport>

        <UserAccess :show="AccessModal.status" @closeuseraccess="CloseAccessModal"
        @saveorupdate="SaveOrUpdateAccess"></UserAccess>

        <Notify :message="NotifyObj.message" :show="NotifyObj.status"></Notify>
    </div>
</template>
 
<script>
import Toolbar from '../components/category/reportlist'
import Notify from '../components/global/notify'
import NewReport from '../components/category/newreport'
import UserAccess from '../components/category/useraccess'

export default {
    name:'categoryreportlist',
    data () {
        return {
            totalItems: this.$store.state.report.length,
            pagination: { currentPage: 1 },
            setPage: function(pageNo) {
                this.pagination.currentPage = pageNo;
            },
            pageChanged: function() {
                console.log('Page changed to: ' + this.pagination.currentPage);
            },
            maxSize: 5,
            searchtext: '',
            ReportModal: {
                status: false
            },
            AccessModal: {
                status: false
            },
            NotifyObj: {
                status: false,
                message: ''
            }
        }
    },
    components: {
        Toolbar,
        Notify,
        NewReport,
        UserAccess
    },
    methods: {
        ViewReport: function(item) {

        },
        AccessUser: function(item) {
            this.AccessModal.status = true;
        },
        RemoveReport: function(item) {
            
        },
        AddNewReport: function() {
            this.ReportModal.status = true;
            this.$store.state.editroleobj = false;
            this.$router.push({ path: '/addcategory' });
        },
        CloseReportModal: function() {
            this.ReportModal.status = false;
        },
        SaveOrUpdateReport: function() {
            this.ReportModal.status = false;
        },
        CloseAccessModal: function() {
            this.AccessModal.status = false;
        },
        SaveOrUpdateAccess: function() {
            this.AccessModal.status = false;
        }
    }
}
</script>

<style>
.report-content {
    padding: 25px;
    display: block;
    clear: both;
}

.report-table {
    border-radius: 6px;
    text-align: center;
}

.report-table .table {
    direction: rtl;
    margin-bottom: 0;
    position: relative;
}

.report-table .table:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: -3px;
    height: 3px;
    background: #ffc72f;
}

.report-table .table tr th {
    font-size: 12px;
    text-align: right;
    background: #eaeaea;
    font-weight: bold;
    position: relative;
}

.report-table .table tr:nth-of-type(odd) {
    background: #f5f3f3;
}

.report-table .table tr:nth-of-type(even) {
    background: #eaeaea;
}

.report-table .table tr td {
    font-size: 12px;
    font-weight: bold;
    text-align: right;
    position: relative;
}

.report-table .table tr td .view-report{
    margin: 0 auto;
    height: 18px;
    width: 18px;
    background-position: center;
    background-size: 18px;
    background-repeat: no-repeat;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCIgdmlld0JveD0iMCAwIDU3Ny4wMjkgNTc3LjAyOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTc3LjAyOSA1NzcuMDI5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTI4OC41MTQsMTQ4LjYyOWM3My43NDYsMCwxMzYuMTYyLDMzLjYxNiwxNzUuNTM5LDYxLjgyMWM0Ni42NTIsMzMuNDE1LDcwLjY2LDY1LjczNyw3Ni44ODUsNzguMDY1ICAgYy02LjIzMiwxMi4zMjctMzAuMjMyLDQ0LjY0OS03Ni44ODUsNzguMDY1Yy0zOS4zNzcsMjguMjA0LTEwMS43OTMsNjEuODItMTc1LjUzOSw2MS44MmMtNzMuNzQ2LDAtMTM2LjE2MS0zMy42MTYtMTc1LjUzOS02MS44MiAgIGMtNDYuNjYxLTMzLjQxNi03MC42Ni02NS43MzgtNzYuODk0LTc4LjA2NWM2LjIzNC0xMi4zMjgsMzAuMjMzLTQ0LjY1LDc2Ljg4NS03OC4wNjUgICBDMTUyLjM1MywxODIuMjQ1LDIxNC43NjgsMTQ4LjYyOSwyODguNTE0LDE0OC42MjkgTTI4OC41MTQsMTEzLjY1N0MxMjkuMTc2LDExMy42NTcsMCwyNTMuNTQzLDAsMjg4LjUxNSAgIHMxMjkuMTc2LDE3NC44NTcsMjg4LjUxNCwxNzQuODU3YzE1OS4zMzksMCwyODguNTE1LTEzOS44ODYsMjg4LjUxNS0xNzQuODU3UzQ0Ny44NTQsMTEzLjY1NywyODguNTE0LDExMy42NTdMMjg4LjUxNCwxMTMuNjU3eiAgICBNMjg4LjUxNCwxODMuNjAxYy01Ny45MzksMC0xMDQuOTE0LDQ2Ljk3NS0xMDQuOTE0LDEwNC45MTRjMCw1Ny45MzgsNDYuOTc1LDEwNC45MTQsMTA0LjkxNCwxMDQuOTE0ICAgczEwNC45MTQtNDYuOTc2LDEwNC45MTQtMTA0LjkxNEMzOTMuNDI4LDIzMC41NzYsMzQ2LjQ1MywxODMuNjAxLDI4OC41MTQsMTgzLjYwMXogTTI2MC4yNjYsMjg4LjUxNSAgIGMtMjQuNTE1LDAtNDQuMzg4LTE5Ljg3My00NC4zODgtNDQuMzg4YzAtMjQuNTE1LDE5Ljg3My00NC4zODcsNDQuMzg4LTQ0LjM4N2MyNC41MTUsMCw0NC4zODgsMTkuODczLDQ0LjM4OCw0NC4zODcgICBDMzA0LjY1NCwyNjguNjQyLDI4NC43ODEsMjg4LjUxNSwyNjAuMjY2LDI4OC41MTV6IiBmaWxsPSIjMDAwMDAwIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==);
    cursor: pointer;
}

.report-table .table tr td .access-report{
    margin: 0 auto;
    height: 18px;
    width: 18px;
    background-position: center;
    background-size: 18px;
    background-repeat: no-repeat;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDYwIDYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MCA2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIxMjhweCIgaGVpZ2h0PSIxMjhweCI+CjxwYXRoIGQ9Ik01NS4wMTQsNDUuMzg5bC05LjU1My00Ljc3NkM0NC41Niw0MC4xNjIsNDQsMzkuMjU2LDQ0LDM4LjI0OHYtMy4zODFjMC4yMjktMC4yOCwwLjQ3LTAuNTk5LDAuNzE5LTAuOTUxICBjMS4yMzktMS43NSwyLjIzMi0zLjY5OCwyLjk1NC01Ljc5OUM0OS4wODQsMjcuNDcsNTAsMjYuMDc1LDUwLDI0LjV2LTRjMC0wLjk2My0wLjM2LTEuODk2LTEtMi42MjV2LTUuMzE5ICBjMC4wNTYtMC41NSwwLjI3Ni0zLjgyNC0yLjA5Mi02LjUyNUM0NC44NTQsMy42ODgsNDEuNTIxLDIuNSwzNywyLjVzLTcuODU0LDEuMTg4LTkuOTA4LDMuNTNjLTEuNDM1LDEuNjM3LTEuOTE4LDMuNDgxLTIuMDY0LDQuODA1ICBDMjMuMzE0LDkuOTQ5LDIxLjI5NCw5LjUsMTksOS41Yy0xMC4zODksMC0xMC45OTQsOC44NTUtMTEsOXY0LjU3OWMtMC42NDgsMC43MDYtMSwxLjUyMS0xLDIuMzN2My40NTQgIGMwLDEuMDc5LDAuNDgzLDIuMDg1LDEuMzExLDIuNzY1YzAuODI1LDMuMTEsMi44NTQsNS40NiwzLjY0NCw2LjI4NXYyLjc0M2MwLDAuNzg3LTAuNDI4LDEuNTA5LTEuMTcxLDEuOTE1bC02LjY1Myw0LjE3MyAgQzEuNTgzLDQ4LjEzNCwwLDUwLjgwMSwwLDUzLjcwM1Y1Ny41aDE0aDJoNDR2LTQuMDQzQzYwLDUwLjAxOSw1OC4wODksNDYuOTI3LDU1LjAxNCw0NS4zODl6IE0xNCw1My4yNjJWNTUuNUgydi0xLjc5NyAgYzAtMi4xNywxLjE4NC00LjE2NCwzLjE0MS01LjIzM2w2LjY1Mi00LjE3M2MxLjMzMy0wLjcyNywyLjE2MS0yLjEyMSwyLjE2MS0zLjY0MXYtMy41OTFsLTAuMzE4LTAuMjk3ICBjLTAuMDI2LTAuMDI0LTIuNjgzLTIuNTM0LTMuNDY4LTUuOTU1bC0wLjA5MS0wLjM5NmwtMC4zNDItMC4yMkM5LjI3NSwyOS44OTksOSwyOS40LDksMjguODYzdi0zLjQ1NCAgYzAtMC4zNiwwLjI0NS0wLjc4OCwwLjY3MS0xLjE3NEwxMCwyMy45MzhsLTAuMDAyLTUuMzhDMTAuMDE2LDE4LjI3MSwxMC41MzcsMTEuNSwxOSwxMS41YzIuMzkzLDAsNC40MDgsMC41NTMsNiwxLjY0NHY0LjczMSAgYy0wLjY0LDAuNzI5LTEsMS42NjItMSwyLjYyNXY0YzAsMC4zMDQsMC4wMzUsMC42MDMsMC4xMDEsMC44OTNjMC4wMjcsMC4xMTYsMC4wODEsMC4yMjIsMC4xMTgsMC4zMzQgIGMwLjA1NSwwLjE2OCwwLjA5OSwwLjM0MSwwLjE3NiwwLjVjMC4wMDEsMC4wMDIsMC4wMDIsMC4wMDMsMC4wMDMsMC4wMDVjMC4yNTYsMC41MjgsMC42MjksMSwxLjA5OSwxLjM3NyAgYzAuMDA1LDAuMDE5LDAuMDExLDAuMDM2LDAuMDE2LDAuMDU0YzAuMDYsMC4yMjksMC4xMjMsMC40NTcsMC4xOTEsMC42OGwwLjA4MSwwLjI2MWMwLjAxNCwwLjA0NiwwLjAzMSwwLjA5MywwLjA0NiwwLjEzOSAgYzAuMDM1LDAuMTA4LDAuMDY5LDAuMjE1LDAuMTA1LDAuMzIxYzAuMDYsMC4xNzUsMC4xMjMsMC4zNTYsMC4xOTYsMC41NTNjMC4wMzEsMC4wODIsMC4wNjUsMC4xNTYsMC4wOTcsMC4yMzcgIGMwLjA4MiwwLjIwOSwwLjE2NCwwLjQxMSwwLjI1LDAuNjExYzAuMDIxLDAuMDQ4LDAuMDM5LDAuMSwwLjA2LDAuMTQ3bDAuMDU2LDAuMTI2YzAuMDI2LDAuMDU4LDAuMDUzLDAuMTEsMC4wNzksMC4xNjcgIGMwLjA5OCwwLjIxNCwwLjE5NCwwLjQyMSwwLjI5NCwwLjYyMWMwLjAxNiwwLjAzMiwwLjAzMSwwLjA2NywwLjA0NywwLjA5OWMwLjA2MywwLjEyNSwwLjEyNiwwLjI0MywwLjE4OSwwLjM2MyAgYzAuMTA4LDAuMjA2LDAuMjE0LDAuNCwwLjMyLDAuNTg4YzAuMDUyLDAuMDkyLDAuMTAzLDAuMTgyLDAuMTU0LDAuMjY5YzAuMTQ0LDAuMjQ2LDAuMjgxLDAuNDcyLDAuNDE0LDAuNjgyICBjMC4wMjksMC4wNDUsMC4wNTcsMC4wOTIsMC4wODUsMC4xMzVjMC4yNDIsMC4zNzUsMC40NTIsMC42NzksMC42MjYsMC45MTZjMC4wNDYsMC4wNjMsMC4wODYsMC4xMTcsMC4xMjUsMC4xNyAgYzAuMDIyLDAuMDI5LDAuMDUyLDAuMDcxLDAuMDcxLDAuMDk3djMuMzA5YzAsMC45NjgtMC41MjgsMS44NTYtMS4zNzcsMi4zMmwtMi42NDYsMS40NDNsLTAuNDYxLTAuMDQxbC0wLjE4OCwwLjM5NWwtNS42MjYsMy4wNjkgIEMxNS44MDEsNDYuOTI0LDE0LDQ5Ljk1OCwxNCw1My4yNjJ6IE01OCw1NS41SDE2di0yLjIzOGMwLTIuNTcxLDEuNDAyLTQuOTM0LDMuNjU5LTYuMTY0bDguOTIxLTQuODY2ICBDMzAuMDczLDQxLjQxNywzMSwzOS44NTQsMzEsMzguMTU1di00LjAxOHYtMC4wMDFsLTAuMTk0LTAuMjMybC0wLjAzOC0wLjA0NWMtMC4wMDItMC4wMDMtMC4wNjQtMC4wNzgtMC4xNjUtMC4yMSAgYy0wLjAwNi0wLjAwOC0wLjAxMi0wLjAxNi0wLjAxOS0wLjAyNGMtMC4wNTMtMC4wNjktMC4xMTUtMC4xNTItMC4xODYtMC4yNTFjLTAuMDAxLTAuMDAyLTAuMDAyLTAuMDAzLTAuMDAzLTAuMDA1ICBjLTAuMTQ5LTAuMjA3LTAuMzM2LTAuNDc2LTAuNTQ0LTAuOGMtMC4wMDUtMC4wMDctMC4wMDktMC4wMTUtMC4wMTQtMC4wMjJjLTAuMDk4LTAuMTUzLTAuMjAyLTAuMzItMC4zMDgtMC40OTcgIGMtMC4wMDgtMC4wMTMtMC4wMTYtMC4wMjYtMC4wMjQtMC4wNGMtMC4yMjYtMC4zNzktMC40NjYtMC44MDgtMC43MDUtMS4yODNjMCwwLTAuMDAxLTAuMDAxLTAuMDAxLTAuMDAyICBjLTAuMTI3LTAuMjU1LTAuMjU0LTAuNTIzLTAuMzc4LTAuODAybDAsMGMtMC4wMTctMC4wMzktMC4wMzUtMC4wNzctMC4wNTItMC4xMTZoMGMtMC4wNTUtMC4xMjUtMC4xMS0wLjI1Ni0wLjE2Ni0wLjM5MSAgYy0wLjAyLTAuMDQ5LTAuMDQtMC4xLTAuMDYtMC4xNWMtMC4wNTItMC4xMzEtMC4xMDUtMC4yNjMtMC4xNjEtMC40MTRjLTAuMTAyLTAuMjcyLTAuMTk4LTAuNTU2LTAuMjktMC44NDlsLTAuMDU1LTAuMTc4ICBjLTAuMDA2LTAuMDItMC4wMTMtMC4wNC0wLjAxOS0wLjA2MWMtMC4wOTQtMC4zMTYtMC4xODQtMC42MzktMC4yNi0wLjk3MWwtMC4wOTEtMC4zOTZsLTAuMzQxLTAuMjIgIEMyNi4zNDYsMjUuODAzLDI2LDI1LjE3NiwyNiwyNC41di00YzAtMC41NjEsMC4yMzgtMS4wODQsMC42Ny0xLjQ3NUwyNywxOC43MjhWMTIuNXYtMC4zNTRsLTAuMDI3LTAuMDIxICBjLTAuMDM0LTAuNzIyLDAuMDA5LTIuOTM1LDEuNjIzLTQuNzc2QzMwLjI1Myw1LjQ1OCwzMy4wODEsNC41LDM3LDQuNWMzLjkwNSwwLDYuNzI3LDAuOTUxLDguMzg2LDIuODI4ICBjMS45NDcsMi4yMDEsMS42MjUsNS4wMTcsMS42MjMsNS4wNDFMNDcsMTguNzI4bDAuMzMsMC4yOThDNDcuNzYyLDE5LjQxNiw0OCwxOS45MzksNDgsMjAuNXY0YzAsMC44NzMtMC41NzIsMS42MzctMS40MjIsMS44OTkgIGwtMC40OTgsMC4xNTNsLTAuMTYsMC40OTVjLTAuNjY5LDIuMDgxLTEuNjIyLDQuMDAzLTIuODM0LDUuNzEzYy0wLjI5NywwLjQyMS0wLjU4NiwwLjc5NC0wLjgzNywxLjA3OUw0MiwzNC4xMjN2NC4xMjUgIGMwLDEuNzcsMC45ODMsMy4zNjEsMi41NjYsNC4xNTNsOS41NTMsNC43NzZDNTYuNTEzLDQ4LjM3NCw1OCw1MC43OCw1OCw1My40NTdWNTUuNXoiIGZpbGw9IiMwMDAwMDAiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==);
    cursor: pointer;
}

.report-table .table tr td .remove-report{
    margin: 0 auto;
    height: 15px;
    width: 15px;
    background-position: center;
    background-size: 12px;
    background-repeat: no-repeat;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDIyLjg4IDIyLjg4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMi44OCAyMi44ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIxMjhweCIgaGVpZ2h0PSIxMjhweCI+CjxwYXRoIGQ9Ik0wLjMyNCwxLjkwOWMtMC40MjktMC40MjktMC40MjktMS4xNDMsMC0xLjU4N2MwLjQ0NC0wLjQyOSwxLjE0My0wLjQyOSwxLjU4NywwbDkuNTIzLDkuNTM5ICBsOS41MzktOS41MzljMC40MjktMC40MjksMS4xNDMtMC40MjksMS41NzEsMGMwLjQ0NCwwLjQ0NCwwLjQ0NCwxLjE1OSwwLDEuNTg3bC05LjUyMyw5LjUyNGw5LjUyMyw5LjUzOSAgYzAuNDQ0LDAuNDI5LDAuNDQ0LDEuMTQzLDAsMS41ODdjLTAuNDI5LDAuNDI5LTEuMTQzLDAuNDI5LTEuNTcxLDBsLTkuNTM5LTkuNTM5bC05LjUyMyw5LjUzOWMtMC40NDQsMC40MjktMS4xNDMsMC40MjktMS41ODcsMCAgYy0wLjQyOS0wLjQ0NC0wLjQyOS0xLjE1OSwwLTEuNTg3bDkuNTIzLTkuNTM5TDAuMzI0LDEuOTA5eiIgZmlsbD0iIzIyMjIyMiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);
    cursor: pointer;
}

.report-table .pagination>li>a,
.report-table .pagination>li>span {
    border: 0;
    background-color: #eaeaea;
    margin: 0 5px;
    border-radius: 6px!important;
    color: #222;
}

.report-table .pagination>.disabled>span,
.report-table .pagination>.disabled>span:hover,
.report-table .pagination>.disabled>span:focus,
.report-table .pagination>.disabled>a,
.report-table .pagination>.disabled>a:hover,
.report-table .pagination>.disabled>a:focus {
    background-color: #999;
    color: #666;
}

.report-table .pagination>.active>a,
.report-table .pagination>.active>span,
.report-table .pagination>.active>a:hover,
.report-table .pagination>.active>span:hover,
.report-table .pagination>.active>a:focus,
.report-table .pagination>.active>span:focus {
    background-color: #ffc72f;
    color: #222;
}

.total-report-info{
    background-color: #eaeaea;
    border-radius: 10px;
    position: relative;
    min-height: 200px;
    overflow: hidden;
}

.total-report-info span{
    text-align: right;
    display: block;
    color: #999;
    padding: 15px;
}

.total-report-info h2{
    position: absolute;
    top: calc(50% - 20px);
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    color: #222;
    font-size: 1.5em;
    direction: rtl;
    color: #ffc72f;
}

.total-report-info .number{
    font-size: 2em;
    font-family: "Number";
    display: inline;
    color: #ffc72f;
    padding: 0;
}

.total-report-info .add-new-report{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #d8d5d5;
    padding: 10px;
    text-align: center;
    color: #444;
    border-radius: 0 0 6px 6px;
    cursor: pointer;
}

.total-report-info .add-new-report:hover{
    background-color: #d8d5d5;
}

.total-report-info .add-new-report:after{
    content: '';
    position: absolute;
    right: 35%;
    top: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 10px;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMxLjQ0NCAzMS40NDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMxLjQ0NCAzMS40NDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4Ij4KPHBhdGggZD0iTTEuMTE5LDE2Ljg0MWMtMC42MTksMC0xLjExMS0wLjUwOC0xLjExMS0xLjEyN2MwLTAuNjE5LDAuNDkyLTEuMTExLDEuMTExLTEuMTExaDEzLjQ3NVYxLjEyNyAgQzE0LjU5NSwwLjUwOCwxNS4xMDMsMCwxNS43MjIsMGMwLjYxOSwwLDEuMTExLDAuNTA4LDEuMTExLDEuMTI3djEzLjQ3NmgxMy40NzVjMC42MTksMCwxLjEyNywwLjQ5MiwxLjEyNywxLjExMSAgYzAsMC42MTktMC41MDgsMS4xMjctMS4xMjcsMS4xMjdIMTYuODMzdjEzLjQ3NmMwLDAuNjE5LTAuNDkyLDEuMTI3LTEuMTExLDEuMTI3Yy0wLjYxOSwwLTEuMTI3LTAuNTA4LTEuMTI3LTEuMTI3VjE2Ljg0MUgxLjExOXoiIGZpbGw9IiMwMDAwMDAiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==);
}
</style>