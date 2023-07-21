<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import axios from "axios";
import { store } from "./store"

export default {
  name: "App",
  components: {
    HeaderComponent,
    MainComponent,
  },
  data() {
    return {
      store
    };
  },
  methods: {
    search() {
      //console.log (this.store.searchMovies);

      axios
          .get('https://api.themoviedb.org/3/search/movie', {
            params: {
              api_key: '96a88563f87a075c5b061d8855e26795',
              query: this.store.searchMovies
            }
          })
          .then(res => {
            this.store.movies = res.data.results;
          })
      axios
          .get('https://api.themoviedb.org/3/search/tv', {
            params: {
              api_key: '96a88563f87a075c5b061d8855e26795',
              query: this.store.searchMovies
            }
          })
          .then(res => {
            this.store.series = res.data.results;
          })
    }
  },
};
</script>

<template>
  <HeaderComponent @emitSearch="search()"/>

  <MainComponent />
</template>

<style lang="scss">
@use "assets/scss/main";
</style>
