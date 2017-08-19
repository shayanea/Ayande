<template>
    <div v-if="show">

        <!-- Type Popup -->
        <ViewType :show="showtype" @close="Close"></ViewType>
    </div>
</template>

<script>
import ViewType from './type'

export default {
    name:'popup',
    props: {
        show: {
            required: true,
            default:false
        }
    },
    data () {
        return {
            showtype: true,
        }
    },
    components: {
        ViewType
    },
    methods: {
        Close: function(value) {
            if(value){
                this.showtype = false;
            }
        }
    }
}
</script>

<style>

</style>


