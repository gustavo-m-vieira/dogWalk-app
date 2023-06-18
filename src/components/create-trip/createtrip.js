import { getCurrentUser, getToken } from "../../utils";
import env from "../../env";
import router from "../../router";

export default {
  data() {
    const addresses = getCurrentUser().addresses;

    return {
      startDate: "",
      duration: "60",
      dogWalker: "",
      slots: "5",
      dogType: "",
      address: "",
      addresses: addresses.map((ad) => ({
        id: ad.id,
        description: `${ad.street}, ${ad.number} - ${ad.district}`,
      })),
      warning: null,
      loading: false,
    };
  },

  methods: {
    async clicked() {
      this.loading = true;

      try {
        // Read component form and create a dog
        const trip = this.parseTrip();
        await this.createTrip(trip);

        router.push("/trip-list");
      } catch (error) {
        this.loading = false;
        console.error(error);
        this.warning = error;
      }
    },

    parseTrip() {
      // Check for empty fields
      const mandatoryFields = [
        "startDate",
        "duration",
        "slots",
        "dogType",
        "address",
      ];
      mandatoryFields.forEach((field) => {
        console.log({ field, value: this[field] });
        if (
          !this[field] ||
          (typeof this[field] === "string" && this[field].trim() === "")
        )
          throw Error(`Field "${field}" cannot be left blank.`);
      });

      return {
        startDate: this.startDate,
        duration: parseInt(this.duration, 10),
        slots: parseInt(this.slots, 10),
        dogType: this.dogType,
        addressId: this.address,
      };
    },

    async createTrip(trip) {
      let req;
      try {
        req = await fetch(
          env.apiUrl +
            env.apiRoutes.createTrip({ userId: getCurrentUser().id }),
          {
            method: "POST",
            body: JSON.stringify(trip),
            headers: {
              "Content-Type": "application/json",
              Authorization: getToken(),
            },
          }
        );
      } catch (error) {
        // In case server communication fails
        console.error(error);
        throw Error("Failed to communicate to servers. Try again later.");
      }

      const resp = await req.json();

      // Server bad response
      if (!req.ok) throw Error(`Failed to create dog: ${resp.message}`);
    },
  },
};
