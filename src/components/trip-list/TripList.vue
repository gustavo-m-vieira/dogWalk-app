<script src="./trips.js"></script>

<template>
  <div class="location-bar glass">
    <label for="zip" style="grid-area: AL" class="text-main input-label">
      ZIP Code:
    </label>
    <input id="zip" style="grid-area: A" class="input-field" v-model="zip" />

    <label
      for="date"
      style="grid-area: BL"
      class="text-main input-label"
      pattern="[0-9]*"
    >
      Date:
    </label>
    <input
      id="date"
      style="grid-area: B"
      class="input-field"
      v-model="date"
      type="date"
    />
  </div>

  <dialog id="select-a-dog">
    <form>
      <p>
        <label>
          Who is taking a trip today?
          <select v-model="selectedDog" class="dog-selector">
            <option v-for="dog in dogs" v-bind:key="dog.id">{{ dog.name }}</option>
          </select>
        </label>
      </p>
      <div class="modal-list">
        <button >Cancel</button>
        <button >Confirm</button>
      </div>
    </form>
  </dialog>

  <ul class="trip-list">
    <li class="trip-box glass" v-for="trip in trips" v-bind:key="trip.walker">
      <h1 class="text-main trip-box-title">2:12AM trip by Carlos</h1>

      <ul class="slot-list">
        <li class="trip-slot" v-on:click="selectDogModal(trip.walker)"></li>
        <li class="trip-slot"></li>
        <li class="trip-slot"></li>
        <li class="trip-slot"></li>
      </ul>
    </li>
    <RouterLink
      class="material-symbols-outlined add-trip"
      v-if="isWalker"
      to="/create-trip"
    >
      add
    </RouterLink>
  </ul>
</template>

<style>
#select-a-dog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-width: 0px;
  width: 70vw;
  box-shadow: 1px 2px 0 0 rgba(119, 119, 119, 0.281);
}

.dog-selector {
  margin-top: 2vh;
  width: 100%;
}

.modal-list {
  display: flex;
  justify-content: space-between;
  margin-top: 2vh;
}

.trip-box-title {
  padding-left: 2vw;
}

.slot-list {
  width: 95%;
  display: flex;
  flex-direction: row;
  overflow: scroll;
  align-items: center;
  justify-content: start;
  padding: 0;
}

.trip-slot {
  height: 10vh;
  width: 10vh;
  background: var(--white);
  margin: 1vh;
  border-radius: 10%;
}

.add-trip {
  margin-top: 4vh;
  background: none;
  color: var(--accent-dark) !important;
  border-radius: 100%;
  padding: 1%;
  width: min-content;
  border-style: solid;
}

.trip-list {
  overflow: scroll;
  padding: 0;
  margin-top: 0vh;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

.trip-box {
  margin-top: 3vh;
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
  display: grid;
  grid-template:
    "AL BL"
    "A B";
  z-index: 10;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 15px 4px rgba(95, 95, 95, 0.24);
}

.input-field {
  margin-inline: 2vw;
  margin-bottom: 2vh;
}

.input-label {
  padding-inline: 2vw;
}
</style>
