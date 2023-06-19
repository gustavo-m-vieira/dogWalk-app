import env from "../../env";
import { getCurrentUser, getToken } from "../../utils";


export default {

    data() {

        return {

            isWalker: null,
            userId: null,
            date: "",
            zip: "",
            selectedDog: null,
            dogs: [],

            /** @type {Trip[]} */
            trips: [
                {
                    "id": "any_id",
                    "startDate": "2023-06-19T00:00:00.000Z",
                    "duration": 60,
                    "slots": 5,
                    "dogType": "COOL",
                    "walkerId": "9ea5c84f-0204-4d62-84a2-8fe4eb54bfc3",
                    "dogs": [
                        {
                            "id": "b9704635-ac0d-42c2-ba57-a5b9d22448ec",
                            "caughtAt": "2023-06-18T21:56:53.571Z",
                            "droppedAt": "2023-06-18T23:02:20.746Z"
                        },
                        {
                            "id": "b9704485-ac0d-42c2-ba57-a5b9d22448ec",
                            "caughtAt": "2023-06-18T21:56:53.571Z",
                            "droppedAt": "2023-06-18T23:02:20.746Z"
                        }
                    ],
                    "addressId": "f56a2de5-17d0-45f1-afcb-4331a05d761d",
                    "createdAt": "2023-06-18T22:44:57.480Z"
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
                req = await fetch(
                    `${env.apiUrl}${env.apiRoutes.getDogs}?${new URLSearchParams({tutorId: userId})}`, {
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
            if (!req.ok) throw Error(`Failed to fetch dogs: ${resp.message}`);

            return resp.dogs;
        },

        // /**
        //  * Get all dogs owned by a user.
        //  * @param {string} date The date.
        //  * @param {string} token an authorization token.
        //  * @returns {Dog[]}
        //  */
        // async getTrips(date, token) {
        //     let req;
        //     try {
        //         req = await fetch(
        //             `${env.apiUrl}${env.apiRoutes.getDogs}?${new URLSearchParams({tutorId: userId})}`, {
        //                 method: "GET",
        //                 headers: {
        //                     "Authorization": token,
        //                     "Content-Type": "application/json",
        //                 },
        //             });
        //     } catch (err) {
        //         // In case server communication fails
        //         console.error(err);
        //         throw Error("Failed to communicate to servers. Try again later.");
        //     }

        //     const resp = await req.json();

        //     // Server bad response
        //     if (!req.ok) throw Error(`Login failed: ${resp.message}`);

        //     return resp.dogs;
        // }


    },

    async created() {
        const user = getCurrentUser();
        const token = getToken();

        this.isWalker = user.role === "DOGWALKER";
        this.userId = user.id;
        this.dogs = await this.getUserDogs(user.id, token);
        console.log(this.dogs)
        console.log(this.trips);
    }
}