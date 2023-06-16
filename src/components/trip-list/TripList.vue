<script src="./trips.js"></script>

<template>

    <div class="location-bar glass">
        <label for="zip" class="text-main input-label" pattern="[0-9]*"> ZIP Code: </label>
        <input id="zip" class="input-field" v-model="cpf"/>
    </div>

    <ul class="trip-list">
      <li class="trip-box glass" v-for="trip in trips" v-bind:key="trip.walker">
        <h1 class="text-main modal-title">2:12AM trip by Carlos</h1>
      </li>
      <button class="material-symbols-outlined add-trip" v-on:click="goHome" v-if="isWalker"> add </button>
    </ul>


</template>

<style>

.add-trip {
  margin-top: 4vh;
  background: none;
  color: var(--accent-dark) !important;
  border-radius: 100%;
  padding: 1%;
  width: min-content;
}

.trip-list {
  overflow: scroll;
  padding: 0;
  margin-top: 3vh;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

.trip-box {
  /* background-color: var(--modal-bg-color-light); */
  margin-top: 3vh;
  height: 10vh;
  border-radius: 5px;
  display: flex;
  width: 95%;
  flex-direction: column;
}

@media only screen and (min-width: 600px) {
  .modal {
    width: 60%;
  }
}

.location-bar {
  width: 100%;
  border-radius: 0;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
