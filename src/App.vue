<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap"
    rel="stylesheet"
  />

  <div id="app-structure" class="background">
    <RouterView />
    <NavBar></NavBar>
  </div>
</template>

<style>
:root {
  /* https://coolors.co/palette/0fa3b1-b5e2fa-f9f7f3-eddea4-f7a072 */
  --main-dark: #0fa3b1;
  --main-light: #b5e2fa;
  --accent-dark: #f7a072;
  --accent-light: #eddea4;
  --white: #f9f7f3;
  --text-blue: #1038b2;
  --text-red: #d4452f;
}

#app-structure {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

.glass {
  /* From https://css.glass */
  background: rgba(249, 247, 243, 0.43);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(11.6px);
  -webkit-backdrop-filter: blur(11.6px);
  border: 1px solid rgba(249, 247, 243, 0.78);
}

.link {
  color: var(--text-red) !important;
}

.background {
  background: linear-gradient(
    var(--main-light) 15%,
    var(--white) 80%,
    var(--accent-light)
  );
}

.text-main {
  font-family: "Amatic SC", cursive;
  color: var(--text-blue);
}

.input-label {
  font-size: 140%;
}

.input-field {
  margin-inline: 2vw;
  margin-bottom: 2vh;
  width: 200px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
}

.spinning {
  animation-name: spin;
  animation-duration: 1300ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
