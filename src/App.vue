<template>
  <div id="app">
    <button @click="addTimer">Add Timer</button>
    <div class="app__Timer">
      <div class="app__Counter" v-for="(element, index) in addedTimers" :key="index">
        <TimeDisplayer :time="addedTimers[index].num" @number="increaseNum(index)"/>
        <button @click="removeTimer(index)">Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
import TimeDisplayer from './components/TimeDisplayer.vue';
export default {
  name: 'App',
  components: {
    TimeDisplayer
},
data(){
  return{
    id: 0,
    addedTimers: []
  }
},
methods: {
  increaseNum(index){
    this.addedTimers[index].num++;
  },
  addTimer(){
    this.addedTimers.push({num : 0, id: this.id});
    this.id++;
  },
  removeTimer(index){
    this.addedTimers.splice(index, 1);
  }
}
}
</script>

<style scoped>
#app {
  padding: 15px;
    min-height: 600px;
    background-color: darkgreen;
  }
  
  #app button {
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  
  .app__Counter {
    border: 1px solid red;
    border-radius: 10px;
    background-color: rgb(102, 154, 102);
    width: 250px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 15px;
  }
  
  .app__Timer {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}
</style>
