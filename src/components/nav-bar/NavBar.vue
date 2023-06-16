<script src="./navBar.js"></script>
<template>
  <div id="nav-bar" class="glass" v-if="visible">
   
    <button class="material-symbols-outlined nav-button nav-button" v-on:click="goBack">arrow_back</button>
    <button class="material-symbols-outlined nav-button nav-button" v-on:click="goHome"> home </button>
    <button class="material-symbols-outlined nav-button nav-button" v-on:click="logout"> logout </button>

  </div>
</template>

<style>

#nav-bar{
  background: var(--accent-dark);
  display: flex;
  border-radius: 0%;
  border: 0;
  align-items: center;
  justify-content: space-around;
  height: 5.3vh;
  width: 100vw;
  box-shadow: 1px -6px 15px 4px rgb(51 51 51 / 18%);
}

.nav-button {
  color: var(--white);
  margin-inline: 2px;
  text-align: center;
  width: 100%;
  margin-inline: 6px;
  margin-top: 0;
  margin-bottom: 0;
  border: 0;
}

button {
  background: var(--accent-dark);
  border-radius: 6px;
  color: var(--white) !important;
  height: 5vh;
  border-style: double;
  font-weight: 600 !important;
  border-color: var(--accent-dark);
  box-shadow: none;
  margin-top: 1vh;
  font-size: 3vh;
}
</style>
