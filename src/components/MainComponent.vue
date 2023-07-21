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
        <div class="container">
            <h2 class="text-white">
                MOVIES
            </h2>
            <div class="row">
                <div class="col-3 d-flex flex-column" v-for="(movie, i) in store.movies" :key="i">
                    <MoviesSeriesComponent :elementOfMoviesSeries="movie"/>
                </div>
            </div>
    
            <h2 class="text-white">
                SERIES
            </h2>
            <div class="row">
                <div class="col-3 d-flex flex-column" v-for="(serie, i) in store.series" :key="i">
                    <MoviesSeriesComponent :elementOfMoviesSeries="serie"/>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
main {
    background-image: url(../assets/img/netflix-main.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
}

</style>