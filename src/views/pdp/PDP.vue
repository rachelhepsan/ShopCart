<script>
// import { onMounted } from "vue";
import state from "./pdpState.js";
import { getProducts } from "./pdpServices";
import { ref } from "vue";
// onMounted(() => {
//     getProducts();
// });
getProducts();
// let product1 = ref({
//         "id": 6,
//         "title": "Long Kurtha 1",
//         "price": "$ 10",
//         "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis orci ut luctus varius. Proin vitae lacus sagittis, vulputate ante sed, dignissim purus. Suspendisse hendrerit suscipit ante",
//         "category": "Fashion",
//         "quantity": 12,
//         "images": [
//             "https://api.lorem.space/image/fashion?w=640&h=480&r=4252",
//             "https://api.lorem.space/image/fashion?w=640&h=480&r=4252",
//             "https://cdn.lorem.space/images/fashion/.cache/640x480/wesley-tingey-3mGnYRUNIck-unsplash.jpg"
//         ]
//     })
// console.log(product1.value)
</script>

<template>
  <main>
    <div id="product-image"></div>
    <div id="product-description">
      <h1>Regular Fit Shirt</h1>
      <p>Peter England Light Purple Solid Long Sleeve Regular Fit Shirt</p>
      <h3><s>$101</s> $78</h3>
      <h4 id="size-heading">SELECT SIZE</h4>
      <div id="size-container">
        <span>32</span>
        <span>34</span>
        <span>36</span>
        <span>38</span>
        <span>40</span>
        <span>42</span>
        <span>44</span>
      </div>
      <!-- <h4>Product Details</h4>
      <ul>
        <li>Material : 55% Cotton and 45% Polyester</li>
        <li>Fit : Regular Fit</li>
        <li>Sleeves : Full Sleeves</li>
        <li>Ocassion : Formal</li>
        <li>Pattern : Textured</li>
      </ul> -->
      <div class="what-we-offer">
        <h4>Free Delivery</h4>
        <p>Enter Your Postol Code For Delivery Availability</p>
      </div>
      <div class="what-we-offer">
        <h4>Return Delivery</h4>
        <p>Free 30 day Delivery Return</p>
      </div>
      <button>Add to cart</button>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: space-between;
}
#product-image {
  box-sizing: border-box;
  height: 100vh;
  width: 60%;
  background: url("https://www.riverwoods.net/media/catalog/product/cache/b83bbf37d16c5fefcf7c9d29faf48907/r/m/rm22w-c8643_b-000_w20352_f.jpg")
    center no-repeat;
  background-size: contain;
  background-color: #26323a;
}
#product-description {
  box-sizing: border-box;
  /* background-color: #bea168; */
  background-color: wheat;
  color: #26323a;
  width: 40%;
  padding: 50px;
}
span {
  padding: 9px 10px;
  border: 1px solid black;
  margin-right: 14px;
  margin-bottom: 7px;
  border-radius: 100%;
}
#size-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
#product-description {
  display: flex;
  flex-direction: column;
}
#product-description > * {
  margin-bottom: 10px;
}
button {
  margin-top: 10px;
  width: 25%;
  padding: 5px 15px;
}
ul li {
  padding-bottom: 10px;
}
.what-we-offer {
  margin-bottom: 4px;
}
.what-we-offer p,
.what-we-offer h4 {
  margin-top: 8px;
  margin-bottom: 8px;
}
s {
  padding-right: 10px;
}
#size-heading {
  margin-bottom: 23px;
}
</style>
