<script src="./navBar.js"></script>
<template>
  <div id="nav-bar" class="glass">
   
    <button class="material-symbols-outlined nav-button nav-button" v-on:click="goBack">arrow_back</button>
    <RouterLink class="material-symbols-outlined nav-button nav-button" to="/">home</RouterLink>
    <RouterLink class="material-symbols-outlined nav-button nav-button" to="/sign-up">sound_detection_dog_barking</RouterLink>

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
}

.nav-button {
  color: var(--white);
  margin-inline: 2px;
  text-align: center;
  width: 100%;
  margin-inline: 6px;
}
</style>
