<template>

    <main class="main">
        
        <div class="container">
           
            <div class="page">
            
                <div class="page__sidebar">
                    
                    <div class="box" v-show="selectedFilters.length > 0">
                        <div class="box-filters">
                            <div class="box-filters__header">
                                <span class="box-filters__title">فیلتر های اعمال شده</span>
                                <a href="" class="box-filters__clear" @click.prevent="removeAllFilters">حذف همه</a>
                            </div>
                            <ul class="box-filters__ul">
                                
                                <li class="box-filters__li" v-for="(filter, index) in selectedFilters" :key="filter + index">
                                    <button class="box-filters__button" @click="removeFilter(index)"></button>
                                    <span class="box-filters__name">{{ filter }}</span>
                                </li>
                            
                            </ul>
                        </div>
                    </div>

                    <FilterDropdown>
                        
                        <template v-slot:title>
                            برند ها
                        </template>

                        <ul class="box__ul">
                            
                            <li class="box__li">
                                <label class="ui-checkbox" data-fa="سامسونگ" data-en="Sumsung" data-serach="Sumsung سامسونگ">
                                    <input type="checkbox" class="ui-checkbox__input" value="سامسونگ" v-model="selectedFilters">
                                    <span class="ui-checkbox__mark"></span>
                                    سامسونگ
                                </label>
                            </li>
                            
                            <li class="box__li">
                                <label class="ui-checkbox" data-fa="سونی" data-en="sony" data-serach="sony سونی">
                                    <input type="checkbox" class="ui-checkbox__input" value="سونی" v-model="selectedFilters">
                                    <span class="ui-checkbox__mark"></span>
                                    سونی
                                </label>
                            </li>

                            <li class="box__li">
                                <label class="ui-checkbox" data-fa="اپل" data-en="apple" data-serach="apple اپل">
                                    <input type="checkbox" class="ui-checkbox__input" value="اپل" v-model="selectedFilters">
                                    <span class="ui-checkbox__mark"></span>
                                    اپل
                                </label>
                            </li>

                        </ul>

                    </FilterDropdown>

                    <FilterDropdown>
                        
                        <template v-slot:title>
                            رنگ ها
                        </template>

                        <ul class="box__ul">
                            <li class="box__li">
                                <label class="ui-checkbox" data-fa="مشکی" data-serach="balck مشکی">
                                    <input type="checkbox" class="ui-checkbox__input" value="مشکی" v-model="selectedFilters">
                                    <span class="ui-checkbox__mark"></span>
                                    مشکی
                                    <span class="filter__color" style="background: rgb(0,0,0)"></span>
                                </label>
                            </li>
                            <li class="box__li">
                                <label class="ui-checkbox" data-fa="آبی" data-serach="blue آبی">
                                    <input type="checkbox" class="ui-checkbox__input" value="آبی" v-model="selectedFilters">
                                    <span class="ui-checkbox__mark"></span>
                                    آبی
                                    <span class="filter__color" style="background: rgb(0,0,255)"></span>
                                </label>
                            </li>
                        </ul>

                    </FilterDropdown>

                    <div class="box box--switcher">
                        <label class="ui-switcher">
                            <input type="checkbox" class="ui-switcher__input">
                            <span class="ui-switcher__slider">
                                <span class="ui-switcher__toggle"></span>
                            </span>
                            فقط کالای های موجود
                        </label>
                    </div>

                </div>
            
                <div class="page__content">
                    
                    <ul class="breadcrumb">
                        <li class="breadcrumb__item breadcrumb__item--hide"><a href="" class="breadcrumb__link"><span
                                class="breadcrumb__span">صفحه اصلی</span></a></li>
                        <li class="breadcrumb__item"><a href="" class="breadcrumb__link"><span class="breadcrumb__span">فهرست محصولات</span></a>
                        </li>
                        <li class="breadcrumb__item"><a href="" class="breadcrumb__link"><span class="breadcrumb__span">محصول شماره یک</span></a>
                        </li>
                    </ul>

                    <div class="products">
                        
                        <router-link :to="{name: 'product', params: {id: product}}" class="products__item"
                            v-for="product in 6" :key="product"
                        >
                            <div class="card">
                                <div class="card__image">
                                    <img :src="require(`@/assets/img/slider/${product}.jpg`)" alt="" class="card__img">
                                </div>
                                <div class="card__title">
                                    گوشی موبایل سامسونگ مدل نوت 20
                                </div>
                                <div class="card__price">
                                    <span class="card__compare-price">155,000,000 تومان</span>
                                    <span class="card__total-price">155,000,000 تومان</span>
                                </div>
                                <span class="card__discount">%6</span>
                            </div>
                        </router-link>
                        
                    </div>

                </div>
            
            </div>
            
        </div>
    </main>

</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue'

// components
import FilterDropdown from '../components/FilterDropdown.vue'

export default {
    components: {
        FilterDropdown
    },

    setup(){
        // data
        const selectedFilters = ref([])

        // methods
        const removeAllFilters = () => {
            selectedFilters.value = []
        }

        const removeFilter = (index) => {
            // remove selcted filter
            selectedFilters.value.splice(index, 1)
        }

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
            selectedFilters,
            removeAllFilters, removeFilter
        }
    }
}
</script>

<style>

</style>