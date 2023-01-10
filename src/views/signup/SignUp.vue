<script setup>
import { ref, onMounted } from "vue";
</script>
<template>
  <section id="sign-up">
    <div id="sign-up-image"></div>
    <div id="sign-up-content">
      <form action="">
        <h1>Lets Go Shopping</h1>
        <label>Full Name <input type="text" placeholder="Name" /></label>
        <label>Email <input type="email" placeholder="Email" /></label>
        <label>Phone Number<input type="text" placeholder="Number" /></label>
        <label>Password<input type="password" placeholder="Password" /></label>
        <label
          >Confirm Password<input type="password" placeholder="Password"
        /></label>
        <div id="button-div">
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sign Up
          </a>
        </div>
      </form>
    </div>
  </section>
</template>
<style scoped>
@import "./sign-up.css";
</style>
