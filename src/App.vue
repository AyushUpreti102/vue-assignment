<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <FormList />
  </div>
</template>

<script>
import FormList from './components/FormList.vue';

export default {
  name: 'App',
  components: {
    FormList,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
