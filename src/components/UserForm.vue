<template>
    <div class="UserForm">
        <button class="AddForm__Button Button1" @click="showForm">Open Form</button>
    <div class="UserForm__AddedForm" :class="show?'display':'AddForm__Form'" @click.prevent="show=!show">
        <form @submit.prevent="submitDetails(indx)" @click.stop>
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
    <div class="UserForm__Details" v-for="(val, index) in users" :key="index">
        <DisplayDetails :userInfo="users[index]" @editDetails="editDetails(index)" />
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
            seen: false,
            warning: '',
            show: false,
            msg: 'Add User',
            users: [],
            indx: 0
        };
    },
    methods: {
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
        submitDetails(i) {
            this.users.push({ email: '', name: '', dob: '', password: '', checkbox: false });
            if (this.userDetails.password === this.userDetails.confirmPassword) {
                this.seen = true;
                this.users[i].email = this.userDetails.email;
                this.users[i].name = this.userDetails.name;
                this.users[i].dob = this.userDetails.dob;
                this.users[i].password = this.userDetails.password;
                this.users[i].checkbox = this.userDetails.checkbox;
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
            this.indx++;
            console.log(this.users);
        },
        hideForm() {
            this.show = false;
        },
        editDetails(index) {
            this.userDetails.email = this.users[index].email;
            this.userDetails.name = this.users[index].name;
            this.userDetails.dob = this.users[index].dob;
            this.userDetails.password = this.users[index].password;
            this.userDetails.checkbox = this.users[index].checkbox;
            this.show = true;
            this.msg = this.users[index].name;
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
    width: 100px;
        background-color: rgb(180, 175, 175);
        padding: 10px;
        color: white;
        border: none;
        border-radius: 5px;
        align-self: flex-start;
    }
    
    .Button2 {
        width: 50px;
        padding: 10px;
        align-self: flex-end;
    }
    
    .UserForm {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .UserForm__Warning {
        color: red;
        font-family: sans-serif;
    }
    
    .AddForm__Form {
        z-index: 1;
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
        transform: translateY(-19px);
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
    
    .UserForm form div {
        display: flex;
        align-items: center;
    }
    
    .UserForm form input {
        height: 30px;
        outline: none;
        font-size: 18px;
        color: blue;
    }
    
        .Button {
            width: 20%;
            padding: 10px;
        }
</style>