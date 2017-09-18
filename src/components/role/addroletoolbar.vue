<template>
    <div class="add-role-toolbar">
        <ul>
            <li class="active">درج نقش جدید</li>
            <li>
                <p>تعریف نقش جدید به منظور اعمال دسترسی به امکانات سیستم، مدل ها، نما ها و دشبوردهای موجود در سیستم</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'addroletoolbar',
    data () {
        return {
        }
    }
}
</script>

<style>
.add-role-toolbar{
    border-radius: 6px;
    background: #ddd;
    list-style: none;
    float: right;
    width: 100%;
}

.add-role-toolbar ul{
    list-style: none;
    float: right;
    margin: 0;
    padding: 0;
}

.add-role-toolbar li{
    float: right;
    direction: rtl;
    position: relative;
    padding: 15px;
}

.add-role-toolbar li:first-child{
    margin-left: 25px;
    padding-right: 25px!important;
}

.add-role-toolbar li:first-child:after{
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

.add-role-toolbar li.active{
    background: #ccc;
}

.add-role-toolbar li p{
    color: #999;
    font-size: .85em;
    margin: 0;
    padding: 2.5px 0;
}
</style>


