<template>

    <div class="slideshow">
            
        <a href="" class="slideshow__slide"
            v-for="(image, index) in images" :key="image + index"
            :style="{'display': index == currentSlideIndex ? 'block' : 'none'}"
            @mouseenter="pauseSlider"
            @mouseleave="autoSlide"
        >
            <img :src="require(`@/assets/img/slideshow/${index + 1}.png`)" class="slideshow__img">
        </a>

        <a @click="move(-1)" class="slideshow__prev">&#10095;</a>
        <a @click="move(1)" class="slideshow__next">&#10094;</a>

        <div class="slideshow__items">

            <div class="slideshow__item" v-for="(item, index) in images" :key="index + item"> 
                <div 
                    class="slideshow__item-inner"
                    :style="{'width': index == currentSlideIndex ? `${progressWidth}%` : '0px'}"
                >

                </div>
            </div>

        </div>

    </div>

    <input type="checkbox" v-model="isAutoSlide">
    <input type="text" v-model="durationSlide">

</template>

<script>
import { onMounted, onUnmounted, ref, watch } from 'vue'

export default {
    setup(){
        // data
        const images = ref([
            '@/assets/img/slideshow/1.png',
            '@/assets/img/slideshow/2.png',
            '@/assets/img/slideshow/3.png',
            '@/assets/img/slideshow/4.png'
        ])
        const currentSlideIndex = ref(0)
        const isAutoSlide = ref(true)
        const durationSlide = ref(3000)
        const sliderInterval = ref(null)
        const progressWidth = ref(0)

        // methods
        const move = (count = 1) => {
            // if current-slide be in the last slide come reset the current slide to 0
            if(currentSlideIndex.value + count >= images.value.length)
                currentSlideIndex.value = 0
            
            // if current-slide be in the first slide and want to go to preview come change to last slide
            else if(currentSlideIndex.value + count < 0)
                currentSlideIndex.value = images.value.length - 1
            
            else
                currentSlideIndex.value += count

            // reset the progress-width for slider
            progressWidth.value = 0
        }

        const autoSlide = () => {
            // if is-auto-slide option be enable come do
            if(isAutoSlide.value && sliderInterval.value == null){
                // iterate at duration time seted, and do work 
                sliderInterval.value = setInterval(() => {
                    // if progress-width be 100 come next slide 
                    if(progressWidth.value == 100){
                        // go to next slide
                        move(1)

                        // reset the progress-width for next slide
                        progressWidth.value = 0
                    }

                    // increase width
                    progressWidth.value++

                }, durationSlide.value / 100)
            }
        }

        const pauseSlider = () => {
            // if slider-interval be exist come pause slider
            if(sliderInterval.value != null){
                // pause the slider
                clearInterval(sliderInterval.value)
                sliderInterval.value = null
            }
        }

        // watch
        watch(isAutoSlide, (value) => {
            // if changed status to enable come autoSlide
            if(value && sliderInterval.value == null)
                autoSlide()
            
            // else if change status to disable come pause the slider
            else
                pauseSlider()
        })

        watch(durationSlide, () => {
            // pause the slider
            pauseSlider()

            // and again come do auto slide with new duration
            autoSlide()
        })

        // lifecycle hooks
        onMounted(() => {
            autoSlide()
        })

        onUnmounted(() => {
            pauseSlider()
        })

        return {
            images, currentSlideIndex, progressWidth,
            isAutoSlide, durationSlide,
            move, autoSlide, pauseSlider
        }
    }
}
</script>

<style>

</style>