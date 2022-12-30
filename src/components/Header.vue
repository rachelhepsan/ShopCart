<script setup>
</script>

<template>
    <header class="header">
        <div>
            <h2>ShopCart</h2>
        </div>
        <div class="options-container">
            <input type="search" placeholder="search for products">
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-user"></i>
        </div>
    </header>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    padding: 20px;
}

input {
    border-radius: 20px;
    padding: 5px;
}

.options-container{
    display: flex;
    align-items: center;
}

i{
    padding: 8px;
    font-size: 20px;
    cursor: pointer;
}

h2{
    font-size: 25px;
    color: brown;
    cursor: pointer;
}

.container {
    width: 90%;
    margin: 0 auto;
  }
</style>