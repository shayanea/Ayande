<template>
    <div class="category-report-toolbar">
        <ul>
            <li class="active">فهرست نماها و دشبورد های دسته بندی</li>
            <li>
                <p>مشاهده و مدیریت دشبورد ها و نماهای موجود در دسته بندی و مدیریت دسترسی به آن ها</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'categoryreportlisttoolbar',
    data () {
        return {
        }
    }
}
</script>

<style>
.category-report-toolbar{
    border-radius: 6px;
    background: #ddd;
    list-style: none;
    float: right;
    width: 100%;
}

.category-report-toolbar ul{
    list-style: none;
    float: right;
    margin: 0;
    padding: 0;
}

.category-report-toolbar li{
    float: right;
    direction: rtl;
    position: relative;
    padding: 15px;
}

.category-report-toolbar li:first-child{
    margin-left: 25px;
    padding-right: 25px!important;
}

.category-report-toolbar li:first-child:after{
    content: '';
    position: absolute;
    left: -25px;
    top: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 25px 25px 25px 0;
    border-color: transparent #cccccc transparent transparent;
}

.category-report-toolbar li.active{
    background: #ccc;
}

.category-report-toolbar li p{
    color: #999;
    font-size: .85em;
    margin: 0;
    padding: 2.5px 0;
}
</style>


