<template>

    <div class="cart__item">
    
        <div class="cart__row">
            
            <div class="cart__image">
                
                <router-link :to="{ name: 'product', params: { id: item.id } }" class="cart__image-link">
                    <img :src="require(`@/assets/img/slider/${item.id}.jpg`)" alt="" class="cart__image-img">
                </router-link>

            </div>
            
            <div class="cart__details">
                <h5 class="cart__details-h5">
                    <router-link :to="{ name: 'product', params: { id: item.id } }" class="cart__details-link">
                        {{ item.title }}
                    </router-link>
                </h5>
                <div class="cart__deatils-code"> تعداد :{{ item.count }}</div>
            </div>
            
            <div class="cart__amounts">
                <div class="cart__amounts-div">
                    <input v-model="count" type="number" class="txt" placeholder="تعداد" max="1000" min="1">
                    <div class="cart__amounts-price"><span>{{ item.price.toLocaleString('fa') }} تومان</span></div>
                    <a href="#" @click="removeCartItem(item.index)" class="cart__amounts-remove">حذف</a>
                </div>
            </div>

            <div class="cart__total">
                <div class="cart__total-div">
                    <h6 class="cart__total-title">جمع</h6>
                   {{ (item.price * item.count).toLocaleString('fa') }}
                </div>
            </div>
            
        </div>
        
    </div>

</template>

<script>
import { ref, watch } from 'vue'
import { useStore } from 'vuex'

export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },

    setup(props){
        // data
        const store = useStore()
        const count = ref(props.item.count)

        // methods
        const removeCartItem = (index) => {
            // go to store and remvove item by base index
            store.dispatch('cart/removeItem', index)
        }

        // watch
        watch(count, (value) => {
            // if value less than 1 come set 1 
            if(value < 1)
                count.value = 1

            // go to store and increase count
            store.dispatch('cart/increaseItemCount', {
                count: value,
                id: props.item.id
            })
        })

        return {
            count,
            removeCartItem
        }
    }
}
</script>

<style>

</style>