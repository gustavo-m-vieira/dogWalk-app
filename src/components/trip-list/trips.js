import QueryString from "qs";
import { getCurrentUser, getToken } from "../../utils";
import env from "../../env";

/**
 * Get all dogs owned by a user.
 * @param {string} date The date.
 * @param {string} token an authorization token.
 * @returns {Promise<Dog[]>}
 */
async function getTrips({ startDate, walkerId, zipCode }) {
  let req;
  try {
    req = await fetch(
      env.apiUrl +
        env.apiRoutes.getTrips +
        "?" +
        QueryString.stringify({ startDate, walkerId, zipCode }),
      {
        method: "GET",

        headers: {
          "Content-Type": "application/json",
          Authorization: getToken(),
        },
      }
    );
  } catch (err) {
    // In case server communication fails
    console.error(err);
    throw Error("Failed to communicate to servers. Try again later.");
  }

  const resp = await req.json();

  // Server bad response
  if (!req.ok) throw Error(`Failed to create user: ${resp.message}`);

  return resp.trips;
}

export default {
  data() {
    return {
      isWalker: getCurrentUser().role === "DOGWALKER",
      userId: null,
      date: this.$route.query.date || "",
      zip: this.$route.query.zip || "",
      selectedDog: null,

      dogs: [],

      /** @type {Trip[]} */
      trips: [],
      selectedTrip: null,
    };
  },

  methods: {
    clicked() {
      this.loading = true;
      console.log(`duration is ${this.duration}`);
    },

    selectDogModal(box) {
      if (this.isWalker) return;

      this.selectedTrip = box.id;
      document.getElementById("select-a-dog").showModal();
      console.log(box.id);
    },

    /**
     * Get all dogs owned by a user.
     * @param {string} userId The id of the Tutor.
     * @param {string} token an authorization token.
     * @returns {Dog[]}
     */
    async getUserDogs(userId, token) {
      let req;
      try {
        req = await fetch(
          `${env.apiUrl}${env.apiRoutes.getDogs}?${new URLSearchParams({
            tutorId: userId,
          })}`,
          {
            method: "GET",
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        );
      } catch (err) {
        // In case server communication fails
        console.error(err);
        throw Error("Failed to communicate to servers. Try again later.");
      }

      const resp = await req.json();

      // Server bad response
      if (!req.ok) throw Error(`Failed to fetch dogs: ${resp.message}`);

      return resp.dogs;
    },

    searchTrips() {
      console.log({ date: this.date, zip: this.zip });

      this.$router.push({ query: { zip: this.zip, date: this.date } });

      window.location.href = `/trip-list?zip=${this.zip}&date=${this.date}`;
    },

    async deleteTrip({ id: tripId }) {
      this.loading = true;
      let req;
      try {
        req = await fetch(env.apiUrl + env.apiRoutes.deleteTrip(tripId), {
          method: "DELETE",

          headers: {
            "Content-Type": "application/json",
            Authorization: getToken(),  
          },
        });
      } catch (err) {
        // In case server communication fails
        console.error(err);
        throw Error("Failed to communicate to servers. Try again later.");
      }

      const resp = await req.json();

      // Server bad response
      if (!req.ok) throw Error(`Failed to create user: ${resp.message}`);

      this.trips = this.trips.filter((trip) => trip.id !== tripId);
      this.loading = false;
    },
  },

  async created() {
    const user = getCurrentUser();
    const token = getToken();

    this.isWalker = user.role === "DOGWALKER";
    this.userId = user.id;
    this.trips = (
      await getTrips({
        startDate: this.date,
        walkerId: this.isWalker ? user.id : null,
        zipCode: this.zip,
      })
    ).map((trip) => {
      const [date, time] = trip.startDate.split("T");

      const hourAndMinute = time.split(":").slice(0, 2).join(":");
      return {
        header: `${date} at ${hourAndMinute}`,
        ...trip,
      };
    });
    this.dogs = !this.isWalker && (await this.getUserDogs(user.id, token));
    console.log(this.dogs);
    console.log(this.trips);
  },

  async addDogToTrip(event) {
    event.preventDefault();

    this.selectedDog;

    let req;
    try {
      req = await fetch(
        env.apiUrl +
          env.apiRoutes.addDogToTrip({
            dogId: this.selectedDog,
            tripId: this.selectedTrip,
          }),
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: getToken(),
          },
        }
      );
    } catch (err) {
      // In case server communication fails
      console.error(err);
      throw Error("Failed to communicate to servers. Try again later.");
    }

    const resp = await req.json();

    // Server bad response
    if (!req.ok) throw Error(`Failed to create user: ${resp.message}`);
  },
};
