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
            <img :src="data.images" alt="Product Image">
            <h3>{{ data.title }}</h3>
            <h3 class="price">{{ data.price }}</h3>
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

h3 {
    text-align: center;
}

img {
    width: 100%;
    border-radius: 10px;
}
</style>