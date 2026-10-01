<script setup>
import Navbar from './components/frontend/navbar.vue';
</script>

<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>
<script>
export default {
  name :"App",
  components : {
    Navbar },
};
</script>