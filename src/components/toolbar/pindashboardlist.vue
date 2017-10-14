<template>
    <div class="pin-dashboard-list">
        <div class="pindashboard-number">
            {{this.$store.state.pin.length}}
        </div>
        <ul class="pindashboard-box">
            <li v-for="(item, index) of this.$store.state.pin" :key="index" :class="{'active' : item.active}">
                <router-link class="pindashboard-box-name" :to="{ path: 'customdashboard'}">
                    {{item.name}}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'pindashboardlist',
    data () {
        return {
        }
    }
}
</script>

<style>
.pin-dashboard-list{
    display: inline-block;
}
</style>

