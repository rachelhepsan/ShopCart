<script setup>
import Header from '@/components/Header.vue';
import ProductInfoVue from '@/components/ProductInfo.vue';
import SideNavBar from "@/components/SideNavBar.vue";
import Footer from '@/components/Footer.vue';

import state from './plpState';
import { onMounted, watch, ref } from "vue";
import { getProducts } from "./plpServices";
import { filterByCategory } from "./plpServices";
import { filterByPriceRange } from "./plpServices";

watch(() => state.searchKey, () => {
    state.results = [];
    getProducts();
})

watch(() => state.checkCategory, () => {
    state.results = [];
    filterByCategory(state.checkCategory);
})

watch(() => state.checkPriceRange, () => {
    state.results = [];
    filterByPriceRange(state.checkPriceRange);
})

onMounted(() => {
    getProducts();
});
</script>

<template>
    <Header>
        <template v-slot:search>
            <input type="search" placeholder="search for products" class="search-input" v-model="state.searchKey">
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
            <SideNavBar />
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