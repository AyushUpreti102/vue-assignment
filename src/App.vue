<template>
  <v-app>
    <v-main>
      <TodoApp/>
      <TodoList/>
    </v-main>
  </v-app>
</template>

<script>
import TodoApp from './components/TodoApp.vue';
import TodoList from './components/TodoList.vue';

export default {
    name: 'App',
  components: {
    TodoApp,
    TodoList
  },
};
</script>
