import { reactive } from "vue";

export const store = reactive ({
    searchMovies: "",
    movies: [],
    series: []
});