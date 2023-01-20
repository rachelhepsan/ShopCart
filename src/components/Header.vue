<script setup></script>

<template>
  <header class="header">
    <div>
      <RouterLink :to="{ name: 'plp' }"><h2>ShopCart</h2></RouterLink>
    </div>
    <div class="options-container">
      <slot name="search"></slot>
      <div class="cart-container">
        <i class="fa-solid fa-cart-shopping"></i>
        <slot></slot>
      </div>

      <i class="fa-solid fa-user"></i>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
}

a {
  text-decoration: none;
}

.options-container {
  display: flex;
  align-items: center;
}

.cart-container {
  position: relative;
  margin-right: 20px;
}

i {
  padding: 8px;
  font-size: 20px;
  cursor: pointer;
}

h2 {
  font-size: 25px;
  color: brown;
  cursor: pointer;
}

.container {
  width: 90%;
  margin: 0 auto;
}

.cart-container slot {
  background-color: bisque;
  border: 1px solid red;
  border-radius: 12px;
  padding: 0px 6px;
}
</style>
