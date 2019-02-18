import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
    return new Router({
        mode: 'history',
        routes: [
            {path: '/', component: () => import('../component/Foo.vue')},
            {path: '/foo/:id?', component: () => import('../component/Foo.vue')},
            {path: '/bar/:id?', component: () => import('../component/Bar.vue')},
        ]
    })
}