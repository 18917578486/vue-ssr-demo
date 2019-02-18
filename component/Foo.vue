<template>
    <div>i am foo {{item}}</div>
</template>

<script>
export default {
    asyncData ({store, route}) {
        return store.dispatch('fetchItem', route.params.id)
    },
    computed: {
        item () {
            let id = this.$route.params.id || 999;
            return this.$store.state.items[id]
        }
    },
    beforeRouteEnter (to, from, next) {
        // react to route changes...
        // don't forget to call next()
        // this.data.id = to.params.id
        next(vm => {
            vm.id = to.params.id
        })
    },
    beforeRouteUpdate (to, from, next) {
        // react to route changes...
        // don't forget to call next()
        this.id = to.params.id
        next();
    }
}
</script>

