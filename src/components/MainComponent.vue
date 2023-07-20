<script>
import { store } from "../store"
export default {
    name: "MainComponent",
    data() {
        return {
            store
        }
    },
    methods: {
        flag(lang) {
            if (lang == 'it') {
                return 'https://flagicons.lipis.dev/flags/4x3/it.svg'
            }else if (lang == 'en') {
                return 'https://flagicons.lipis.dev/flags/4x3/gb.svg'
            }else if (lang == 'fr') {
                return 'https://flagicons.lipis.dev/flags/4x3/fr.svg'
            }else if (lang == 'es') {
                return 'https://flagicons.lipis.dev/flags/4x3/es.svg'
            }else if (lang == 'de') {
                return 'https://flagicons.lipis.dev/flags/4x3/de.svg'
            }else if (lang == 'pt') {
                return 'https://flagicons.lipis.dev/flags/4x3/pt.svg'
            }else {
                return ''
            }
        }

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
            <ol>
            <li>
                {{ movie.title }}
            </li>
            <li>
                {{ movie.original_title }}
            </li>
            <li>
                <img :src="flag(movie.original_language)" :alt="movie.original_language.toUpperCase()">

            </li>
            <li>
                {{ movie.vote_average }}
            </li>
            </ol>
        </li>
        </ul>

        <h2>
            SERIES
        </h2>
        <ul>
        <li v-for="(serie, i) in store.series" :key="i">
            <ol>
            <li>
                {{ serie.name }}
            </li>
            <li>
                {{ serie.original_name }}
            </li>
            <li>
                <img :src="flag(serie.original_language)" :alt="serie.original_language.toUpperCase()">

            </li>
            <li>
                {{ serie.vote_average }}
            </li>
            </ol>
        </li>
        </ul>
    </main>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
img {
    width: 30px;
}
</style>