<script setup>
import { RouterView, RouterLink } from "vue-router";
import MenuView from "./MenuView.vue";
</script>

<template>
  <main>
    <h1>Temas</h1>
    <MenuView></MenuView>
  </main>
</template>
<style scoped>
body {
  background: orangered;
}
img {
  display: none !important;
}
</style>
