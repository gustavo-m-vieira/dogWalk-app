export default {

    data() {
      return {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordRepeat: "",
        warning: null,
        loading: false
      }
    },
  
    methods: {
      clicked() {
        this.loading = true;
        console.log(`current email is ${this.email}`)
      }
    },
  }
  