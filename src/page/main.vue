<template>
    <div class="main">
        <FixedHeader></FixedHeader>
        <Notify></Notify>
        <ListAction></ListAction>
        <ListMethod></ListMethod>
    </div>
</template>
 
<script>
import FixedHeader from '../components/header/header.vue'
import Notify from '../components/main/notification'
import ListAction from '../components/main/listaction'
import ListMethod from '../components/main/listmethod'

export default {
    name:'main',
    data () {
        return {
        }
    },
    components: {
        FixedHeader,
        Notify,
        ListAction,
        ListMethod
    },
    methods: {
    }
}
</script>

<style>

</style>
