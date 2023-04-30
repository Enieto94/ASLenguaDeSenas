<script setup>
import { RouterView, RouterLink } from "vue-router";
import MenuView from "./MenuView.vue";
</script>

<template>
  <nav>
    <h1>AS - Lengua de señas</h1>
    <img src="@/assets/img/bandera-colombia.png" alt="" />
  </nav>

  <main>
    <div class="tema-c">
      <div class="info-c">
        <img src="@/assets/img/info.png" alt="" />
        <div>
          <h4>NIVEL 1</h4>
          <h4>Vocabulario básico</h4>
        </div>
      </div>
      <router-link to="letras" class="tema-item">
        <div>
          <img src="@/assets/img/letras.png" alt="" />
          <h5>Abecedario</h5>
        </div>
      </router-link>
      <router-link to="numeros" class="tema-item">
        <div>
          <img src="@/assets/img/numeros.png" alt="" />
          <h5>Números</h5>
        </div>
      </router-link>
      <router-link to="colores" class="tema-item">
        <div>
          <img src="@/assets/img/colores.png" alt="" />
          <h5>Colores</h5>
        </div>
      </router-link>
    </div>
  </main>
  <MenuView></MenuView>
</template>
<style scoped>
.info-c {
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
}
.tema-item {
  text-decoration: none;
}

main {
  background: var(--vt-c-naranja);
}

.tema-c {
  background: #fff;
  height: 70% !important;
  width: 90%;
  border-radius: 20px;
  border: 1px solid #000;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.tema-item {
  display: flex;
  flex-direction: column;
  flex: 0 0 40%;
  text-align: center;
}

.tema-item img {
  height: 64px;
  border-radius: 50%;
}
</style>
