<script>
export default {
    name: "MoviesSeries",
    data () {
        return {

        };
    },
    props: {
        elementOfMoviesSeries: {
            type: Object,
            default: null
        }
    },
    computed: {
        flag() {
            if (this.elementOfMoviesSeries.original_language == 'it') {
                return 'https://flagicons.lipis.dev/flags/4x3/it.svg'
            }else if (this.elementOfMoviesSeries.original_language == 'en') {
                return 'https://flagicons.lipis.dev/flags/4x3/gb.svg'
            }else if (this.elementOfMoviesSeries.original_language == 'fr') {
                return 'https://flagicons.lipis.dev/flags/4x3/fr.svg'
            }else if (this.elementOfMoviesSeries.original_language == 'es') {
                return 'https://flagicons.lipis.dev/flags/4x3/es.svg'
            }else if (this.elementOfMoviesSeries.original_language == 'de') {
                return 'https://flagicons.lipis.dev/flags/4x3/de.svg'
            }else if (this.elementOfMoviesSeries.original_language == 'pt') {
                return 'https://flagicons.lipis.dev/flags/4x3/pt.svg'
            }else {
                return ''
            }
        }
    },
    methods: {
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
    <div class="position-relative mb-4 card">
        <img :src="srcImage(elementOfMoviesSeries.poster_path)" :alt="elementOfMoviesSeries.title" class="border border-white h-100 w-100">
        <ol class="list-unstyled position-absolute top-0 start-0 h-100">
            <li class="text-white">
                {{ elementOfMoviesSeries.title ?? elementOfMoviesSeries.name }}
            </li>
            <li class="text-white">
                {{ elementOfMoviesSeries.original_title ?? elementOfMoviesSeries.original_name }}
            </li>
            <li class="text-white">
                <img :src="flag" :alt="elementOfMoviesSeries.original_language.toUpperCase()" class="img-flag">

            </li>
            <li class="text-white">
                {{ numberEntire(elementOfMoviesSeries.vote_average) }}
                <i class="fa-star text-warning" :class="i <= numberEntire(elementOfMoviesSeries.vote_average) ? 'fa-solid' : 'fa-regular'"  v-for="i in 5" :key="i"></i>
            </li>
        </ol>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
.img-flag {
    width: 30px;
}
ol {
    opacity: 0;
    visibility: hidden;
}
.card:hover ol{
    opacity: 1;
    visibility: visible;
    background-color: rgba($color: #000000, $alpha: 0.8);
    padding: 20px;
    width: 100%;
}
</style>