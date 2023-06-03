<template>
  <div class="fullscreen">
    <div class="modal glass">

      <h1 class="text-main modal-title">Create a DogWalk account</h1>

      <div class="input-row">
        <label for="first-name" class="text-main input-label"> First Name: </label>
        <input id="first-name" class="input-field" v-model="firstName" placeholder="" />
      </div>

      <div class="input-row">
        <label for="last-name" class="text-main input-label"> Last Name: </label>
        <input id="last-name" class="input-field" v-model="lastName" placeholder="" />
      </div>

      <div class="input-row">
        <label for="email" class="text-main input-label"> Email: </label>
        <input id="email" class="input-field" v-model="email" placeholder="" />
      </div>

      <button class="button text-main">Sign me up!</button>
    </div>
  </div>
</template>

<style>

.modal {
  /* background-color: var(--modal-bg-color-light); */
  width: 80%;
  padding: 5%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}

.modal-title {
  padding-bottom: 30px;
}

.input-row {
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
}

.input-label {
  font-size: 20px;
}

.input-field {
  width: 70%;
  border-color: var(--accent-light);
  border:0;
  box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
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
