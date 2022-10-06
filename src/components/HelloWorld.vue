<template>
  <div class="hello">
    <p>{{name}}</p>
    <p>{{message}}</p>
    <form action="">
      <input v-model="message">
    </form><br />
    <button @click="clear">Clear</button> <button @click="text">Capital</button>
    <div class="hello__TestVue" v-if="seen">
      <TestVue />
    </div>
    <button @click="hide">Hide Para</button>
    <p class="hello__p" :class="(isRed)?'red':'hello__p'">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Accusamus quod at,
      assumenda impedit
      consequatur eaque.</p>
    <input type="checkbox" v-model="isRed">Red
    </div>
</template>

<script>
import TestVue from './TestVue.vue';
export default {
  name: "HelloWorld",
  TestVue,
  data() {
    return {
      name: "Ayush",
      message: "",
      seen: true,
      isRed: false,
    };
  },
  methods: {
    clear() {
      if (this.message != "") {
        this.message = "";
      }
    },
    text() {
      this.message = this.message.toUpperCase();
    },
    hide() {
      if (this.seen) {
        this.seen = false;
      }
      else {
        this.seen = true;
      }
    },
  },
  created() {
    console.warn("HelloWorld Created");
  },
  mounted() {
    console.warn("HelloWorld Mounted");
  },
  updated() {
    console.warn("HelloWorld Updated");
  },
  components: { TestVue }
}
</script>
<style scoped>
.red {
  color: red;
}
</style>
