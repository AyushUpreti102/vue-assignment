<template>
  <div class="hello">
    <BaseButton :Alert="alrt"/><br/>
    <BaseButton1 :reverseName="reverse"/>
    
  </div>
</template>
<script>
import BaseButton from './BaseButton.vue';
import BaseButton1 from './BaseButton.vue';

export default {
    name: "HelloWorld",
    data() {
        return {
          alrt: true,
          reverse: true,
        }
  },
  components: { BaseButton, BaseButton1 }
}
</script>

<style>
.base-button__primary-button{
  color: white;
  background-color: #0069d9;
  border: none;
  padding: 10px;
  font-weight: bold;
  font-family: sans-serif;
}
</style>