<template>
  <div class="hello">
    <base-button @alert="alertParent" :btnName="buttonName" @reverse="reverseButtonName"/> <br/>
  </div>
</template>
<script>
import BaseButton from './base-button.vue';
export default {
    name: "HelloWorld",
    components: { BaseButton },
    data(){
      return{
        message: 'hello',
        buttonName: 'Primary',
      }
  },
  methods: {
    alertParent(val) {
      alert(val);
      this.message = 'message updated'
    },
    reverseButtonName() {
      this.buttonName= this.buttonName.split('').reverse().join('');
    }
  }
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