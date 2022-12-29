<script setup>
</script>

<template>
    <header class="header container">
        <div>
            <h2>ShopCart</h2>
        </div>
        <div class="options-container">
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-user"></i>
        </div>
    </header>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    padding: 20px 0px;
}

.options-container{
    display: flex;
    align-items: center;
}

i{
    padding: 5px;
    font-size: 20px;
}

h2{
    color: brown;
    font-size: 25px;
}

.container {
    width: 90%;
    margin: 0 auto;
  }
</style>