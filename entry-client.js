import { createApp } from './app'
import Vue from 'vue'

const { app, router, store } = createApp();

if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
}

Vue.mixin({
    beforeMount () {
        const { asyncData } = this.$options
        if (asyncData) {
            this.dataPromise = asyncData({
                store: this.$store,
                route: this.$route
            })
        }
    },
    beforeRouteUpdate (to, from, next) {
        const { asyncData } = this.$options
        if (asyncData) {
            asyncData({
                store: this.$store,
                route: to
            }).then(next).catch(next)
        } else {
            next()
        }
    }
})

router.onReady(() => {
    app.$mount('#app');
})