import env from "../../env";
import { getCurrentUser, getToken } from "../../utils";


export default {

    data() {

        return {

            isWalker: null,
            date: "",
            zip: "",
            selectedDog: null,

            /** @type {Trip[]} */
            trips: [
                {
                    walker: "Braya",
                    slots: 4,
                    time: "aghora"
                },
                {
                    walker: "Braya 2",
                    slots: 4,
                    time: "aghora"
                },
                {
                    walker: "Braya 3",
                    slots: 4,
                    time: "aghora"
                },

                {
                    walker: "Braya4 ",
                    slots: 4,
                    time: "aghora"
                },
                {
                    walker: "Braya 43",
                    slots: 4,
                    time: "aghora"
                },

                {
                    walker: "Braya4 4",
                    slots: 4,
                    time: "aghora"
                }, {
                    walker: "Braya 31",
                    slots: 4,
                    time: "aghora"
                },

                {
                    walker: "Braya4 5",
                    slots: 4,
                    time: "aghora"
                }
            ]
        }
    },

    methods: {
        clicked() {
            this.loading = true
            console.log(`duration is ${this.duration}`)
        },

        selectDogModal(box) {
            document.getElementById("select-a-dog").showModal();
            console.log(box)
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
                req = await fetch(env.apiUrl + env.apiRoutes.getDogs, {
                    method: "GET",
                    headers: {
                        "Authorization": token,
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
            if (!req.ok) throw Error(`Login failed: ${resp.message}`);

            return resp.dogs;
        }
    },

    async created() {
        const user = getCurrentUser();
        const token = getToken();

        this.isWalker = user.role === "DOGWALKER";
        this.dogs = await this.getUserDogs(user.id, token);
        console.log(this.dogs)
    }
}