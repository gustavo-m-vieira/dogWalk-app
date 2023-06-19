import { getCurrentUser, getToken } from "../../utils";
import env from "../../env";
import router from "../../router";

export default {
  data() {
    return {
      street: "",
      number: "",
      complement: "",
      city: "",
      district: "",
      state: "",
      country: "",
      zipCode: "",
      warning: null,
      loading: false,
    };
  },

  methods: {
    async clicked() {
      this.loading = true;

      try {
        // Read component form and create a address
        const address = this.parseAddress();
        await this.createAddress(address);

        router.push("/tutor-page");
      } catch (error) {
        this.loading = false;
        console.error(error);
        this.warning = error;
      }
    },

    parseAddress() {
      // Check for empty fields
      const mandatoryFields = [
        "street",
        "number",
        "city",
        "district",
        "state",
        "country",
        "zipCode",
      ];
      mandatoryFields.forEach((field) => {
        console.log({ field, value: this[field] });
        if (
          !this[field] ||
          (typeof this[field] === "string" && this[field].trim() === "")
        )
          throw Error(`Field "${field}" cannot be left blank.`);
      });

      const params = {
        street: this.street,
        number: parseInt(this.number, 10),
        city: this.city,
        district: this.district,
        state: this.state,
        country: this.country,
        zipCode: this.zipCode.toString(),
      };

      console.log({ params });

      return params;
    },

    async createAddress(address) {
      let req;
      try {
        req = await fetch(
          env.apiUrl +
            env.apiRoutes.createAddress({ userId: getCurrentUser().id }),
          {
            method: "POST",
            body: JSON.stringify(address),
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
      if (!req.ok) throw Error(`Failed to create address: ${resp.message}`);

      router.push(
        getCurrentUser().role === "DOGWALKER" ? "/trip-list" : "tutor-page"
      );
    },
  },
};
