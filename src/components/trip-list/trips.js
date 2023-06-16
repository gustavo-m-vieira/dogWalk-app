import { getCurrentUser } from "../../utils";


export default {

    data() {

        return {

            isWalker: null,
            date: "",
            zip: "",

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
                },     {
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
        }
    },

    async created() {
        const user = getCurrentUser();
        this.isWalker = user.role === "DOGWALKER";
    }
}