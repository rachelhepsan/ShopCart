<script setup>

const props = defineProps({
    data: {
        type: Object
    }
})

</script>

<template>
    <div>
        <img :src="data.images[1]" alt="Product Image">
        <h2>{{ data.title }}</h2>
        <h3>{{ data.price }}</h3>
    </div>
</template>

<style scoped>
div {
    width: 25%;
    padding: 20px;
    margin: 10px;
    color: #000;
}

div:hover {
    background-color: grey;
    border-radius: 30px;
    color: #fff;
}

img {
    width: 100%;
    border-radius: 10px;
}

h2{
    cursor: pointer;
}

h3 {
    text-align: right;
}
</style>