<script>
import { store } from "../store";
import MoviesSeriesComponent from "../components/MoviesSeriesComponent.vue";
export default {
    name: "MainComponent",
    components: {
        MoviesSeriesComponent
    },
    data() {
        return {
            store
        }
    },
    methods: {

    }
}
</script>

<template>
    <main class="background">
        <h2 class="text-white">
            MOVIES
        </h2>
        <ul class="list-unstyled">
            <li v-for="(movie, i) in store.movies" :key="i">
                <MoviesSeriesComponent :elementOfMoviesSeries="movie"/>
            </li>
        </ul>

        <h2 class="text-white">
            SERIES
        </h2>
        <ul class="list-unstyled">
            <li v-for="(serie, i) in store.series" :key="i">
                <MoviesSeriesComponent :elementOfMoviesSeries="serie"/>
            </li>
        </ul>
    </main>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
main {
    background-image: url(../assets/img/netflix-main.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    //height: 100vh;
}

</style>