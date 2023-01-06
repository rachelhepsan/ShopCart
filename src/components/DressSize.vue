<template>
  <p id="size-heading">Select Size</p>
  <div id="size-container" ref = "spanContainer">
    <!-- <span @click="colorPrevail" :class="{ spanColor: isColor }">32</span> -->
    <span @click="colorPrevail">32</span>
    <span @click="colorPrevail">34</span>
    <span @click="colorPrevail">36</span>
    <span @click="colorPrevail">38</span>
    <span @click="colorPrevail">40</span>
    <span @click="colorPrevail">42</span>
    <span @click="colorPrevail">44</span>
  </div>
</template>

<script setup>
import { ref } from "vue";
const spanContainer = ref(null)
console.log(spanContainer.va   lue)
// const isColor = ref(false);
//when a particular size is clicked it shows a background color for that size
const colorPrevail = () => {
  // isColor.value = true;
  console.log(event.target.classList.toggle("spanColor"));
};
</script>

<style scoped>
#size-heading {
  margin-bottom: 23px;
  font-size: 13px;
  letter-spacing: 1.3px;
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
  margin-bottom: 10px;
}
#size-container span:hover {
  background-color: #26323a;
  color: whitesmoke;
  cursor: pointer;
}

.spanColor {
  background-color: #26323a;
  color: whitesmoke;
  cursor: pointer;
}
</style>
