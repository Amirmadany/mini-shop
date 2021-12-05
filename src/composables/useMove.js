import { ref } from 'vue'

export default (slides) => {
    // data
    const currentSlideIndex = ref(0)

    // methods
    const move = (count = 1) => {
        // if current-slide be in the last slide come back to first slide
        if(currentSlideIndex.value + count > slides.length - 1)
            currentSlideIndex.value = 0

        // else if current-slide be in the first slide and want to prev come go to last slide
        else if(currentSlideIndex.value + count < 0)
            currentSlideIndex.value = slides.length - 1

        else
            // come move to next slide
            currentSlideIndex.value += count
    }

    return { 
        currentSlideIndex,
        move
    }
}