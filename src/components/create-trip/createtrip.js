import login from "../login/login"


export default {

    data() {
        return {
            startDate: "",
            duration: "60",
            dogWalker: "",
            slots: "5",
            dogType: "",
            warning: null,
            loading: false
        }
    },
  
    methods: {
        async clicked() {
            this.loading = true;
            console.log(this.startDate)
            login.methods.redirectToUserHome("DOGWALKER");
        }
    },
}