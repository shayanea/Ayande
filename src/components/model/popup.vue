<template>
    <div v-if="this.$store.state.showcreatemodal">
        
        <Database :show="showdb" :list="database" @closepopup="CloseDatabasePicker" @selectdatasbe="SelectDatabase"></Database>

        <Grid :show="showgrid" :list="grid" :id="selected_db" @showdatabase="ShowDatabase" @save="Save"></Grid>
    </div>
</template>

<script>
import Database from './database'
import Grid from './grid'
import Model from './model'
import Query from './query'
import Config from './config'

export default {
    name:'popup',
    data () {
        return {
            showdb: true,
            showgrid: false,
            showmodel: false,
            showquery: false,
            showconfig: false,
            selected_db: null,
            selected_grid: null,
            query: '',
            title: '',
            database:[
                {
                    id: 0,
                    title: 'پایگاه داده کر'
                },
                {
                    id: 1,
                    title: 'اداره نوین'
                }
            ],
            grid: [
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
                    id: 7,
                    title: 'نوع کانال'
                }   
            ]
        }
    },
    components: {
        Database,
        Grid,
        Model,
        Query,
        Config
    },
    methods: {
        CloseDatabasePicker: function(value) {
            this.$store.commit('ShowCreateModel');
            this.$store.commit('ShowBgWrapper');
        },
        SelectDatabase: function(id) {
            this.selected_db = id;
            this.showdb = false;
            this.showgrid = true;
        },
        ShowDatabase: function(value) {
            if(value){
                this.showdb = true;
                this.showgrid = false;
            }
        },
        Save: function(array) {
            this.selected_grid = array;
            this.$router.push({ path: '/defaultmodel' });
            this.$store.commit('ShowCreateModel');
            this.$store.commit('ShowBgWrapper');
        }
    }
}
</script>


<style>

</style>
