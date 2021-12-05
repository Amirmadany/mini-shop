<template>
   
    <div class="rating">
       
        <div class="rating__star">
            
            <span 
                class="rating__rate"
                v-for="(star, index) in stars" :key="index + star.name"
                :data-title="star.name"
                @click="getStars(star.count)"
                @mouseover="toggleShowSelectedStarts"
                @mouseleave="toggleShowSelectedStarts"
            >
            </span>
            <!-- <span class="rating__rate" data-width="100%" data-title="عالی"></span>
            <span class="rating__rate" data-width="80%" data-title="خوب"></span>
            <span class="rating__rate" data-width="60%" data-title="معمولی"></span>
            <span class="rating__rate" data-width="40%" data-title="ضعیف"></span>
            <span class="rating__rate" data-width="20%" data-title="بد"></span> -->
        </div>

        <div class="rating__fstar" :style="{'width': isShowSelectedStars ? selectedStars * 20 + '%' : '0%'}">
            <span class="rating__frate"></span>
            <span class="rating__frate"></span>
            <span class="rating__frate"></span>
            <span class="rating__frate"></span>
            <span class="rating__frate"></span>
        </div>

    </div>

    <div class="rating-star">4.5
        <span class="rating__num">(65)</span>
    </div>

</template>

<script>
import { ref } from 'vue'

export default {
    setup(){
        // data
        const stars = ref([
            { name: 'عالی', count: 5 },
            { name: 'خوب', count: 4 },
            { name: 'معمولی', count: 3 },
            { name: 'ضعیف', count: 2 },
            { name: 'بد', count: 1 }
        ])
        const selectedStars = ref(0)
        const isShowSelectedStars = ref(true)

        // methods
        const getStars = (count) => {
            // set count of stars at the selected-stars
            selectedStars.value = count
        }

        const toggleShowSelectedStarts = () => {
            // show / hide - selected-stars
            isShowSelectedStars.value = !isShowSelectedStars.value
        }

        return {
            stars, selectedStars, isShowSelectedStars,
            getStars, toggleShowSelectedStarts
        }
    }
}
</script>

<style>

</style>