<script setup>
import { onMounted } from "vue";
import state from "./pdpState.js";
import { getProducts } from "./pdpServices";
import { ref } from "vue";
import DressSize from "@/components/DressSize.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
onMounted(() => {
  getProducts(route.params.productId);
});

let productCount = ref(null);
let showDetails = ref(false);
let dressSize = ref(false);
const quantity = ref(null);
const totalPrice = ref(null);
const addTocart = ref(null)

const decreaseCount = (eachItemPrice) => {
  if (quantity.value.innerText > 1) {
    quantity.value.innerText--;
    totalPrice.value.innerText = eachItemPrice * quantity.value.innerText;
    addTocart.value.innerText="Add to cart"
  }
};
const increaseCount = (maxQuantity, eachItemPrice) => {
  if (quantity.value.innerText < maxQuantity) {
    quantity.value.innerText++;
    totalPrice.value.innerText = eachItemPrice * quantity.value.innerText;
    addTocart.value.innerText="Add to cart"
  }
};
function toggleshowDetails() {
  showDetails.value = !showDetails.value;
}

const updateCart = () => {
  // const itemTotal = JSON.parse(localStorage.getItem("totalCount"));
  // productCount.value.innerText = itemTotal+quantity.value.innerText;
  // localStorage.setItem(
  //   "totalCount",
  //   JSON.stringify(productCount.value.innerText)
  // );
  productCount.value.innerText = quantity.value.innerText;
  event.target.textContent="Added to cart"
};
</script>

<template>
  <Header>
    <span ref="productCount" id="product-count">0</span>
  </Header>
  <main>
    <div id="product-image">
      <img :src="state.results.images" />
    </div>
    <div id="product-description">
      <h1>{{ state.results.title }}</h1>
      <p id="product-detail">{{ state.results.description }}</p>
      <div id="discount">
        <s id="cut-dollar"><i class="fa-solid fa-indian-rupee-sign"></i></s><s>101</s>
        <h3>(20% OFF)</h3>
      </div>

      <div id="price-quantity">
        <div>
          <p id="price-word">Price</p>
          <p id="price">
            <span class="dollar"><i class="fa-solid fa-indian-rupee-sign"></i></span> {{ state.results.price }}
          </p>
        </div>
        <div>
          <p id="quantity-word">Quantity</p>
          <div id="quantity-container">
            <i class="fa-solid fa-minus" @click="decreaseCount(state.results.price)"></i>
            <p id="quantity" ref="quantity">1</p>
            <i class="fa-solid fa-plus" @click="
  increaseCount(state.results.quantity, state.results.price)
"></i>
          </div>
        </div>
      </div>
      <div v-if="state.results.category === 'Fashion'">
        <DressSize />
      </div>

      <hr />
      <div id="product-details-container" @click="toggleshowDetails">
        <h4>Product Details</h4>
        <p>+</p>
      </div>

      <ul v-if="showDetails">
        <li v-for="(item, index) in state.results.details" :key="index">
          <p class="detail-para">{{ Object.keys(item)[0] }}</p>
          <p id="detail-para-colon">:</p>
          <p class="detail-para">{{ Object.values(item)[0] }}</p>
        </li>
      </ul>

      <hr />
      <div id="what-we-offer">
        <p>&#10003;Free standard delivery on all orders</p>
        <p>&#10003;Free 30 day delivery Return</p>
        <p>
          &#10003;For any queries,plese contact customer service at
          <span id="customer-care-number">0804335245</span>
        </p>
      </div>
      <div id="total-price-container">
        <div>
          <p id="total-price-word">Total Price</p>
          <span class="dollar"><i class="fa-solid fa-indian-rupee-sign"></i></span>
          <p id="total-price" ref="totalPrice">{{ state.results.price }}</p>
        </div>
        <button @click="updateCart" ref="addTocart">Add to cart</button>
      </div>
    </div>
  </main>
  <Footer />
</template>

<style scoped>
@import "./pdp.css";
/* #product-image {
    background: url(state.results.images)
    center no-repeat;
} */
</style>
