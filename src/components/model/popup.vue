<template>
    <div v-if="this.$store.state.showcreatemodel">
        <!-- Database Popup -->
        <Database :show="showdb" :list="database" @closepopup="CloseDatabasePicker" @selectdatasbe="SelectDatabase"></Database>
        <!-- Grid Popup -->
        <Grid :show="showgrid" :list="grid" :id="selected_db" @showdatabase="ShowDatabase" @getselected="GetSelected"></Grid>

        <!-- Model Popup -->
        <Model :list="selected_grid" @getselectedfields="GetSelectedFields" @showgrid="ShowGrid" v-if="showmodel" ></Model> 

        <!-- Query Popup -->
        <Query :show="showquery" @getquery="GetQuery" @showmodel="ShowModel"></Query> 

        <!-- Config Popup -->
        <Config :show="showconfig" @save="Save" @showquery="ShowQuery"></Config> 
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
            if(value){
                this.$store.commit('ShowCreateModel');
                this.$store.commit('ShowBgWrapper');
            }
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
        GetSelected: function(array) {
            this.selected_grid = array;
            this.showmodel = true;
            this.showgrid = false;
        },
        ShowGrid: function(value) {
            if(value){
                this.showgrid = true;
                this.showmodel = false;
            }
        },
        GetSelectedFields: function(array) {
            this.selected_feilds = array;
            this.showmodel = false;
            this.showquery = true;
        },
        ShowModel: function(value) {
            if(value){
                this.showmodel = true;
                this.showquery = false;
            }
        },
        GetQuery: function(string) {
            this.query = string;
            this.showquery = false;
            this.showconfig = true;
        },
        ShowQuery: function(value) {
            if(value){
                this.showconfig = false;
                this.showquery = true;
            }
        },
        Save: function(title) {
            this.title = title;
            this.$store.commit('SaveCustomeModel',{
                title:title,
                query:this.query,
                grids:this.selected_grid,
                database:this.selected_db,
                fields:this.selected_feilds
            });
            this.showconfig = false;
            this.$store.commit('ShowBgWrapper');
        }
    }
}
</script>


<style>

</style>
