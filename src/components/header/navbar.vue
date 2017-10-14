<template>
    <ul class="menu">
        <li>
            <router-link class="dropdown" :to="{ path: ''}">
                مدیریت دسته ها و گروه ها
                <span class="dropdown-icon"></span>
                <!-- <ul class="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a href="#">Separated link</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a href="#">One more separated link</a></li>
                </ul> -->
            </router-link>
        </li>
        <li>
            <router-link class="dropdown"  :to="{ path: ''}">
                مدیریت دشبورد ها
                <span class="dropdown-icon"></span>
            </router-link>
        </li>
        <li>
            <router-link class="dropdown"  :to="{ path: ''}">
                مدیریت مدل ها
                <span class="dropdown-icon"></span>
            </router-link>
        </li>
        <li>
            <router-link class="dropdown"  :to="{ path: ''}">
                مدیریت نما ها
                <span class="dropdown-icon"></span>
            </router-link>
        </li>
        <li>
            <router-link class="dropdown"  :to="{ path: ''}">
                مدیریت کاربران و نقش ها
                <span class="dropdown-icon"></span>
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name:'navbar',
    data () {
        return {

        }
    }
}
</script>

<style>

</style>
