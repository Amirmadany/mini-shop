<template>

    <div class="slider">
            
        <div class="slider__head">
            <span class="slider__title">
                <slot name="title"/>
            </span>
        </div>
        
        <div class="slider__content">
        
            <div class="swiper-container" ref="slider">
               
                <div class="swiper-wrapper">
                   
                  <slot />
                   
                </div>

            </div>
        
        </div>
        
        <div ref="nextBtn" class="swiper-button-next">&#10095;</div>
        <div ref="prevBtn" class="swiper-button-prev">&#10094;</div>
    
    </div>

</template>

<script>
import { onMounted, ref } from 'vue'

import Swiper from 'swiper'
import 'swiper/swiper-bundle.min.css'
import SwiperCore, { Navigation } from 'swiper/core'
SwiperCore.use(Navigation)

export default {
    setup(){
        // data
        const slider = ref()
        const nextBtn = ref()
        const prevBtn = ref()

        // methods
        const createSlider = () => {
            new Swiper(slider.value, {
                navigation: {
                    nextEl: nextBtn.value,
                    prevEl: prevBtn.value
                },
                breakpoints: {
                    1920: { slidesPerView: 4, spaceBetween: 20},
                    1028: {slidesPerView: 3, spaceBetween: 20},
                    768: {slidesPerView: 2, spaceBetween: 10},
                    480: {slidesPerView: 1, spaceBetween: 0}    
                }
            })
        }

        // lifecycle hooks
        onMounted(() => {
            createSlider()
        })
        
        return {
            slider, nextBtn, prevBtn
        }
    }
}
</script>

<style scoped>

    .swiper-button-next:after, .swiper-container-rtl .swiper-button-prev:after,
    .swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after{
        display: none;
    }

</style>