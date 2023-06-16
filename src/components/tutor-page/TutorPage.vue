<script src="./tutorPage.js"></script>

<template>
  <div class="fullscreen">
    <div class="modal glass">
      <h1 class="text-main modal-title">Welcome back, {{name}}!</h1>

      <p class="warning">
        {{ warning }}
      </p>

      <div class="buttons-container">
        <RouterLink class="text-button" to="/pet-register">Register Pet</RouterLink>
        <RouterLink class="text-button" to="/sign-up">Scheduled Trips</RouterLink>
        <RouterLink class="text-button" to="/trip-list">Available Trips</RouterLink>
<!-- 
        <button class="button text-button" v-on:click="clicked">
          <span class="material-symbols-outlined spinning" v-if="loading"
            >cached</span
          >
          <p v-else>Schedule Trip</p>
        </button>

        <button class="button text-button" v-on:click="clicked">
          <span class="material-symbols-outlined spinning" v-if="loading"
            >cached</span
          >
          <p v-else>Trip list</p>
        </button> -->
      </div>
    </div>
  </div>
</template>

<style>
.modal {
  /* background-color: var(--modal-bg-color-light); */
  width: 90%;
  padding: 5%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}

@media only screen and (min-width: 600px) {
  .modal {
    width: 60%;
  }
}

.warning {
  color: var(--text-red) !important;
  padding-bottom: 1vh;
}

.input-row {
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
}

.login-redirect {
  padding-top: 1vh;
  padding-inline: 1vw;
}

.input-field {
  width: 60%;
  border-color: var(--accent-light);
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
}

.buttons-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  flex-grow: 2;
  flex-wrap: wrap;
}

.text-button {
  background: var(--accent-dark);
  border-radius: 6px;
  color: var(--white) !important;
  border-style: double;
  font-weight: 600 !important;
  border-color: var(--accent-dark);
  box-shadow: none;
  margin-top: 1vh;
  font-size: 3vh;
  /* display: flex; */
  width: 29%;
  margin: 1%;
  flex-grow: 2;
  text-align: center;
  font-family: "Amatic SC", cursive;
  color: var(--text-blue);
  font-weight: 550;
  text-align: center;
  font-size: 200%;
}
</style>
