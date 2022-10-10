<template>
  <div class="hello">
    <UserForm :toBeSubmited="storeDetails" :passDetails="formDetails" @submitingForm="submitted"/>
    <DisplayList :submitedDetails="storeDetails" :display="seen" @displayContent="display" />
  </div>
</template>
<script>
import UserForm from './UserForm.vue';
import DisplayList from './DisplayList.vue'
export default {
    name: "HelloWorld",
    components: { 
      UserForm,
      DisplayList
    },
    data(){
      return{
        message: 'hello', 
        formDetails: {
          name: '',
          email: '',
          phno: '',
        },
        seen: false,
        storeDetails: [],
      }
  },
  methods: {
    alertParent(val) {
      alert(val);
      this.message = 'message updated'
    },
    reverseButtonName() {
      this.buttonName = this.buttonName.split('').reverse().join('');
    },
    submitted(value) {
      value;
      this.formDetails.name = '';
      this.formDetails.email = '';
      this.formDetails.phno = '';
    },
    display(value) {
      if (value) {
        this.seen = false;
      }
      else {
        this.seen = true;
      }
    },
  }
}
</script>

<style>
.hello{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.UserForm {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.UserForm__Form {
  display: flex;
}

.UserForm__Buttons {
  display: flex;
}

.display-list {
  width: 50%;
}
.display-list button {
  position: absolute;
  left: 0;
}

.display-list__table tr {
  width: 100%;
}

.display-list__table tr td {
  border: 1px solid black;
  width: 6.3%;
  background-color: #ffe839;
}
</style>