import router from "../../router"


export default {

    data() {
        return {
        }
    },

    computed: {

        /**
         * Computes the visibility of the component depending whether the user is logged in or not.
         * @returns {boolean} The visibility state of the component.
         */
        visible: () => {
            const disabledIn = ["/", "/login", "/sign-up"];
            return !disabledIn.includes(router.currentRoute.value.fullPath)
        }
    },
  
    methods: {

        /**
         * Navigate back to the last route, unless it's non logged-in area.
         */
        goBack() {

            const disabledIn = ["/login", "/sign-up"];

            // If the last route was a public area, do nothing
            if (disabledIn.includes(router.options.history.state.back))
                return;

            router.back()
        },

        /**
         * Performs a complete logout, re-routing and clearing state.
         */
        logout() {            
            localStorage.clear();
            localStorage.setItem("loggedIn", false);
            router.push("/");
        }
    }
}