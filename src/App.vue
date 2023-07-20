<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent,
  },
  data() {
    return {
      searchMovies: "",
      movies: []
    };
  },
  methods: {
    search() {
      //console.log (this.searchMovies);

      axios
        .get('https://api.themoviedb.org/3/search/movie', {
          params: {
            api_key: '96a88563f87a075c5b061d8855e26795',
            query: this.searchMovies
          }
        })
        .then(res => {
          this.movies = res.data.results;
        })
    }
  },
};
</script>

<template>
  <header>
    <input type="text" placeholder="Cerca il tuo film o Serie TV" v-model="searchMovies">
    <button @click="search()">
      Cerca
    </button>
  </header>
  
  <main>
    <ul>
      <li v-for="(movie, i) in movies" :key="i">
        <ol>
          <li>
            {{ movie.title }}
          </li>
          <li>
            {{ movie.original_title }}
          </li>
          <li>
            {{ movie.original_language }}
          </li>
          <li>
            {{ movie.vote_average }}
          </li>
        </ol>
      </li>
    </ul>
      
    </main>
    <!--<HeaderComponent />

  <MainComponent />

  <FooterComponent />-->
</template>

<style lang="scss">
@use "assets/scss/main";
</style>
