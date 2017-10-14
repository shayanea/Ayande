<template>
    <div class="toolbar-list">
        <div class="pindashboard-title">
            دشبورد‌های پین شده شمـا
        </div>
        <PinList></PinList>
        <button class="btn toolbar-action-btn" @click="ShowCreateModel">
            <div class="text">مدل جدید</div>
            <span class="plus-icon"></span>
        </button>
        <button class="btn toolbar-action-btn" @click="ShowView">
            <div class="text">نمای جدید</div>
            <span class="plus-icon"></span>
        </button>
        <router-link class="btn toolbar-action-btn" :to="{ path: 'addnewdashboard'}">
            <div class="text">دشبورد جدید</div>
            <span class="plus-icon"></span>
        </router-link>
    </div>
</template>

<script>
import PinList from './pindashboardlist'

export default {
    name:'toolbar',
    data () {
        return {
        }
    },
    components: {
        PinList
    },
    methods: {
        ShowView: function() {
            if(!this.$store.state.showbgwrapper){
                this.$store.commit('ShowBgWrapper');
            }
            this.$store.commit('ShowCreateView');
        },
        ShowCreateModel: function() {
            if(!this.$store.state.showbgwrapper){
                this.$store.commit('ShowBgWrapper');
            }
            this.$store.commit('ShowCreateModel');
        }
    }
}
</script>

<style>
</style>

