import { getCurrentUser, getToken } from "../../utils";
import env from "../../env";
import router from "../../router";

export default {
  data() {
    const tripId = this.$route.query.tripId;

    if (!tripId) router.push({ path: "/trip-list" });

    return {
      warning: null,
      loading: true,
      duration: "",
      slots: "",
      startDate: "",
      hour: "",
      minute: "",
      dogType: "",
      address: "",
      tripId,
      sendDog: false,
      canDeleteDog: false,
      mainButtonOption:
        getCurrentUser().role === "DOGWALKER" ? "Caught" : "Dropped",
    };
  },
  methods: {
    async getTrip({ token, tripId }) {
      let req;
      try {
        req = await fetch(`${env.apiUrl}${env.apiRoutes.getTrip({ tripId })}`, {
          method: "GET",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        });
      } catch (err) {
        // In case server communication fails
        console.error(err);
        throw Error("Failed to communicate to servers. Try again later.");
      }

      const resp = await req.json();

      // Server bad response
      if (!req.ok) router.push({ path: "/trip-list" });

      return resp.trip;
    },
  },

  async mounted() {
    const user = getCurrentUser();
    const token = getToken();

    const trip = await this.getTrip({ user, token, tripId: this.tripId });

    console.log({ trip });

    this.duration = trip.duration;
    this.slots = trip.slots;
    this.startDate = trip.startDate.split("T")[0];
    this.hour = trip.startDate.split("T")[1].split(":")[0];
    this.minute = trip.startDate.split("T")[1].split(":")[1];
    this.dogType = trip.dogType;
    this.address =
      trip.address.street +
      ", " +
      trip.address.number +
      " - " +
      trip.address.district;
    this.loading = false;
  },
};
