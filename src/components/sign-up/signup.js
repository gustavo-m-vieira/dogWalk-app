import env from "../../env"
import login from "../login/login"


export default {

    data() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordRepeat: "",
            warning: null,
            isWalker: true,
            loading: false
        }
    },
  
    methods: {
        async clicked() {
            this.loading = true

            try {

                // Read component form and create account
                const user = this.parseUser();
                await this.createUser(user)

                // Login to newly created account
                const auth = await login.methods.authenticate({
                    email: user.email,
                    password: user.password
                })
                login.methods.onLoginSuccess(auth);
            } 

            catch (err) {
                this.loading = false;
                console.error(err);
                this.warning = err;
            }
        },

        /**
         * Get user info as a CreatableUser from form data.
         * @throws In case the user data is invalid
         * @returns {CreatableUser}
         */
        parseUser() {

            return {
                name: this.firstName + this.lastName,
                email: this.email,
                password: this.password,
                cpf: this.cpf,
                role: this.isWalker ? "DOGWALKER" : "TUTOR",
                telephone: this.phone
            }
        },

        /**
         * Creates a new application user.
         * @param {CreatableUser} user The user info
         * @throws On bad response
         */
        async createUser(user) {

            let req;
            try {
                req = await fetch(env.apiUrl + env.apiRoutes.createUser, {
                    method: "POST",
                    body: JSON.stringify(user),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
            } 
            
            // In case server communication fails
            catch(err) {
                console.error(err);
                throw Error("Failed to communicate to servers. Try again later.")
            }

            const resp = await req.json();

            // Server bad response
            if (!req.ok)
                throw Error(`Failed to create user: ${resp.message}`)
        }
    },
}
  