<script setup>
import Header from '@/components/Header.vue';
import ProductInfoVue from '@/components/ProductInfo.vue';
import Footer from '@/components/Footer.vue';

import state from './plpState';
import { onMounted } from "vue";
import { getProducts } from "./services";

onMounted(() => {
    getProducts();
});
</script>

<template>
    <Header />
    <main>
        <div class="banner">
            <h1 class="banner-caption">New Season <br>Arrivals!</h1>
        </div>
        <section>
            <nav class="side-nav">
                <ul>
                    <li>
                        <h3>Categories</h3>
                    </li>
                    <div>
                        <form>
                            <input type="checkbox" id="books" name="books" value="books">
                            <label for="books"> Books</label><br><br>
                            <input type="checkbox" id="electronics" name="electronics" value="electronics">
                            <label for="electronics"> Electronics</label><br><br>
                            <input type="checkbox" id="fashion" name="fashion" value="fashion">
                            <label for="fashion"> Fashion</label><br><br>
                            <input type="checkbox" id="furniture" name="furniture" value="furniture">
                            <label for="furniture"> Furniture</label><br><br>
                            <input type="checkbox" id="sports" name="sports" value="sports">
                            <label for="sports"> Sports</label><br><br>
                            <input type="checkbox" id="care" name="care" value="care">
                            <label for="care"> Personal Care</label><br><br>
                        </form>
                    </div>
                    <li>
                        <h3>Price Range</h3>
                    </li>
                    <div>
                        <form>
                            <input type="checkbox" id="pr1" name="pr1" value="pr1">
                            <label for="pr1"> Less than $100</label><br><br>
                            <input type="checkbox" id="pr2" name="pr2" value="pr2">
                            <label for="pr2"> $101 - $300</label><br><br>
                            <input type="checkbox" id="pr3" name="pr3" value="pr3">
                            <label for="pr3"> $301 - $500</label><br><br>
                            <input type="checkbox" id="pr4" name="pr4" value="pr4">
                            <label for="pr4"> $501 - $700</label><br><br>
                            <input type="checkbox" id="pr5" name="pr5" value="pr5">
                            <label for="pr5"> Above $701</label><br><br>
                        </form>
                    </div>
                    <!-- <li>
                        <h3>Sort by Price Range</h3>
                    </li> -->
                </ul>
            </nav>
            <div class="product-container">
                <ProductInfoVue v-for="data in state.results" :data="data" />
            </div>
        </section>
    </main>
    <Footer />
</template>

<style scoped>
@import "./plp.css";
</style>