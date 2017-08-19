<template>
    <div id="bgwrapper" :class="{'active': show}">
    </div>
</template>

<script>
export default {
    name:'bgwrapper',
    props:{
        show:{
            required: true,
            default: false
        }
    },
    data () {
        return {
        }
    }
}
</script>

<style>
#bgwrapper{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .5);
    z-index: 9999;
    opacity: 0;
    transition: opacity .3s ease;
    visibility: hidden;
}

#bgwrapper.active{
    opacity: 1;
    transition: opacity .3s ease;
    visibility: visible;
}
</style>
