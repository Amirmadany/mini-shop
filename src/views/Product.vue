<template>

    <main class="main">
     
        <div class="container">
   
            <ul class="breadcrumb">
                <li class="breadcrumb__item breadcrumb__item--hide"><a href="" class="breadcrumb__link"><span
                        class="breadcrumb__span">صفحه اصلی</span></a></li>
                <li class="breadcrumb__item"><a href="" class="breadcrumb__link"><span class="breadcrumb__span">فهرست محصولات</span></a>
                </li>
                <li class="breadcrumb__item"><a href="" class="breadcrumb__link"><span class="breadcrumb__span">محصول شماره یک</span></a>
                </li>
            </ul>

            <div class="product">

                <div class="product__header">
                
                    <CountDown :date="countDownDate"/>

                    <div class="product__row">

                        <Gallery :images="gallerySlides"/>

                        <div class="product__left">

                            <div class="product__category">دسته وب</div>

                            <div class="product__info">
                            
                                <h1 class="product__title">{{ product.title }}</h1>

                                <Rating />

                            </div>

                            <button @click="addToCart" class="btn btn--boxshadow btn--brand">اضافه به سبد خرید</button>

                        </div>

                    </div>

                </div>

                <div class="product__desc">
                    <p class="product__desc-content">

                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها
                        و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                        کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                        از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر
                        آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                        کاربردی می باشد.
                    </p>
                </div>
                
            </div>

            <ProductSlider>

                <template v-slot:title>
                    سایر محصولات
                </template>

                <router-link :to="{name: 'product', params: {id: product}}" class="swiper-slide"
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
                            <span class="card__compare-price">12,200,000</span>
                            <span class="card__total-price">12,400,000 تومان</span>
                        </div>
                        <span class="card__discount">%6</span>
                    </div>
                    
                </router-link>

            </ProductSlider>

            <div class="product-details">
                
                <div class="tab">
                    
                    <div class="tab__items">
                        <span class="tab__item tab__item--compare"
                              :class="{'tab__item--is-active': activeTab == 'compare'}"
                              @click="changeTab('compare')">نقد و برسی</span>
                        <span class="tab__item tab__item--featrues"
                              :class="{'tab__item--is-active': activeTab == 'featrues'}"
                              @click="changeTab('featrues')">ویژیگی ها</span>
                        <span class="tab__item tab__item--comments"
                              :class="{'tab__item--is-active': activeTab == 'comments'}"
                              @click="changeTab('comments')">نظرات</span>
                    </div>
                    
                    <div class="tab__sections">
                        
                        <section v-show="activeTab == 'compare'" class="tab__section tab__section--compare">
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و <a href="#" style="user-select: auto;">برای
                                    شرایط فعلی تکنولوژی</a> مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                                باشد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                گرافیک است. <strong>چاپگرها و متون بلکه روزنامه</strong> و مجله در ستون و سطرآنچنان که لازم
                                است و برای شرایط فعلی تکنولوژی <s>مورد نیاز و کاربردهای</s> متنوع با هدف بهبود ابزارهای
                                کاربردی می باشد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                                طراحان
                                گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
                                فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با <u>هدف بهبود ابزارهای
                                    کاربردی می باشد</u>.</p>
                            <h1>سرتیتر بزرگ از نوع h1</h1>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                                تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                                ابزارهای کاربردی می باشد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                                است و برای شرایط فعلی تکنولوژی مورد نیاز
                                و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. لورم ایپسوم متن ساختگی با تولید
                                سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. <em>چاپگرها
                                    و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</em></p>
                            <h2>سرتیتر h2</h2>
                            <blockquote>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                                    است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
                                    فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                                    بهبود ابزارهای کاربردی می باشد.
                                </p>
                            </blockquote>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                                تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                                ابزارهای کاربردی می باشد.&nbsp;لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                                با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                                لازم است و برای شرایط فعلی تکنولوژی مورد
                                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.&nbsp;لورم ایپسوم متن ساختگی با
                                تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                                روزنامه و مجله در ستون و سطرآنچنان که لازم
                                است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                                باشد.</p>
                            <hr>
                            <p><strong>سرتیتر درشت</strong></p>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                                تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                                ابزارهای کاربردی می باشد.</p>
                            <ul>
                                <li>گزینه ی اول فهرست بدون شماره</li>
                                <li>گزینه ی دوم برای نمونه</li>
                                <li>گزینه ی سود</li>
                                <li>الی آخر...</li>
                            </ul>
                            <h3>سرتیتر h3</h3>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از <span style="color: rgb(226, 80, 65);">صنعت چاپ و با استفاده</span>
                                از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                                برای شرایط فعلی
                                تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. لورم ایپسوم متن
                                ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                                بلکه روزنامه و مجله در ستون و سطرآنچنان
                                که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                                کاربردی می باشد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                                طراحان گرافیک است. چاپگرها و متون بلکه
                                روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                                کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                            <h4>
                                سرتیتر h4</h4>
                            <ol>
                                <li>گزینه ی اول از فهرست مرتب</li>
                                <li>گزینه ی دوم برای نمونه</li>
                                <li>گزینه ی سوم</li>
                                <li>الی آخر...</li>
                            </ol>
                            <p>Est ut equidem facilis nominavi, ei decore menandri salutandi eam, in mei doming recusabo.
                                Detracto deleniti instructior ad pri. Tincidunt maiestatis scribentur id ius, pri ferri
                                brute atqui id. No cum affert euripidis, vix
                                clita molestie an. In eos tempor eripuit consulatu, at probo porro officiis nec, sumo tation
                                persius cu nam. Ad usu ancillae suavitate. Ex suas tamquam ius.</p>
                            <pre>کد دستوری در این&zwnj;جا قرار می&zwnj;گیرد.</pre>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                                تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                                ابزارهای کاربردی می باشد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                                است و برای شرایط فعلی تکنولوژی مورد نیاز
                                و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. لورم ایپسوم متن ساختگی با تولید
                                سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                                مجله در ستون و سطرآنچنان که لازم است و
                                برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                                باشد.</p>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                                تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                                ابزارهای کاربردی می باشد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                                است و برای شرایط فعلی تکنولوژی مورد نیاز
                                و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.<img :src="require('../assets/img/reactjs.png')"></p>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                                تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                                ابزارهای کاربردی می باشد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                                است و برای شرایط فعلی تکنولوژی مورد نیاز
                                و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. لورم ایپسوم متن ساختگی با تولید
                                سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                                مجله در ستون و سطرآنچنان که لازم است و
                                برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                                باشد.</p>

                        </section>
                        
                        <section  v-show="activeTab == 'featrues'" class="tab__section tab__section--featrues">
                            <div class="tab__section-field">
                                <div class="col-3">
                                    <h6 class="tab__section-name">ویژیگی 1</h6>
                                </div>
                                <div class="col-9">
                                    <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                                </div>
                            </div>
                            <div class="tab__section-field">
                                <div class="col-3">
                                    <h6 class="tab__section-name">ویژیگی 1</h6>
                                </div>
                                <div class="col-9">
                                    <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                                </div>
                            </div>
                            <div class="tab__section-field">
                                <div class="col-3">
                                    <h6 class="tab__section-name">ویژیگی 1</h6>
                                </div>
                                <div class="col-9">
                                    <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                                </div>
                            </div>
                            <div class="tab__section-field">
                                <div class="col-3">
                                    <h6 class="tab__section-name">ویژیگی 1</h6>
                                </div>
                                <div class="col-9">
                                    <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                                    <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                                    <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                                    <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                                    <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                                    <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                                    <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                                    <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                                </div>
                            </div>
                            <div class="tab__section-field">
                                <div class="col-3">
                                    <h6 class="tab__section-name">ویژیگی 1</h6>
                                </div>
                                <div class="col-9">
                                    <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                                </div>
                            </div>
                            <div class="tab__section-field">
                                <div class="col-3">
                                    <h6 class="tab__section-name">ویژیگی 1</h6>
                                </div>
                                <div class="col-9">
                                    <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                                </div>
                            </div>
                            <div class="tab__section-field">
                                <div class="col-3">
                                    <h6 class="tab__section-name">ویژیگی 1</h6>
                                </div>
                                <div class="col-9">
                                    <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                                </div>
                            </div>
                        </section>
                        
                        <section v-show="activeTab == 'comments'" class="tab__section tab__section--comments">
                            <div class="comments" id="comments">
                                <div class="comments__send">
                                    <div class="comments__title">
                                        <h3 class="comments__h3">دیدگاه خود را بنویسد</h3>
                                        <span class="comments__count">دیدگاه ها ( 150 )</span>
                                    </div>
                                    <textarea class="txt txt--textarea" placeholder="بنویسد"></textarea>
                                    <button class="btn btn--brand btn--boxshadow">ارسال نظر</button>
                                    <button class="btn btn--cancel btn--boxshadow-cancel">انصراف</button>
                                </div>
                            </div>

                            <div class="comments__list">
                                <div id="comment__1">
                                    <div class="comments__box">
                                        <div class="comments__inner">
                                            <div class="comments__header">
                                                <div class="comments__row">
                                                    <div class="comments__info">
                                                        <div class="comments__avatar"><img :src="require('@/assets/img/profile.jpg')" class="comments__img" alt=""></div>
                                                        <div class="comments__details">
                                                            <h5 class="comments__author"><span class="comments__author-name">محمد نیکو</span></h5>
                                                            <span class="comments__date">555 روز پیش</span>
                                                        </div>
                                                    </div>
                                                    <a href="#comments" class="btn btn--brand btn--reply btn--boxshadow">پاسخ</a>
                                                </div>
                                            </div>
                                            <div class="comments__body">
                                                لورم ایپسوم متـــــــــــــــــــــــــــــــــــــــــــــــــــن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="comment__2">
                                    <div class="comments__box">
                                        <div class="comments__inner">
                                            <div class="comments__header">
                                                <div class="comments__row">
                                                    <div class="comments__info">
                                                        <div class="comments__avatar"><img :src="require('@/assets/img/profile.jpg')" class="comments__img" alt=""></div>
                                                        <div class="comments__details">
                                                            <h5 class="comments__author"><span class="comments__author-name">محمد نیکو</span></h5>
                                                            <span class="comments__date">555 روز پیش</span>
                                                        </div>
                                                    </div>
                                                    <a href="#comments" class="btn btn--brand btn--reply btn--boxshadow">پاسخ</a>
                                                </div>
                                            </div>
                                            <div class="comments__body">
                                                لورم ایپسوم متـــــــــــــــــــــــــــــــــــــــــــــــــــن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                            </div>
                                        </div>
                                        <div class="comments__subset">
                                            <div id="comment__3">
                                                <div class="comments__box">
                                                    <div class="comments__inner">
                                                        <div class="comments__header">
                                                            <div class="comments__row">
                                                                <div class="comments__info">
                                                                    <div class="comments__avatar"><img :src="require('@/assets/img/profile.jpg')" class="comments__img" alt=""></div>
                                                                    <div class="comments__details">
                                                                        <h5 class="comments__author"><span class="comments__author-name">محمد نیکو</span></h5>
                                                                        <span class="comments__date">555 روز پیش</span>
                                                                    </div>
                                                                </div>
                                                                <a href="#comments" class="btn btn--brand btn--reply btn--boxshadow">پاسخ</a>
                                                            </div>
                                                        </div>
                                                        <div class="comments__body">
                                                            لورم ایپسوم متـــــــــــــــــــــــــــــــــــــــــــــــــــن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.

                                                        </div>
                                                    </div>
                                                    <div class="comments__subset">
                                                        <div id="comment__4">
                                                            <div class="comments__box">
                                                                <div class="comments__inner">
                                                                    <div class="comments__header">
                                                                        <div class="comments__row">
                                                                            <div class="comments__info">
                                                                                <div class="comments__avatar"><img :src="require('@/assets/img/profile.jpg')" class="comments__img" alt=""></div>
                                                                                <div class="comments__details">
                                                                                    <h5 class="comments__author"><span class="comments__author-name">محمد نیکو</span></h5>
                                                                                    <span class="comments__date">555 روز پیش</span>
                                                                                </div>
                                                                            </div>
                                                                            <a href="#comments" class="btn btn--brand btn--reply btn--boxshadow">پاسخ</a>
                                                                        </div>
                                                                    </div>
                                                                    <div class="comments__body">
                                                                        لورم ایپسوم متـــــــــــــــــــــــــــــــــــــــــــــــــــن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>

                    </div>

                </div>

            </div>

        </div>
   
    </main>

</template>

<script>
import { computed, onBeforeMount, onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'

// components
import CountDown from '../components/CountDown.vue'
import Gallery from '../components/Gallery.vue'
import Rating from '../components/Rating.vue'
import ProductSlider from '../components/ProductSlider.vue'

// store - vuex
import { useStore } from 'vuex'
import productsModule from '../store/modules/products/index'

export default {
    components:{
        CountDown,
        Gallery,
        Rating,
        ProductSlider
    },

    setup(){
        // data
        const countDownDate = ref('Sat Nov 21 2021 13:33:24')
        const gallerySlides = ref([
            'assets/img/gallery/1.jpg',
            'assets/img/gallery/2.jpg',
            'assets/img/gallery/3.jpg',
            'assets/img/gallery/4.jpg',
            'assets/img/gallery/1.jpg',
            'assets/img/gallery/2.jpg',
            'assets/img/gallery/3.jpg'
        ])
        const activeTab = ref('compare') //3 modes => compare, features, comments
        const route = useRoute()
        const store = useStore()

        // computed
        const product = computed(() => {
            return store.getters['products/getProductById'](route.params.id)
        })

        // methods
        const changeTab = (tab) => {
            // change active tab
            activeTab.value = tab
        }
        
        const addToCart = () => {
            // add product to the cart
            store.dispatch('cart/addItem', product.value)
        }

        const useStoreProducts = () => {
            // if we dont have products modules in the store come add 
            if(!store.hasModule('products'))
                store.registerModule('products', productsModule)
        }

        // lifecycle hooks
        onBeforeMount(() => {
            useStoreProducts()
        })

        onMounted(() => {
            // add new style to header
            document.querySelector('.header').classList.add('header--bg')
        })

        onUnmounted(() => {
            // remove new style of header
            document.querySelector('.header').classList.remove('header--bg')
        })

        return {
            countDownDate, gallerySlides, activeTab, product,
            changeTab, addToCart
        }
    }
}
</script>

<style>

</style>