<template>
    <v-container>
        <v-layout row wrap class="mx-auto">
            <v-flex v-for="(card, i) in getCards" :key="i" xs12 sm6 md4 lg3 style="margin: 10px 0;"> 
                <v-card height="300px" width="250px" class="cards">
                    <v-btn x-small text color="black" @click="deleteCard(i)">x</v-btn>
                    <v-img :src="card.imagePreviewURL" height="200px"></v-img>
                    <v-card-title>{{card.name}}</v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    name: 'AnimalsCards.vue',
    computed: {
        getCards() {
            return this.$store.getters.getCards;
        }
    },
    methods: {
        deleteCard(i) {
            this.$store.dispatch('deleteCard', i);
        }
    }
}
</script>
<style scoped>
@media only screen and (max-width: 500px) {
    .cards {
        margin: auto;
    }
}
</style>