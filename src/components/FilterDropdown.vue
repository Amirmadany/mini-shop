<template>

    <div class="box">
    
        <div class="box__row">
        
            <div 
                class="box__header" 
                :class="{'box--togglable': !isShowFilter}"
                @click="toggleShowFilter"
            >
                <slot name="title"/>
            </div>
        
            <div class="box__filter" ref="filterElement"
                :style="{
                    'overflow': !isShowFilter ? 'hidden' : 'auto',
                    'height': currentHeight + 'px !important',
                    'overflow-y': 'hidden'
                }"
            >
                
                <div class="box__content-container">
                    
                    <div class="box__content">
                        <slot />
                    </div>
                
                </div>
            
            </div>
        
        </div>
    
    </div>

</template>

<script>
import { onMounted, ref } from 'vue'

export default {
    setup(){
        // data
        const isShowFilter = ref(true)
        const filterElement = ref()
        const heightContent = ref(0)
        const currentHeight = ref()
        const intervalHeight = ref(null)

        // methods 
        const toggleShowFilter = () => {
            // if exist interval on the height come back
            if(intervalHeight.value != null) return

            // change status show filter to reverse - hide or show
            isShowFilter.value = !isShowFilter.value  
            
            // if filter want to be hide
            if(!isShowFilter.value)
                intervalHeight.value = setInterval(() => {
                // if height be 0 come clear iterate
                if(currentHeight.value <= 0){
                    clearInterval(intervalHeight.value)
                    intervalHeight.value = null
                }

                // come subtarct of current-height
                currentHeight.value -= heightContent.value / 100
            }, 75 / 100);

            // if filter want to be show
            if(isShowFilter.value)
                intervalHeight.value = setInterval(() => {
                    // when current height be ful come reset and clear the time
                    if(currentHeight.value >= heightContent.value){
                        clearInterval(intervalHeight.value)
                        intervalHeight.value = null
                    }

                    // increase height 
                    currentHeight.value += heightContent.value / 100
                }, 75 / 100)        
        }
         
        const getHeightFilterContent = () => {
            // get height content 
            heightContent.value = filterElement.value.offsetHeight
            
            // apply height on the current-height
            currentHeight.value = heightContent.value
        }

        // lifecycle hooks
        onMounted(() => {
            getHeightFilterContent()
        })

        return {
            isShowFilter, filterElement, currentHeight,
            toggleShowFilter
        }
    }
}
</script>

<style>

</style>