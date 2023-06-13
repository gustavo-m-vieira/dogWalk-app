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
      clicked() {
        this.loading = true;
      }
    },
  }