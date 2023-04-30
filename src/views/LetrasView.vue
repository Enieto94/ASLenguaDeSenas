<script setup>
import MenuAtrasTop from "../components/MenuAtrasTop.vue";
import MenuView from "../views/MenuView.vue";
</script>

<template>
  <MenuAtrasTop></MenuAtrasTop>
  <main>
    <h1>Letras</h1>
  </main>
  <MenuView></MenuView>
</template>

<style scoped>
main {
  background: var(-vtc-c-naranja);
}
</style>
