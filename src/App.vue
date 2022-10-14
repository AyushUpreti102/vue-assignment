<template>
  <div id="app">
    <SlotsVue>
      <template v-slot:header>
        <img src="./assets/download.jpg" style="height: 40%; width: 100%;">
      </template>
      <template v-slot:title>
        <h1 style="font-size: 25px">Card Title</h1>
      </template>
      <template v-slot:body>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi est molestiae dolores vel repellendus
          corrupti sed reprehenderit tenetur consequatur blanditiis.</span>
        </template>
        <template v-slot:footer>
          <button style="padding: 10px; background-color: #007bff; color: white; border: none; font-size: 12px;">Go SomeWhere</button> 
        </template>
    </SlotsVue>
  </div>
</template>

<script>
import SlotsVue from "./components/SlotsVue.vue";

export default {
  name: "App",
  components: { SlotsVue },
}
</script>

<style>

</style>
