<template>
    <div class="UserForm">
        <form>
            <label for="email">Email</label>
            <input type="email" v-model="userDetails.email">
            <label for="name">Name</label>
            <input type="text" v-model="userDetails.name">
            <label for="dateOfBirth">Date of Birth</label>
            <input type="date" v-model="userDetails.dob">
            <label for="password">Password</label>
            <input type="text" v-model="userDetails.password">
            <label for="confirmPassword">Confirm password</label>
            <input type="text" v-model="userDetails.confirmPassword">
            <div>
                <input type="checkbox" v-model="userDetails.checkbox">
                <label for="termsAndConditions">Accept terms and conditions</label>
            </div>
            <button class="UserForm__Button Button" @click.prevent="displayDetails">Submit</button>
        </form>
        <div class="UserForm__Details" v-if="seen">
            <DisplayDetails :userInfo="savedDetails" @editDetails="editDetails"/>
        </div>
    </div>
</template>
<script>
import DisplayDetails from './DisplayDetails.vue';
export default {
    name: "UserForm",
    components: { DisplayDetails },
    data() {
        return {
            userDetails: {
                email: "",
                name: "",
                dob: "",
                password: "",
                confirmPassword: "",
                checkbox: false
            },
            savedDetails: {
                email: "",
                name: "",
                dob: "",
                password: "",
                checkbox: false
            },
            seen: false,
        };
    },
    methods: {
        displayDetails() {
            if (this.userDetails.password === this.userDetails.confirmPassword) {
                this.seen = true;
                this.savedDetails.email = this.userDetails.email;
                this.savedDetails.name = this.userDetails.name;
                this.savedDetails.dob = this.userDetails.dob;
                this.savedDetails.password = this.userDetails.password;
                this.savedDetails.checkbox= this.userDetails.checkbox;
                this.userDetails.email = "";
                this.userDetails.name = "";
                this.userDetails.dob = "";
                this.userDetails.password = "";
                this.userDetails.confirmPassword = "";
                this.userDetails.checkbox = false;
            }
            else {
                alert("wrong password");
            }
        },
        editDetails(value) {
            if(value){
                this.userDetails.email = this.savedDetails.email;
                this.userDetails.name = this.savedDetails.name;
                this.userDetails.dob = this.savedDetails.dob;
                this.userDetails.password = this.savedDetails.password;
                this.userDetails.checkbox= this.savedDetails.checkbox;
            }
        },
    },
}
</script>
<style scoped>
.UserForm{
    margin-top: 10px;
}
.UserForm form {
    background-color: rgb(154, 154, 225);
    color: white;
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
}
.UserForm form div{
    display: flex;
    align-items: center;
}
.UserForm form input{
    height: 30px;
    outline: none;
    font-size: 18px;
    color: blue;
}
.UserForm__Button{
    width: 20%;
    padding: 10px;    
}
</style>