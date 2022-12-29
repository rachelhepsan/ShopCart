<script setup>
</script>

<template>
    <footer>
        <div class="container footer-container">
            <h2>ShopCart</h2>
            <div class="footer-links">
                <h4>Company</h4>
                <p>How it Works</p>
                <p>Services</p>
                <p>About</p>
                <p>Brands</p>
            </div>
            <div class="footer-links">
                <h4>Brands</h4>
                <p>Zara</p>
                <p>Louis Vuitton</p>
                <p>Tommy Hilfiger</p>
                <p>Gucci</p>
            </div>
            <div class="footer-links">
                <h4>Shop</h4>
                <p>Support</p>
                <p>Open a Shop</p>
                <p>Licensing & Terms</p>
                <p>Technology</p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    padding: 40px;
    background-color: #000;
    color: grey;
}

.footer-container {
    display: flex;
    justify-content: space-between;
}

h2 {
    color: brown;
    font-size: 25px;
}

footer p {
    cursor: pointer;
}

.container {
    width: 90%;
    margin: 0 auto;
}
</style>