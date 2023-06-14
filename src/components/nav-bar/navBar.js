import router from "../../router"

export default {

    data() {
        return {
        }
    },
  
    methods: {

        /**
         * Computes the visibility of the component depending whether the user is logged in or not.
         * @returns {boolean} The visibility state of the component.
         */
        visible() {
            const state = localStorage.getItem("loggedIn")
            return state === "true"
        },

        goBack() {
            router.back()
        }
    }
}