<template>
    <click-outside :handler="Hide" class="sidebar-notification-list" :class="{'active': this.$store.state.sidenotification}">
        <div class="ntf-headers">
            <span class="unread-number">{{this.$store.state.profile.notification}}</span>
            <div class="ntf-title">
                اعلان‌های سیستم
            </div>
            <svg version="1.1" @click="Hide" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 47.971 47.971" style="enable-background:new 0 0 47.971 47.971;" xml:space="preserve">
                <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
                c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
                C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
                s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z" />
            </svg>
        </div>
        <ul>
            <li v-for="(item, index) of this.$store.state.profile.notificationlist" :key="index">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                    <path d="M507.494,426.066L282.864,53.537c-5.677-9.415-15.87-15.172-26.865-15.172c-10.995,0-21.188,5.756-26.865,15.172    L4.506,426.066c-5.842,9.689-6.015,21.774-0.451,31.625c5.564,9.852,16.001,15.944,27.315,15.944h449.259    c11.314,0,21.751-6.093,27.315-15.944C513.508,447.839,513.336,435.755,507.494,426.066z M256.167,167.227    c12.901,0,23.817,7.278,23.817,20.178c0,39.363-4.631,95.929-4.631,135.292c0,10.255-11.247,14.554-19.186,14.554    c-10.584,0-19.516-4.3-19.516-14.554c0-39.363-4.63-95.929-4.63-135.292C232.021,174.505,242.605,167.227,256.167,167.227z     M256.498,411.018c-14.554,0-25.471-11.908-25.471-25.47c0-13.893,10.916-25.47,25.471-25.47c13.562,0,25.14,11.577,25.14,25.47    C281.638,399.11,270.06,411.018,256.498,411.018z" fill="#ffa500"/>
                </svg>
                <!-- <div class="ntf_title">{{item.title}}</div> -->
                <div class="ntf-desc">{{item.desc}}</div>
            </li>
        </ul>
    </click-outside>
</template>

<script>
import ClickOutside from 'onclick-outside'

export default {
    name:'sidebar',
    data () {
        return {
        }
    },
    components: {
        ClickOutside
    },
    methods: {
        Hide : function() {
            if(this.$store.state.sidenotification){
                this.$store.commit('OpenSideNotification');
            }
        }
    }
}
</script>


<style>
</style>
