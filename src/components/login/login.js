import env from "../../env"
import * as jwt from "jose"


export default {

    data() {
        return {
            email: "",
            password: "",
            warning: null,
            loading: false
        }
    },

    methods: {

        /**
         * Get login credentials from component.
         * @returns {Login}
         */
        getCredentials() {
            
            return{
                "email": this.email,
                "password": this.password
            }
        },

        async clicked() {
            this.loading = true
            const credentials = this.getCredentials()

            try {
                const user = await this.authenticate(credentials)

                // Successful login
                this.saveUser(user);
                // router.push("/login")
            } 

            // Login failure
            catch (err) {
                this.loading = false;
                console.error(err);
                this.warning = err;
            }
        },

        /**
         * Authenticate the user with provided credentials.
         * @param {Login} credentials
         * @returns {LoginResponse}
         */
        async authenticate(credentials) {
            let req;
            try {
                req = await fetch(env.apiUrl + env.apiRoutes.login, {
                    method: "POST",
                    body: JSON.stringify(credentials),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
            }

            // In case server communication fails
            catch(_) {
                throw Error("Failed to communicate to servers. Try again later.")
            }

            const resp = await req.json();

            // Server bad response
            if (!req.ok)
                throw Error(`Login failed: ${resp.message}`)
            
            return jwt.decodeJwt(resp.token).user
        },

        /**
         * Save the current user to local storage, and set loggedIn to "true"
         * @param {LoginResponse} user
         */
        saveUser(user) {
            localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem("loggedIn", true)
        }
    },
}
