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
    <p :class="isRed? 'red' : 'hello__para'">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Accusamus quod at,
      assumenda impedit
      consequatur eaque.</p>
    <input type="checkbox" v-model="isRed">Red
    <p :class="(color==='black')?'hello__para':((color==='Red')?'red':((color==='Green')?'green':'blue'))">Select the
      color from list below:
    </p>
    <legend>Select the color</legend>
    <select name="color" id="color" v-model="color">
      <option>Red</option>
      <option>Green</option>
      <option>Blue</option>
    </select>
    <legend>Selected the colors from the array:</legend>
    <select name="colors" id="colors" v-model="color_value">
      <option v-for="(col, index) in colors" :key="index" :value="{colr: col}">{{col}}</option>
    </select>
    <p
      :class="(color_value.colr==='Black')?'hello__para':((color_value.colr==='Red')?'red':((color_value.colr==='Green')?'green':'blue'))">
      {{color_value.colr}}
    </p>
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
      color: 'black',
      colors: ['Black', 'Red', 'Blue', 'Green'],
      color_value: {
        colr: ''
      }
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
.green {
  color: green;
}

.blue {
  color: blue;
}

.hello__para {
  color: black;
}
</style>
