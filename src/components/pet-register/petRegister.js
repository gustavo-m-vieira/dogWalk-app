import { getCurrentUser, getToken } from "../../utils";
import env from "../../env";
import router from "../../router";

export default {
  data() {
    return {
      name: "",
      breed: "",
      size: "",
      birthDate: "",
      temperament: "",
      tutor: "",
      warning: null,
      loading: false,
    };
  },

  methods: {
    async clicked() {
      this.loading = true;

      try {
        // Read component form and create a dog
        const dog = this.parseDog();
        await this.createDog(dog);

        router.push("/tutor-page");
      } catch (error) {
        this.loading = false;
        console.error(error);
        this.warning = error;
      }
    },

    parseDog() {
      // Check for empty fields
      const mandatoryFields = [
        "name",
        "breed",
        "size",
        "birthDate",
        "temperament",
      ];
      mandatoryFields.forEach((field) => {
        if (this[field].trim() === "")
          throw Error(`Field "${field}" cannot be left blank.`);
      });

      return {
        name: this.name,
        breed: this.breed,
        size: this.size,
        birthDate: this.birthDate,
        temperament: this.temperament,
        tutorId: getCurrentUser().id,
      };
    },

    async createDog(dog) {
      let req;
      try {
        req = await fetch(env.apiUrl + env.apiRoutes.createDog, {
          method: "POST",
          body: JSON.stringify(dog),
          headers: {
            "Content-Type": "application/json",
            Authorization: getToken(),
          },
        });
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
