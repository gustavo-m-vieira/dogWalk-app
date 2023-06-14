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
        clicked() {
            this.loading = true
            console.log(`current email is ${this.email}`)
        }
    },
}
