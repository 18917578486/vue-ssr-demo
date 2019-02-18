<template>
    <div id="app">
        {{title}}
        <router-link to="/foo">to foo</router-link>
        <router-link to="/bar">to bar</router-link>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    data () {
        return {
            title: 12345
        }
    }   
}
</script>

<style>
    .router-link-active {
        color: red;
    }
</style>

