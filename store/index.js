import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function fetchItem () {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let number = Math.floor(Math.random() * 10000)
            resolve(number)
        })
    }, 500)
}

export function createStore() {
    return new Vuex.Store({
        state: {
            items: {}
        },
        actions: {
            fetchItem ({commit}, id) {
                console.log(id)
                var id = id || 999;
                console.log(id)
                return fetchItem().then(item => {
                    commit('setItem', {id, item})
                })
            }
        },
        mutations: {
            setItem (state, {id, item}) {
                Vue.set(state.items, id, item)
            }
        }
    })
}