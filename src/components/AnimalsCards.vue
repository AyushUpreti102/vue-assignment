<template>
    <v-container>
        <v-card>
            <v-card-title>
                <v-card height="250" width="250px">
                    <v-img src="https://picsum.photos/1920/1080?randoms">
                    </v-img>
                    <v-card-title>Dog</v-card-title>
                </v-card>
            </v-card-title>
        </v-card>
    </v-container>
</template>
<script>
export default {
    name: 'AnimalsCards.vue',
    data() {
        return {
            // myImage: require('src/assets'),
        }
    }
}
</script>