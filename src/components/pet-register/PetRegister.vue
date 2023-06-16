<script src="./petRegister.js"></script>

<template>
  <div class="fullscreen">
    <div class="modal glass">
      <h1 class="text-main modal-title">Register your Dog</h1>

      <p class="warning">
        {{ warning }}
      </p>

      <div class="input-row">
        <label for="name" class="text-main input-label"> Name: </label>
        <input id="name" class="input-field" v-model="Name" placeholder="" />
      </div>

      <div class="input-row">
        <label for="breed" class="text-main input-label"> Breed: </label>
        <input id="breed" class="input-field" v-model="Breed" placeholder="" />
      </div>

      <div class="input-row">
        <label for="size" class="text-main input-label"> Size: </label>
        <select class="input-field" v-model="Size">
          <option value="TINY">Tiny</option>
          <option value="SMALL">Small</option>
          <option value="MEDIUM">Medium</option>
          <option value="BIG">Big</option>
        </select>
      </div>

      <div class="input-row">
        <label for="birthDate" class="text-main input-label">
          BirthDate:
        </label>
        <input
          id="birthDate"
          class="input-field"
          v-model="BirthDate"
          placeholder=""
        />
      </div>

      <div class="input-row">
        <label for="temperament" class="text-main input-label">
          Temperament:
        </label>
        <select class="input-field" v-model="temperament">
          <option value="COOL">Cool</option>
          <option value="SHY">Shy</option>
          <option value="ANGRY">Angry</option>
        </select>
      </div>

      <button class="button text-main" v-on:click="clicked">
        <span class="material-symbols-outlined spinning" v-if="loading"
          >cached</span
        >
        <p v-else>Add Dog</p>
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
