<script setup>
</script>

<template>
    <header class="header">
        <div>
            <h2>ShopCart</h2>
        </div>
        <div class="options-container">
            <slot name="search"></slot>
            <i class="fa-solid fa-cart-shopping"></i>
            <slot></slot>
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