<template>
    <div class="notify-success" :class="{'active': active}">
        <p>{{message}}</p>
    </div>
</template>

<script>
export default {
    name:'notify',
    props: {
        message: {
            required: true,
            default: ''
        }
    },
    watch: { 
      	message: function(newVal, oldVal) {
            console.log(newVal) 
            if(newVal !== null || newVal !== ''){
                this.message = newVal;
                this.active = true;
                let self = this;
                setTimeout(function() {
                    self.active = false;
                },2500);
            }  
        }
    },
    data () {
        return {
            active: false
        }
    }
}
</script>

<style>
.notify-success{
    position: fixed;
    bottom: 15px;
    left: 15px;
    background-color: #F7ED98;
    border-radius: 4px;
    text-align: center;
    padding: 5px 20px;
    color: #000;
    opacity: 0;
    visibility: hidden;
    transform: translate(0,150%);
    transition: all .3s ease;
}

.notify-success.active{
    opacity: 1;
    visibility: visible;
    transition: all .3s ease;
    transform: translate(0,0);
}

.notify-success p{
    font-size: 1em;
    direction: rtl;
}
</style>

