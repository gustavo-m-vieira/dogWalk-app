<script src="./addAddress.js"></script>

<template>
  <div class="fullscreen">
    <div class="modal glass">
      <h1 class="text-main modal-title">Register your Address</h1>

      <p class="warning">
        {{ warning }}
      </p>

      <div class="input-row">
        <label for="street" class="text-main input-label"> Street: </label>
        <input id="street" class="input-field" v-model="street" />
      </div>

      <div class="input-row">
        <label for="number" class="text-main input-label"> Number: </label>
        <input id="number" class="input-field" type="number" v-model="number" />
      </div>

      <div class="input-row">
        <label for="city" class="text-main input-label"> City: </label>
        <input id="city" class="input-field" v-model="city" />
      </div>

      <div class="input-row">
        <label for="district" class="text-main input-label"> District: </label>
        <input id="district" class="input-field" v-model="district" />
      </div>
      
      <div class="input-row">
        <label for="state" class="text-main input-label"> State: </label>
        <input id="state" class="input-field" v-model="state" />
      </div>

      <div class="input-row">
        <label for="country" class="text-main input-label"> Country: </label>
        <input id="country" class="input-field" v-model="country" />
      </div>
      
      <div class="input-row">
        <label for="zipCode" class="text-main input-label"> ZipCode: </label>
        <input id="zipCode" class="input-field" type="number" v-model="zipCode" />
      </div>

      <button class="button text-main" v-on:click="clicked">
        <span class="material-symbols-outlined spinning" v-if="loading"
          >cached</span
        >
        <p v-else>Add Address</p>
      </button>
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
