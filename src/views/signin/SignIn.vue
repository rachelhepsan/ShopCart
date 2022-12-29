<script setup>
import { ref, onMounted } from "vue";
</script>
<template>
  <section id="sign-in">
    <div id="sign-in-image"></div>
    <div id="sign-in-content">
      <form>
        <h1>Welcome Back</h1>
        <label>User Name <input type="text" placeholder="User Name" /></label>
        <label>Password<input type="password" placeholder="Password" /></label>
        <RouterLink :to="{ name: 'plp' }">
          <a id="sign-in-anchor" href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sign In
          </a>
        </RouterLink>
        <p>
          Dont have an account ?
          <RouterLink :to="{ name: 'SignUp' }"><a>Sign Up</a></RouterLink>
        </p>
      </form>
    </div>
  </section>
</template>

<style scoped>
@import "./sign-in.css";
</style>
