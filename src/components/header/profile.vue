<template>
    <click-outside :handler="Hide" class="profile">
        <div class="profile-options" @click="ShowDropDown">
            <div class="name">
                {{this.$store.state.profile.name}}
                <span class="dropdown-icon"></span>
            </div>
            <!-- :style="{ 'background-image': 'url(' + this.$store.state.profile.image+ ')' }"  -->
            <div class="profile-image" ></div>
            <ul class="profile-dropdown" :class="{'active' : dropdown}">
                <li>
                    <a>پروفایـل</a>
                    <span class="user-icon"></span>
                </li>
                <li>
                    <a>تنظیمات</a>
                    <span class="setting-icon"></span>
                </li>
                <li>
                    <a @click="Logout">خروج</a>
                    <span class="logout-icon"></span>
                </li>
            </ul>
        </div>
    </click-outside>
</template>

<script>
import ClickOutside from 'onclick-outside'

export default {
    name:'profile',
    data () {
        return {
            dropdown:false
        }
    },
    components: {
        ClickOutside
    },
    methods: {
        ShowDropDown: function () {
            this.dropdown = !this.dropdown;
        },
        Hide: function () {
            this.dropdown = false;
        },
        Logout: function (){
            this.$router.push({ path: '/login' });
        }
    }
}
</script>

<style>
</style>
