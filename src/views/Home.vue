<template>

    <div class="main">

        <div class="container">

            <div class="header__top">
                <div class="header__top-content">
                    <h1 class="header__top-h1">ویو آموز : پلی برای یادگیری</h1>
                    <p class="header__top-p">با کمترین هزینه حرفه ای شو</p>
                </div>
                <form class="header__form">
                    <div class="header__search">
                        <input type="text" class="header__serach-input" placeholder="جستجو کنید...">
                        <button class="header__search-btn btn btn--brand btn--boxshadow"></button>
                    </div>
                </form>
            </div>

            <Slider />

            <ProductSlider>

                <template v-slot:title>
                    موبایل
                </template>

                <router-link :to="{name: 'product', params:{ id: product.id }}" class="swiper-slide"
                    v-for="product in products" :key="product.id"
                >
                    
                    <div class="card">
                        <div class="card__image">
                            <img :src="require('@/assets/img/slider/1.jpg')" alt="" class="card__img">
                        </div>
                        <div class="card__title">
                            {{ product.title }}
                        </div>
                        <div class="card__price">
                            <span class="card__compare-price">{{ (product.price * 1.13).toLocaleString('fa') }}</span>
                            <span class="card__total-price">{{ product.price.toLocaleString('fa') }} تومان</span>
                        </div>
                        <span class="card__discount">%6</span>
                    </div>
                    
                </router-link>

            </ProductSlider>

            <ProductSlider>

                <template v-slot:title>
                    لپ تاپ
                </template>

                <router-link :to="{name: 'product', params: {id: product}}" class="swiper-slide"
                    v-for="product in 6" :key="product"
                >
                    
                    <div class="card">
                        <div class="card__image">
                            <img :src="require('@/assets/img/slider/1.jpg')" alt="" class="card__img">
                        </div>
                        <div class="card__title">
                            گوشی موبایل سامسونگ مدل نوت 20
                        </div>
                        <div class="card__price">
                            <span class="card__compare-price">12,200,000</span>
                            <span class="card__total-price">12,400,000 تومان</span>
                        </div>
                        <span class="card__discount">%6</span>
                    </div>
                    
                </router-link>

            </ProductSlider>

        </div>

    </div>

</template>

<script>
// components
import Slider from '../components/Slider.vue'
import ProductSlider from '../components/ProductSlider.vue'

import { mapState } from 'vuex'
import productsModules from '../store/modules/products/index'

export default {
    components: {
        Slider,
        ProductSlider
    },
    
    computed: {
        ...mapState('products', ['products'])
    },

    created(){
        // if not exist products module come add to store
        if(!this.$store.hasModule('products'))
            this.$store.registerModule('products', productsModules)
    }
}
</script>

<style>

</style>