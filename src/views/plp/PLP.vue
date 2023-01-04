<script setup>
import Header from '@/components/Header.vue';
import ProductInfoVue from '@/components/ProductInfo.vue';
import Footer from '@/components/Footer.vue';

import state from './plpState';
import { onMounted, watch, ref } from "vue";
import { getProducts } from "./services";
import { getProducts2 } from "./services";
import { getProducts3 } from "./services";

watch(() => state.searchKey, () => {
    state.results = [];
    getProducts();
})

watch(() => state.checkCategory, () => {
    state.results = [];
    getProducts2(state.checkCategory);
})

watch(() => state.checkPriceRange, () => {
    state.results = [];
    getProducts3(state.checkPriceRange);
})

onMounted(() => {
    getProducts();
});
</script>

<template>
    <Header>
        <template v-slot:search>
            <input type="search" placeholder="search for products" v-model="state.searchKey">
        </template>
    </Header>
    <main>
        <div class="banner">
            <div class="banner-caption">
                <h1>New Season <br>Arrivals!</h1>
            </div>
            <div class="banner-image">
                <img src="../../../public/banner.jpg" alt="banner">
            </div>
        </div>
        <section>
            <nav class="side-nav">
                <ul>
                    <li>
                        <h3>Categories</h3>
                    </li>
                    <div>
                        <form>
                            <input type="checkbox" id="books" name="books" value="books" v-model="state.checkCategory">
                            <label for="books"> Books</label><br><br>
                            <input type="checkbox" id="electronics" name="electronics" value="electronics" v-model="state.checkCategory">
                            <label for="electronics"> Electronics</label><br><br>
                            <input type="checkbox" id="fashion" name="fashion" value="fashion" v-model="state.checkCategory">
                            <label for="fashion"> Fashion</label><br><br>
                            <input type="checkbox" id="furniture" name="furniture" value="furniture" v-model="state.checkCategory"> 
                            <label for="furniture"> Furniture</label><br><br>
                            <input type="checkbox" id="sports" name="sports" value="sports" v-model="state.checkCategory">
                            <label for="sports"> Shoes</label><br><br>
                            <input type="checkbox" id="care" name="care" value="personal care" v-model="state.checkCategory">
                            <label for="care"> Personal Care</label><br><br>
                        </form>
                    </div>
                    <li>
                        <h3>Price Range</h3>
                    </li>
                    <div>
                        <form>
                            <input type="checkbox" id="pr1" name="pr1" value="100" v-model="state.checkPriceRange">
                            <label for="pr1"> Less than $100</label><br><br>
                            <input type="checkbox" id="pr2" name="pr2" value="101-300" v-model="state.checkPriceRange">
                            <label for="pr2"> $101 - $300</label><br><br>
                            <input type="checkbox" id="pr3" name="pr3" value="301-500" v-model="state.checkPriceRange">
                            <label for="pr3"> $301 - $500</label><br><br>
                            <input type="checkbox" id="pr4" name="pr4" value="501-700" v-model="state.checkPriceRange">
                            <label for="pr4"> $501 - $700</label><br><br>
                            <input type="checkbox" id="pr5" name="pr5" value="701" v-model="state.checkPriceRange">
                            <label for="pr5"> Above $701</label><br><br>
                        </form>
                    </div>
                </ul>
            </nav>
            <div class="product-container">
                <ProductInfoVue v-for="data in state.results"  :data="data" />
            </div>
        </section>
    </main>
    <Footer />
</template>

<style scoped>
@import "./plp.css";
</style>