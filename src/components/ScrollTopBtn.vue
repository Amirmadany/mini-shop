<template>

    <span 
        v-show="isShowBtn" class="scroll__top"
        @click="scrollToTop"
    >

    </span>

</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue'

export default {
    setup(){
        // data
        const isShowBtn = ref(false)
        const scrollTimeout = ref(null)

        // methods
        const canShowScrollBtn = () => {
            // if scroll-timeout exist come back beacuse dont finish
            if(scrollTimeout.value != null) return

            // after 175ms come check can show btn
            scrollTimeout.value = setTimeout(() => {
                // if scroll of top be grand than 200px come show btn
                isShowBtn.value = scrollY > 200 ? true : false

                // reset scroll-timeout
                clearTimeout(scrollTimeout.value)
                scrollTimeout.value = null

            }, 175)
        }

        const scrollToTop = () => {
            // go to up or top
            scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }

        // lifecycle hooks
        onMounted(() => {
            document.addEventListener('scroll', canShowScrollBtn)
        })

        onUnmounted(() => {
            document.removeEventListener('scroll', canShowScrollBtn)
        })

        return {
            isShowBtn,
            scrollToTop
        }
    }
}
</script>

<style>

</style>