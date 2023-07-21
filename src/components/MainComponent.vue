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
    <main>
        <h2>
            MOVIES
        </h2>
        <ul>
            <li v-for="(movie, i) in store.movies" :key="i">
                <MoviesSeriesComponent :elementOfMoviesSeries="movie"/>
            </li>
        </ul>

        <h2>
            SERIES
        </h2>
        <ul>
            <li v-for="(serie, i) in store.series" :key="i">
                <MoviesSeriesComponent :elementOfMoviesSeries="serie"/>
            </li>
        </ul>
    </main>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;

</style>