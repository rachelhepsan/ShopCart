<script setup>
import { ref, onMounted } from "vue";
</script>
<template>
  <section id="sign_in">
    <div id="sign_in_image"></div>
    <div id="sign_in_content">
      <form>
        <h1>Welcome Back</h1>
        <label>User Name <input type="text" placeholder="User Name" /></label>
        <label>Password<input type="password" placeholder="Password" /></label>
        <a id="sign_in_anchor" href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Sign In
        </a>
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
