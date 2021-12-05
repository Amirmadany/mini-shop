<template>

    <main class="main">
    
        <div class="container">
            
            <div class="cart">
                
                <h1 class="cart__title">سبد خرید</h1>
                
                <form action="">
                    
                    <CartItem  
                        v-for="(item, index) in items" :key="index + item.id"
                        :item="{ ...item, index }"
                    />  

                </form>

                <div class="cart__info">
                    <div class="cart__coupon">
                        <form action="">
                            <div class="cart__coupon-div">
                                <input type="text" placeholder="کوپن خود را بنویسد" class="cart__coupon-input">
                                <button class="btn-coupon">اعمال</button>
                            </div>
                        </form>
                    </div>
                    <div class="cart__table">
                        <table>
                            <tbody>
                            <tr>
                                <th>جمع کل</th>
                                <td>{{ totalPrice.toLocaleString('fa') }} تومان</td>
                            </tr>
                            <tr>
                                <th>وزن</th>
                                <td>700 گرم</td>
                            </tr>
                            <tr>
                                <th>مالیات</th>
                                <td>{{ (totalPrice * 0.04).toLocaleString('fa') }} تومان</td>
                            </tr>
                            <tr>
                                <th>تخفیف</th>
                                <td class="text-red">0 تومان</td>
                            </tr>
                            <tr>
                                <th>قیمت تمام شده</th>
                                <td class="text-blue">{{ (totalPrice * 1.04).toLocaleString('fa') }} تومان</td>
                            </tr>
                            </tbody>
                        </table>
                        <button class="btn btn--brand btn--boxshadow">ثبت سفارش</button>
                    </div>
                </div>

            </div>

        </div>

    </main>

</template>

<script>
import { computed, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'

// components
import CartItem from '../components/CartItem.vue'

export default {
    components: {
        CartItem
    },

    setup(){
        // data
        const store =  useStore()

        // computed
        const items = computed(() => {
            return store.state.cart.items
        })
        const totalPrice = computed(() => {
            return store.getters['cart/getTotalPrice']
        })

        // lifecycle hooks
        onMounted(() => {
            // add new style to header
            document.querySelector('.header').classList.add('header--bg')
        })

        onUnmounted(() => {
            // remove new style of header
            document.querySelector('.header').classList.remove('header--bg')
        })

        return {
            items, totalPrice
        }
    }
}
</script>

<style>

</style>