<script setup>
import { ref } from "vue";
const props = defineProps({
  data: {
    type: Object,
  },

});

const quantity = ref(null);
const totalPrice = ref(null);


const decreaseCount = (eachItemPrice) => {
  if (quantity.value.innerText > 1) {
    quantity.value.innerText--;
    totalPrice.value=eachItemPrice * quantity.value.innerText
    // addTocart.value.innerText = "Add to cart";
  }
};
const increaseCount = (maxQuantity, eachItemPrice) => {
  if (quantity.value.innerText < maxQuantity) {
    quantity.value.innerText++;
    totalPrice.value=eachItemPrice * quantity.value.innerText
    // addTocart.value.innerText = "Add to cart";
  }
};
</script>

<template>
  <div>
    <p id="quantity-word">Quantity</p>
    <div id="quantity-container">
      <i class="fa-solid fa-minus" @click="decreaseCount(data.price);$emit('decreaseBy', totalPrice);$emit('headerCart',quantity.innerText)"></i>
      <p id="quantity" ref="quantity">1</p>
      <i
        class="fa-solid fa-plus"
        @click="increaseCount(data.quantity, data.price);$emit('increaseBy', totalPrice);$emit('headerCart',quantity.innerText)"        
      ></i>
    </div>
  </div>
</template>
<style scoped>
#quantity-word {
  letter-spacing: 1.3px;
  font-size: 11px;
}
#quantity-container {
  display: flex;
  align-items: center;
}
#quantity-container p {
  margin: 0px 12px;
  font-weight: 700;
  font-size: 20px;
}
.fa-minus,
.fa-plus {
  cursor: pointer;
}
</style>
