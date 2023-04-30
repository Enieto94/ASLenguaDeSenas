<script setup>
import MenuAtrasTop from "../components/MenuAtrasTop.vue";
import MenuView from "../views/MenuView.vue";
</script>

<template>
  <MenuAtrasTop></MenuAtrasTop>
  <main>
    <label for="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <title>magnify</title>
        <path
          d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
        />
      </svg>
      <input type="text" placeholder="Search..." />
    </label>
    <div class="letters-c">
      <div class="letter-item active">
        <span>A</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>eye</title>
          <path
            d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
          />
        </svg>
      </div>

      <div class="letter-item">
        <span>A</span>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>eye-lock</title>
          <path
            d="M20.8 17V15.5C20.8 14.1 19.4 13 18 13S15.2 14.1 15.2 15.5V17C14.6 17 14 17.6 14 18.2V21.7C14 22.4 14.6 23 15.2 23H20.7C21.4 23 22 22.4 22 21.8V18.3C22 17.6 21.4 17 20.8 17M19.5 17H16.5V15.5C16.5 14.7 17.2 14.2 18 14.2S19.5 14.7 19.5 15.5V17M15 12C14.1 12.7 13.5 13.6 13.3 14.7C12.9 14.9 12.5 15 12 15C10.3 15 9 13.7 9 12S10.3 9 12 9 15 10.3 15 12M12 19.5C7 19.5 2.7 16.4 1 12C2.7 7.6 7 4.5 12 4.5S21.3 7.6 23 12C22.8 12.5 22.5 13 22.3 13.5C21.5 12 19.8 11 18 11C17.6 11 17.3 11.1 16.9 11.1C16.5 8.8 14.5 7 12 7C9.2 7 7 9.2 7 12S9.2 17 12 17H12.3C12.1 17.4 12 17.8 12 18.2V19.5Z"
          />
        </svg>
      </div>
    </div>
    <div class="characters">
      <h1>Characters</h1>
    </div>
  </main>
  <MenuView></MenuView>
</template>

<style scoped>
main {
  background: var(--vt-c-naranja);
}
label {
  display: flex;
  background: white;
  padding: 10px;
  border-radius: 25px;
}
label input {
  border: 0;
  outline: 0;
}

.letters-c {
  width: 70%;
  margin: 20px auto;
  background: var(--vt-c-blanco);
  padding: 10px 0;
  border-radius: 10px;
  height: 250px;
  overflow: scroll;
}
.letters-c::-webkit-scrollbar {
  background: transparent;
  width: 10px;
}

.letters-c::-webkit-scrollbar-thumb {
  width: 3px;
  background-color: var(--vt-c-naranja);
  border-radius: 10px;
}
.letter-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  border-bottom: 1px solid var(--vt-c-negro);
}
.letter-item svg {
  width: 32px;
  height: 32px;
}

.letter-item.active {
  background: var(--vt-c-verde-lima);
}
</style>
