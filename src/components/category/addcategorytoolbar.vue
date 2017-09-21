<template>
    <div class="add-category-toolbar">
        <ul>
            <li class="active">درج دسته بندی گزارش جدید</li>
            <li>
                <p>تعریف گروت جدید به منظور دسته بندی نمایش و پیمایش نماها و دشبورد های موجود در سیستم</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'addcategorytoolbar',
    data () {
        return {
        }
    }
}
</script>

<style>
.add-category-toolbar{
    border-radius: 6px;
    background: #ddd;
    list-style: none;
    float: right;
    width: 100%;
}

.add-category-toolbar ul{
    list-style: none;
    float: right;
    margin: 0;
    padding: 0;
}

.add-category-toolbar li{
    float: right;
    direction: rtl;
    position: relative;
    padding: 15px;
}

.add-category-toolbar li:first-child{
    margin-left: 25px;
    padding-right: 25px!important;
}

.add-category-toolbar li:first-child:after{
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

.add-category-toolbar li.active{
    background: #ccc;
}

.add-category-toolbar li p{
    color: #999;
    font-size: .85em;
    margin: 0;
    padding: 2.5px 0;
}
</style>


