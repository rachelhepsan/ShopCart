<script setup>

const props = defineProps({
    data: {
        type: Object
    }
})

const productRoute = { name: 'product-details' , params: { productId: props.data.id }}

</script>

<template>
    <RouterLink :to=productRoute>
        <div>
            <img :src="data.images[1]" alt="Product Image">
            <h2>{{ data.title }}</h2>
            <h3>{{ data.price }}</h3>
        </div>
    </RouterLink>
</template>

<style scoped>
div {
    padding: 20px;
    color: #000;
}

div:hover {
    background-color: grey;
    border-radius: 30px;
    color: #fff;
}

a {
    text-decoration: none;
    width: 30%;
    margin: 10px;
}

img {
    width: 100%;
    border-radius: 10px;
}

h2 {
    cursor: pointer;
}

h3 {
    text-align: right;
}
</style>