<template>

    <header class="header">
        
        <div class="header__shape">
            <div class="header__shape-inner"></div>
        </div>
    
        <div class="container">
            
            <div class="navbar">
                <div class="navbar__row">
                    
                    <div class="header__logo"><router-link :to="{name: 'home'}" class="header__logo-img"></router-link></div>
                    
                    <div class="navbar__items" :class="{'navbar__items--is-active': isShowSidebar}">
                        <ul class="navbar__ul">
                            <li class="navbar__item"><router-link :to="{name: 'home'}" class="navbar__link navbar__link--is-active">صفحه اصلی</router-link>
                            </li>
                            <li class="navbar__item navbar__item--has-sub"><a href="" class="navbar__link">فروشگاه</a>
                                <ul class="navbar__subset">
                                    <li class="navbar__item"><a href="" class="navbar__link">زیر منو 1</a></li>
                                    <li class="navbar__item"><a href="" class="navbar__link">زیر منو 2</a></li>
                                    <li class="navbar__item navbar__item--has-sub"><a href="" class="navbar__link">زیر منو
                                        3</a>
                                        <ul class="navbar__subset">
                                            <li class="navbar__item"><a href="" class="navbar__link">زیر منو 1</a></li>
                                            <li class="navbar__item"><a href="" class="navbar__link">زیر منو 2</a></li>
                                            <li class="navbar__item navbar__item--has-sub"><a href="" class="navbar__link">زیر
                                                منو 3</a>
                                                <ul class="navbar__subset">
                                                    <li class="navbar__item"><a href="" class="navbar__link">زیر منو 1</a>
                                                    </li>
                                                    <li class="navbar__item"><a href="" class="navbar__link">زیر منو 2</a>
                                                    </li>
                                                    <li class="navbar__item"><a href="" class="navbar__link">زیر منو 3</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="navbar__item"><router-link :to="{name: 'category'}" class="navbar__link">دسته بندی</router-link></li>
                            <li class="navbar__item"><a href="" class="navbar__link">تماس باما</a></li>
                        </ul>
                    </div>

                    <div class="navbar__action">
                        
                        <div class="header__basket">
                            <span class="header__basket-icon" @click="toggleCartDropdown"></span>
                            <span class="header__basket-count"> {{ cartItems.length }} </span>
                            <div class="header__dropdown" :class="{'header__dropdown--is-active': dropdowns.isShowCart}">
                                <div class="header__dropdown-content header__dropdown-content--overflow">

                                    <div class="header__basket-item" v-for="(item, index) in cartItems" :key="item.id">
                                        <router-link :to="{name: 'product', params: {id: item.id}}" class="header__basket-link">
                                            <img :src="require(`@/assets/img/slider/${item.id}.jpg`)" class="header__basket-img">
                                        </router-link>
                                        <div class="header__basket-details">
                                            <h5><router-link :to="{name: 'product', params: {id: item.id}}"  class="header__basket-title"> {{ item.title }} ( {{ item.count }} ) </router-link></h5>
                                            <div class="header__basket-price">{{ item.price.toLocaleString('fa') }} تومان</div>
                                            <a href="" @click.prevent="removeCartItem(index)" class="header__basket-remove">حذف</a>
                                        </div>
                                    </div>

                                    <div v-if="cartItems.length <= 0"
                                        style="text-align: center"
                                    >
                                        Empty
                                    </div>

                                    <div class="header__basket-btn">
                                        <router-link :to="{name: 'cart'}" @click="toggleCartDropdown" class="btn btn--boxshadow btn--brand w--100">ثبت و نهایی کردن
                                            سفارش</router-link>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="header__account">
                            <span class="header__account-icon" @click="toggleAccountDropdown"></span>
                            <div class="header__dropdown header__dropdown--w200" :class="{'header__dropdown--is-active': dropdowns.isShowAccount}">
                                <div class="header__dropdown-content">
                                    <router-link :to="{name: 'login'}" @click="toggleAccountDropdown" class="header__account-link">ورود</router-link>
                                    <router-link :to="{name: 'register'}" @click="toggleAccountDropdown" class="header__account-link">ثبت نام</router-link>
                                </div>
                            </div>
                        </div>

                        <div 
                            class="header__menu"
                            :class="{'header__menu--is-active': isShowSidebar}"
                            @click="toggleSidebar"
                        >

                        </div>
                    </div>

                </div>
            </div>

        </div>

    </header>

    <div 
        class="overlay"
        :class="{'overlay--is-active': isShowSidebar}"
        @click="toggleSidebar"
    >

    </div>

</template>

<script>
import { computed, onBeforeMount, onMounted, onUnmounted, reactive, ref } from 'vue'
import { useStore } from 'vuex'

export default {
    setup(){
        // data
        const dropdowns = reactive({
            isShowCart: false,
            isShowAccount: false
        })
        const isShowSidebar = ref(false)
        const store = useStore()

        // computed
        const cartItems = computed(() => {
            return store.state.cart.items
        })

        // methods
        const toggleCartDropdown = () => {
            // close and hide the acccount dropdown - another dropdown
            dropdowns.isShowAccount = false

            // show or hide the cart-dropdown by each base click 
            dropdowns.isShowCart = !dropdowns.isShowCart
        }

        const toggleAccountDropdown = () => {
            // come hide another dropdowns - in fact hide the card-dropdown
            dropdowns.isShowCart = false

            // show or hide the account-dropdown by base each click
            dropdowns.isShowAccount = !dropdowns.isShowAccount
        }

        const eventListeners = (event) => {
            // if on the cart-dropdown or account-dropdown clicked come dont any do 
            // only when clicked on the page come hide all dropdowns
            if(!event.target.closest('.header__basket, .header__account')){
                // reset dropdown- hide all dropdowns
                dropdowns.isShowCart = false
                dropdowns.isShowAccount = false
            }
        }

        const toggleSidebar = () => {
            // open or close the sidebar
            isShowSidebar.value = !isShowSidebar.value
        }

        const getCartData = () => {
            // go to store and get cart items
            store.dispatch('cart/getItems')
        }

        const removeCartItem = (index) => {
            // go to store and remove item
            store.dispatch('cart/removeItem', index)
        }

        // lifecycle hooks
        onBeforeMount(() => {
            getCartData()
        })

        onMounted(() => {
            document.addEventListener('click', eventListeners)
        })

        onUnmounted(() => {
            document.removeEventListener('click', eventListeners)
        })

        return {
            dropdowns, isShowSidebar, cartItems,
            toggleCartDropdown, toggleAccountDropdown,
            toggleSidebar, removeCartItem
        }
    }
}
</script>

<style>

</style>