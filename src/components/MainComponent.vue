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
        },
        srcImage(linkImage) {
            const image = 'https://image.tmdb.org/t/p/' + 'w342' + linkImage;
            return image
        },
        numberEntire(voteFilms) {
            const voteEntire = Math.ceil(voteFilms / 2);
            return voteEntire
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
                        <img :src="srcImage(movie.poster_path)" :alt="movie.title">
                    </li>
                    <li>
                        {{ movie.title }}
                    </li>
                    <li>
                        {{ movie.original_title }}
                    </li>
                    <li>
                        <img :src="flag(movie.original_language)" :alt="movie.original_language.toUpperCase()" class="img-flag">

                    </li>
                    <li>
                        {{ numberEntire(movie.vote_average) }}
                        <i class="fa-star text-warning" :class="i <= numberEntire(movie.vote_average) ? 'fa-solid' : 'fa-regular'"  v-for="i in 5" :key="i"></i>
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
                        <img :src="srcImage(serie.poster_path)" :alt="serie.title">
                    </li>
                    <li>
                        {{ serie.name }}
                    </li>
                    <li>
                        {{ serie.original_name }}
                    </li>
                    <li>
                        <img :src="flag(serie.original_language)" :alt="serie.original_language.toUpperCase()" class="img-flag">

                    </li>
                    <li>
                        {{ numberEntire(serie.vote_average) }}
                        <i class="fa-solid fa-star"></i>
                    </li>
                </ol>
            </li>
        </ul>
    </main>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
.img-flag {
    width: 30px;
}
</style>