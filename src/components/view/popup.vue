<template>
    <div v-if="this.$store.state.showcreateview">

        <!-- Type Popup -->
        <ViewType :show="showtype" :model="list" @close="Close" @showfilter="ShowFilter"></ViewType>

        <!-- Filter Popup -->
        <ViewFilter :show="showfilter" :active="items.model" @showtype="ShowType" @showparameter="ShowParameter"></ViewFilter>

        <!-- Parameter Popup -->
        <Parameter :show="showparameter" @hideparameter="HideParameter" @showconfig="ShowConfig"></Parameter>

        <!-- Config Popup -->
        <Config :show="showconfig" :active="items.model" :model="list" @hideconfig="HideConfig" @showsubmit="ShowSubmit"></Config>

        <!-- Submit Popup -->
        <Submit :show="showsubmit" @hidesubmit="HideSubmit" @submitview="SubmitView"></Submit>
    </div>
</template>

<script>
import ViewType from './type'
import ViewFilter from './filter'
import Parameter from './parameter'
import Config from './config'
import Submit from './submit'

export default {
    name: 'popup',
    data() {
        return {
            showtype: true,
            showfilter: false,
            showparameter: false,
            showconfig: false,
            showsubmit: false,
            items: { type: null, model: null, bordersize: null, bordercolor: null, background: null, x: null, y: null, username: null, title: null},
            list: [{
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
            }]
        }
    },
    components: {
        ViewType,
        ViewFilter,
        Parameter,
        Config,
        Submit
    },
    methods: {
        Close: function(value) {
            this.$store.commit('ShowCreateView');
            this.$store.commit('ShowBgWrapper');
        },
        ShowType: function(value) {
            this.showtype = true;
            this.showfilter = false;
        },
        ShowFilter: function(object) {
            this.items.model = object.model;
            this.items.type = object.type;
            this.showfilter = true;
            this.showtype = false;
        },
        ShowParameter: function() {
            this.showfilter = false;
            this.showparameter = true;
        },
        ShowConfig: function() {
            this.showparameter = false;
            this.showconfig = true;
        },
        HideParameter: function() {
            this.showparameter = false;
            this.showfilter = true;
        },
        HideConfig: function() {
            this.showconfig = false;
            this.showparameter = true;
        },
        ShowSubmit: function(object) {
            this.items.background = object.background;
            this.items.bordersize = object.bordersize;
            this.items.bordercolor = object.bordercolor;
            this.items.x = object.x;
            this.items.y = object.y;
            this.showconfig = false;
            this.showsubmit = true;
        },
        HideSubmit: function() {
            this.showsubmit = false;
            this.showconfig = true;
        },
        SubmitView: function(object) {
            this.items.username = object.username;
            this.items.title = object.title;
            this.$store.commit('ShowCreateView');
            this.$store.commit('ShowBgWrapper');
        }
    }
}
</script>

<style>

</style>


