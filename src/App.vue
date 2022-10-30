<template>
  <v-app>
    <v-main>
      <NavBar />
      <AnimalsCards/>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import AnimalsCards from "./components/AnimalsCards.vue";

export default {
    name: 'App',
  components: {
    NavBar,
    AnimalsCards,
  },
};
</script>
