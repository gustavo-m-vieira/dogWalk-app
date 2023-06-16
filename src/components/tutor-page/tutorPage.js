import { getCurrentUser } from "../../utils";

export default {

    data() {
        return {
            startDate: "",
            duration: "60",
            dogWalker: "",
            slots: "5",
            dogType: "",
            name: getCurrentUser().name,
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