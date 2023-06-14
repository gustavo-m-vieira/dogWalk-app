export default {

    data() {
        return {
            name: "",
            breed: "",
            size: "",
            birthDate: "",
            temperament: "",
            tutor: "",
            warning: null,
            loading: false
        }
    },
  
    methods: {
        clicked() {
            this.loading = true
            console.log(`dog name is${this.name}`)
        }
    },
}