<script src="./login.js"></script>
<template>
  <div class="fullscreen">
    <div class="modal glass">
      
      <h1 class="text-main modal-title">Welcome back, please login</h1>

      <p class="warning">
        {{warning}}
      </p>

      <div class="input-row">
        <label for="email" class="text-main input-label"> Email: </label>
        <input id="email" class="input-field" v-model="email" placeholder="" />
      </div>

      <div class="input-row">
        <label for="password" class="text-main input-label"> Password: </label>
        <input id="password" class="input-field" v-model="password" placeholder="" />
      </div>
      
      <button class="button text-main" v-on:click="clicked">
        <span class="material-symbols-outlined spinning" v-if="loading">cached</span>
        <p v-else>Login</p>
      </button>

      <p class="text-main login-redirect">Need an account? Click to 
        <RouterLink class="link" to="/sign-up">here</RouterLink>
        sign up.</p>
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

.warning {
  color: var(--text-red) !important;
  padding-bottom: 1vh;
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
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
