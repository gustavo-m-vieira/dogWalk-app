<template>
  <div class="fullscreen">
    <div class="logo-row">
      <h1 class="text-main logo-text">DogWalk</h1>
      <span class="material-symbols-outlined logo">pets</span>
    </div>


    <p class="text-main login-or-sign-up">Please, either
      <RouterLink class="link" to="/login">login</RouterLink>
      
      or
      
      <RouterLink class="link" to="/sign-up">create an account</RouterLink>
      to proceed
    </p>
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

.input-row {
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
}

.input-field {
  width: 70%;
  border-color: var(--accent-light);
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
}

.login-or-sign-up {
  position: absolute;
  font-size: 2.9vh;
  top: 55vh;
}

.logo-row {
  display: flex;
  align-items: center;
  position: absolute;
  top: 35vh;
}

.logo {
  color: var(--accent-dark);
  scale: 3;
}

.logo-text {
  margin-right: 4vh;
  font-size: 10vh;
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
