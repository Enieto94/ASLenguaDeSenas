<script setup></script>

<template>
  <main>
    <img src="@/assets/img/banner-index.png" alt="" />
    <button class="btn-inicio">
      <router-link to="/temas">Aprender señas</router-link>
    </button>
  </main>
</template>
<style scoped>
main {
  background: var(--vt-c-verde) !important;
}

main img {
  width: 300px;
}
.btn-inicio {
  width: 250px;
  font-size: 20px;
  margin: 30px 0;
  padding: 15px 0;
  background: var(--vt-c-verde-lima);
  outline: 0;
  border-radius: 10px;
  border: 1px transparent;
}
.btn-inicio a {
  text-decoration: none;
  color: #000;
  font-weight: bold;
}
</style>
