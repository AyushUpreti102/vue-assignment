<template>
    <v-app-bar elevation="2" class="teal lighten-3">
        <v-app-bar-title>
            <h1 class="display-1 brown--text lighten-2">Animal Kingdom <v-icon x-large>mdi-elephant</v-icon>
            </h1>
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn text color="white darken-4">Add your own Card <v-icon right>mdi-cards</v-icon>
        </v-btn>
    </v-app-bar>
</template>
<script>
export default {
    name: 'NavBar',

}
</script>