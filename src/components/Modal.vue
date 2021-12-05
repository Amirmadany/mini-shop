<template>

    <div @click="closeModal" class="modal" v-if="isShowing">
        
        <div class="modal__content">
    
            <span class="modal__close">&times;</span>
    
            <div class="modal__body">
    
                <slot />
    
            </div>
    
        </div>
    
    </div>

</template>

<script>
// use modal style
import '../assets/css/modal.css'

export default {
    props: {
        isShowing: Boolean
    },

    emits: ['close'],

    setup(props, { emit }){
        // methods
        const closeModal = (event) => {
            // if without of modal-content clicked come close the modal
            if(event.target.closest('.modal__body')) return

            emit('close')
        }

        return {
            closeModal
        }
    }
}
</script>

<style>

</style>