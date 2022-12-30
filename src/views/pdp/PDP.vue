<script setup>
import { onMounted } from "vue";
import state from "./pdpState.js";
import { getProducts } from "./pdpServices";
import { ref } from "vue";
import DressSize from "@/components/DressSize.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { useRouter, useRoute } from "vue-router";
// import state from './plpState';

const router = useRouter();
const route = useRoute();
onMounted(() => {
    console.log(route.params.productId )
});

let fullproducts = ref()
// getProducts();

let showDetails = ref(false);

function toggleshowDetails() {
  showDetails.value = !showDetails.value;
}
</script>

<template>
  <!-- <Header /> -->
  <main>
    <div id="product-image"></div>
    <div id="product-description">
      <h1>Regular Fit Shirt</h1>
      <p id="product-detail">
        Peter England Light Purple Solid Long Sleeve Regular Fit Shirt
      </p>
      <div id="discount">
        <s>$101</s>
        <h3>(20% OFF)</h3>
      </div>

      <div id="price-quantity">
        <div>
          <p id="price-word">Price</p>
          <p id="price">$ 81</p>
        </div>
        <div>
          <p id="quantity-word">Quantity</p>
          <p id="quantity">7</p>
        </div>
      </div>
      <DressSize />
      <hr />
      <div id="product-details-container" @click="toggleshowDetails">
        <h4>Product Details</h4>
        <p>+</p>
      </div>

      <ul v-if="showDetails">
        <li>Material : 55% Cotton and 45% Polyester</li>
        <li>Fit : Regular Fit</li>
        <li>Sleeves : Full Sleeves</li>
        <li>Ocassion : Formal</li>
        <li>Pattern : Textured</li>
      </ul>
      <hr />
      <div id="what-we-offer">
        <p>&#10003;Free standard delivery on all orders</p>
        <p>&#10003;Free 30 day delivery Return</p>
        <p>
          &#10003;For any queries,plese contact customer service at 0804335245
        </p>
      </div>
      <div id="total-price-container">
        <div>
          <p id="total-price-word">Total Price</p>
          <p id="total-price">$ 700</p>
        </div>
        <button>Add to cart</button>
      </div>
    </div>
  </main>
  <!-- <Footer/> -->
</template>

<style scoped>
@import "./pdp.css";
</style>
