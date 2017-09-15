<template>
    <ul class="menu">
        <li>
            <router-link :to="{ path: ''}">
                مدیریت دسته ها و گروه ها
                <span class="dropdown-icon"></span>
            </router-link>
        </li>
        <li>
            <router-link :to="{ path: ''}">
                مدیریت دشبورد ها
                <span class="dropdown-icon"></span>
            </router-link>
        </li>
        <li>
            <router-link :to="{ path: ''}">
                مدیریت مدل ها
                <span class="dropdown-icon"></span>
            </router-link>
        </li>
        <li>
            <router-link :to="{ path: ''}">
                مدیریت نما ها
                <span class="dropdown-icon"></span>
            </router-link>
        </li>
        <li>
            <router-link :to="{ path: ''}">
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
