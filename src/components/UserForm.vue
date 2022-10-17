<template>
    <div class="UserForm">
        <button class="AddForm__Button Button1" @click="showForm">Open Form</button>
    <div class="UserForm__AddedForm" :class="show?'display':'AddForm__Form'" @click.prevent="show=!show">
        <form @submit.prevent="displayDetails" @click.stop>
            <div class="UserForm__Head">
                <span>{{msg}}</span>
                <button class="AddForm__Button Button2" @click.prevent="hideForm">x</button>
            </div>
            <label for="email">Email</label>
            <input type="email" v-model="userDetails.email">
            <label for="name">Name</label>
            <input type="text" v-model="userDetails.name">
            <label for="dateOfBirth">Date of Birth</label>
            <input type="date" v-model="userDetails.dob">
            <label for="password">Password</label>
            <input type="password" v-model="userDetails.password" required>
            <label for="confirmPassword">Confirm password</label>
            <input type="password" v-model="userDetails.confirmPassword">
            <span class="UserForm__Warning">{{warning}}</span>
            <div>
                <input type="checkbox" v-model="userDetails.checkbox" required>
                <label for="termsAndConditions">Accept terms and conditions</label>
            </div>
            <button class="UserForm__Button Button" type="submit">Submit</button>
        </form>
    </div>
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
            warning: '',
            show: false,
            msg: 'Add User',
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
                this.savedDetails.checkbox = this.userDetails.checkbox;
                this.userDetails.email = "";
                this.userDetails.name = "";
                this.userDetails.dob = "";
                this.userDetails.password = "";
                this.userDetails.confirmPassword = "";
                this.userDetails.checkbox = false;
                this.warning = ''
                this.show = false
            }
            else {
                this.warning = 'password not matched'
            }
            this.$emit('details', this.savedDetails);
        },
        showForm() {
            this.show = true;
            this.userDetails.email = "";
            this.userDetails.name = "";
            this.userDetails.dob = "";
            this.userDetails.password = "";
            this.userDetails.confirmPassword = "";
            this.userDetails.checkbox = false;
            this.warning = ''
            this.msg = 'Add User'
        },
        hideForm() {
            this.show = false;
        },
        editDetails(value) {
            if (value) {
                this.userDetails.email = this.savedDetails.email;
                this.userDetails.name = this.savedDetails.name;
                this.userDetails.dob = this.savedDetails.dob;
                this.userDetails.password = this.savedDetails.password;
                this.userDetails.checkbox = this.savedDetails.checkbox;
                this.show = true;
                this.msg = this.savedDetails.name;
            }
        },
    },
}
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.Button1 {
    background-color: rgb(180, 175, 175);
    padding: 10px;
    color: white;
    border: none;
    border-radius: 5px;
}

.Button2 {
    width: 50px;
    padding: 10px;
    align-self: flex-end;
}
.UserForm__Warning{
    color: red;
    font-family: sans-serif;
}
.AddForm__Form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    transform: translateY(-725px);
}

.display {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(0, 0, 0, 0.4);
    position: fixed;
    left: 0;
    transition-property: all;
    transition-duration: 1s;
    transform: translateY(-54px);
}

.UserForm__AddedForm {
    margin-top: 10px;
    width: 100%;
    }
    
    .UserForm__Head {
        display: flex;
        justify-content: space-between;
        font-size: 25px;
    }
    
    .UserForm form {
        position: fixed;
        z-index: 1;
        width: 50%;
        background-color: rgb(154, 154, 225);
        border-radius: 20px;
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