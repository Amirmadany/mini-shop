<template>

    <Header />

    <router-view></router-view>

    <Footer />

</template>

<script>
// components
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

import { useStore } from 'vuex'
import { onBeforeMount } from '@vue/runtime-core'

export default {
    components: {
        Header,
        Footer
    },

    setup(){
        // data
        const store = useStore()

        // methods
        const getCartItemFromLocalStorage = () => {
            // go to store and set cart-items from localStorage
            store.dispatch('cart/getItems')
        }

        // lifecycle hooks
        onBeforeMount(() => {
            getCartItemFromLocalStorage()
        })
    }
}
</script>

<style>

</style>