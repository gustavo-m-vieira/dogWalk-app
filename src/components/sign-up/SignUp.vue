<script src="./signup.js"></script>
<template>
  <div class="fullscreen">
    <div class="modal glass">
      <h1 class="text-main modal-title">Create a DogWalk account</h1>

      <p class="warning">
        {{ warning }}
      </p>

      <div class="input-row">
        <label for="first-name" class="text-main input-label">
          First Name:
        </label>
        <input
          id="first-name"
          class="input-field"
          v-model="firstName"
          placeholder=""
        />
      </div>

      <div class="input-row">
        <label for="last-name" class="text-main input-label">
          Last Name:
        </label>
        <input
          id="last-name"
          class="input-field"
          v-model="lastName"
          placeholder=""
        />
      </div>

      <div class="input-row">
        <label for="email" class="text-main input-label"> Email: </label>
        <input id="email" class="input-field" v-model="email" placeholder="" />
      </div>

      <div class="input-row">
        <label for="password" type="password" class="text-main input-label">
          Password:
        </label>
        <input
          type="password"
          id="password"
          class="input-field"
          v-model="password"
          placeholder=""
        />
      </div>

      <div class="input-row">
        <label for="password-repeat" class="text-main input-label">
          Repeat Password:
        </label>
        <input
          type="password"
          id="password-repeat"
          class="input-field"
          v-model="passwordRepeat"
          placeholder=""
        />
      </div>

      <div class="input-row">
        <label for="is-walker" class="text-main input-label">
          Is this a Walker account?
        </label>
        <input
          type="checkbox"
          id="is-walker"
          class="input-check"
          v-model="isWalker"
        />
      </div>

      <button class="button text-main" v-on:click="clicked">
        <span class="material-symbols-outlined spinning" v-if="loading"
          >cached</span
        >
        <p v-else>Sign me up!</p>
      </button>

      <p class="text-main login-redirect">
        Already have an account? Click to
        <RouterLink class="link" to="/login">here</RouterLink>
        login.
      </p>
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

.modal-title {
  padding-bottom: 30px;
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

.input-check {
  width: 4vh;
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
