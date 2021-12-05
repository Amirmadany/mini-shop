<template>

    <Modal :isShowing="isShowingModal" @close="closeModal">
        <img :src="require(`@/${modalImage}`)" class="show__gallery">
    </Modal>

    <div class="prodcut__gallery">
                    
        <div class="gallery">

            <span class="gallery__count">
                <span class="gallery__number1"> {{ currentSlideIndex + 1 }} </span>
                <span class="gallery__number2">{{ images.length }}</span>
            </span>
            
            <div class="gallery__slides">

                <div 
                    class="gallery__slide"
                    v-for="(image, index) in images" :key="image + index"
                    v-show="index == currentSlideIndex"
                    @click="showImageAtModal(image)"
                >
                    <img class="gallery__img" :src="require(`@/${image}`)" alt="">
                </div>

            </div>
            
            <a @click="move(-1)" class="gallery__prev">&#10094;</a>
            <a @click="move(1)" class="gallery__next">&#10095;</a>
            
            <div class="gallery__content">
                
                <div class="gallery__items">

                    <div 
                        class="gallery__item"
                        v-for="(image, index) in images" :key="index + image" 
                        :class="{'gallery__item--is-acitve': index == currentSlideIndex}"
                        @click="changeCurrentSlide(index)"
                    >
                        <img :src="require(`@/${image}`)" class="gallery__item-img">
                    </div>

                </div>

            </div>

        </div>
                    
    </div>

</template>

<script>
import { ref } from 'vue'

// components
import Modal from './Modal.vue'

// composables
import useMove from '../composables/useMove'

export default {
    components: {
        Modal
    },

    props: {
        images: {
            type: Array,
            required: true
        }
    },

    setup(props){
        // data
        const { currentSlideIndex, move } = useMove(props.images)
        const isShowingModal = ref(false)
        const modalImage = ref(null)
        const bodyTag = ref(null)

        // methods
        const changeCurrentSlide = (index) => {
            currentSlideIndex.value = index
        }

        const showImageAtModal = (image) => {
            // show modal
            isShowingModal.value = true

            // set image in the modalImage
            modalImage.value = image

            // give scroll option from body tag when modal is showing
            disableScrollOption()
        }

        const closeModal = () => {
            // close the modal
            isShowingModal.value = false

            // enable scroll option when modal is not showing
            bodyTag.value.style.overflow = 'unset'
        }

        const disableScrollOption = () => {
            // if exist body tag come not get
            if(bodyTag.value == null)   
                bodyTag.value = document.body

            // give scroll option from body tag
            bodyTag.value.style.overflow = 'hidden'
        }

        return {
            currentSlideIndex, isShowingModal, modalImage,
            move, changeCurrentSlide, showImageAtModal,
            closeModal
        }
    }
}
</script>

<style scoped> 

    .gallery__number1{
        margin-left: 0.4rem;
    }

</style>