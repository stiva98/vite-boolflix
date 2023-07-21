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
    <header class="bg-black p-2">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-auto">
                    <img src="../assets/img/netflix-logo-header.png" alt="Netflix" class="w-25">
                </div>
                <div class="col-auto d-flex">
                    <input type="text" placeholder="Cerca il tuo Film o Serie TV" v-model="store.searchMovies" @keyup.enter="$emit('emitSearch')" class="form-control">
                    <button @click="$emit('emitSearch')" type="button" class="btn btn-outline-warning">
                    Cerca
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>

</style>