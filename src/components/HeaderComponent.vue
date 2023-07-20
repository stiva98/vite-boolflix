<script>
import { store } from "../store"
export default {
    name: "HeaderComponent",
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
    <header>
        <input type="text" placeholder="Cerca il tuo film o Serie TV" v-model="store.searchMovies" @keyup.enter="$emit('emitSearch')">
    <button @click="$emit('emitSearch')">
      Cerca
    </button>
    </header>
</template>

<style lang="scss" scoped>

</style>