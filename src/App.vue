<template>
  <v-app>
    <v-main>
      <NavBar/>
      <UserTodoList/>
    </v-main>
  </v-app>
</template>

<script>
import UserTodoList from "./components/UserTodoList.vue";
import NavBar from "./components/NavBar.vue";


export default {
  name: 'App',

  components: {
    UserTodoList,
    NavBar
},

  data: () => ({
    //
  }),
};
</script>
