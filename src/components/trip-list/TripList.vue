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
    <label></label>
    <button
      class="material-symbols-outlined filter-button"
      v-on:click="searchTrips"
    >
      search
    </button>
  </div>

  <dialog id="select-a-dog">
    <form @submit="addDogToTrip">
      <p>
        <label>
          Who is taking a trip today?
          <select v-model="selectedDog" class="dog-selector">
            <option v-for="dog in dogs" v-bind:key="dog.id">
              {{ dog.name }}
            </option>
          </select>
        </label>
      </p>
      <div class="modal-list">
        <button>Cancel</button>
        <button type="submit">Confirm</button>
      </div>
    </form>
  </dialog>

  <ul class="trip-list">
    <li class="trip-box glass" v-for="trip in trips" v-bind:key="trip.id">
      <h1 class="text-main trip-box-title">{{ trip.header }}</h1>
      <div class="slots-delete-box">
        <ul class="slot-list">
          <li
            class="trip-slot filled-slot"
            v-for="dog in trip.dogs"
            v-bind:key="dog.id"
          ></li>
          <li
            class="trip-slot"
            v-on:click="selectDogModal(trip)"
            v-for="slot in Array(trip.slots - trip.dogs.length).keys()"
            v-bind:key="slot"
          ></li>
        </ul>

        <button
          class="material-symbols-outlined delete-trip"
          v-if="trip.walkerId === userId"
          v-on:click="deleteTrip(trip)"
        >
          delete
        </button>
      </div>
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
.delete-trip {
  text-align: center;
  font-size: 140% !important;
  padding: 1.5vw;
  box-sizing: content-box;
  width: 10vh;
  height: 10vh;
  margin: 1vh;
}

.delete-dog {
  position: fixed;
  right: 0;
  top: 0;
  transform: translate(-0%, -50%);
  font-size: 100% !important;
  padding-inline: 4px;
}

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
  overflow-x: auto;
  align-items: center;
  justify-content: start;
  padding: 0;
}

.trip-slot {
  height: 10vh;
  width: 10vh;
  background: #639fca;
  margin: 1vh;
  border-radius: 10%;
}

.filled-slot {
  background-image: url("https://cdn4.vectorstock.com/i/1000x1000/33/03/akita-head-dog-profile-vector-24973303.jpg");
  background-size: cover;
}

.add-trip {
  margin-top: 4vh;
  margin-bottom: 4vh;
  background: none;
  color: var(--accent-dark) !important;
  border-radius: 100%;
  padding: 1%;
  width: min-content;
  border-style: solid;
}

.trip-list {
  overflow-y: auto;
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
    "AL BL CL"
    "A B C";
  z-index: 10;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 15px 4px rgba(95, 95, 95, 0.24);
}

.input-field {
  margin-inline: 2vw;
  margin-bottom: 2vh;
  width: 200px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
}

.input-label {
  padding-inline: 2vw;
}

.filter-button {
  margin-top: 0;
  align-self: flex-start;
}

.slots-delete-box {
  display: flex;
}

ul {
  list-style-type: none;
}
</style>
