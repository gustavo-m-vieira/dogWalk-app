import env from "../../env";
import * as jwt from "jose";
import router from "../../router";

export default {
  data() {
    return {
      email: "",
      password: "",
      warning: null,
      loading: false,
    };
  },

  methods: {
    /**
     * Get login credentials from component.
     * @returns {Login}
     */
    getCredentials() {
      return {
        email: this.email,
        password: this.password,
      };
    },

    async clicked(event) {
      event.preventDefault();

      this.loading = true;
      const credentials = this.getCredentials();

      try {
        const user = await this.authenticate(credentials);

        // Successful login
        this.onLoginSuccess(user);
      } catch (err) {
        // Login failure
        this.loading = false;
        console.error(err);
        this.warning = err;
      }
    },

    /**
     * Handle successful login redirect and user info storing.
     * @param {LoginResponse} user The logged in user.
     */
    onLoginSuccess(user) {
      this.saveUser(user);
      this.redirectToUserHome(user.role);
    },

    /**
     * Redirect to the appropriate user home.
     * @param {UserRoles} role
     */
    redirectToUserHome(role) {
      if (role === "DOGWALKER") router.push("/trip-list");
      else router.push("/tutor-page");
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

      this.saveToken(resp.token);
      return jwt.decodeJwt(resp.token).user;
    },

    /**
     * Save the current user to local storage, and set loggedIn to "true"
     * @param {LoginResponse} user
     */
    saveUser(user) {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("loggedIn", true);
    },

    saveToken(token) {
      localStorage.setItem("token", token);
    },
  },
};
