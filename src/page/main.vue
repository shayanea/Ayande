<template>
    <div class="main">
        <Notify></Notify>
        <ListAction></ListAction>
        <ListMethod></ListMethod>
    </div>
</template>
 
<script>
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
