<script src="./createtrip.js"></script>

<template>
  <div class="fullscreen">
    <div class="modal glass">
      <h1 class="text-main modal-title">Create your Trip</h1>

      <p class="warning">
        {{ warning }}
      </p>

      <div class="input-row">
        <label for="startDate" class="text-main input-label">
          StartDate:
        </label>
        <input
          id="startDate"
          class="input-field"
          v-model="startDate"
          type="date"
          placeholder=""
        />
      </div>

      <div class="input-row">
        <label for="duration" class="text-main input-label">
          Duration (in mins):
        </label>
        <input
          id="duration"
          class="input-field"
          v-model="duration"
          type="number"
          min="5"
          max="60"
          placeholder=""
        />
      </div>

      <div class="input-row">
        <label for="slots" class="text-main input-label"> Slots: </label>
        <input
          id="slots"
          class="input-field"
          v-model="slots"
          type="number"
          min="1"
          max="6"
        />
      </div>

      <div class="input-row">
        <label for="dogType" class="text-main input-label"> DogType: </label>
        <select id="dogType" class="input-field" v-model="DogType">
          <option value="COOL">Cool</option>
          <option value="SHY">Shy</option>
          <option value="ANGRY">Angry</option>
        </select>
      </div>

      <button class="button text-main" v-on:click="clicked">
        <span class="material-symbols-outlined spinning" v-if="loading"
          >cached</span
        >
        <p v-else >Create Trip</p>
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
  width: 40%;
  border-color: var(--accent-light);
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  text-align: center;
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
