export default {
  apiUrl: "http://localhost:3000",
  apiRoutes: {
    createUser: "/api/users",
    login: "/api/generate-token",
    createDog: "/api/dogs",
    getDogs: "/api/dogs",
    createTrip: (props) => `/api/users/${props.userId}/trips`,
    getTrips: "/api/trips",
    addDogToTrip: (props) => `/api/trips/${props.tripId}/dogs/${props.dogId}`,
  },
};
