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
            <button style="width: 20%" @click.prevent="displayDetails">Submit</button>
        </form>
        <div class="UserForm__Details" v-if="seen">
            <table>
                <tr>
                    <td style="width: 250px">{{savedDetails.email}}</td>
                    <td style="width: 250px">{{savedDetails.name}}</td>
                    <td style="width: 250px">{{savedDetails.dob}}</td>
                </tr>
            </table>
            <button @click="editDetails">Edit</button>
            <button v-if="show" @click="changeDetails">Save</button>
            <input type="email" v-if="show" v-model="userDetails.email" />
            <input type="text" v-if="show" v-model="userDetails.name" />
            <input type="date" v-if="show" v-model="userDetails.dob" />
        </div>
    </div>
</template>
<script>
export default {
    name: 'UserForm',
    data() {
        return {
            userDetails: {
                email: '',
                name: '',
                dob: null,
                password: '',
                confirmPassword: '',
                checkbox: false
            },
            savedDetails: {
                email: '',
                name: '',
                dob: null,
            },
            seen: false,
            show: false,
        }
    },
    methods: {
        displayDetails() {
            if (this.userDetails.password === this.userDetails.confirmPassword) {
                this.seen = true;
                this.savedDetails.email = this.userDetails.email;
                this.savedDetails.name = this.userDetails.name
                this.savedDetails.dob = this.userDetails.dob;
                this.userDetails.email = '';
                this.userDetails.name = '';
                this.userDetails.dob = null;
                this.userDetails.password = ''
                this.userDetails.confirmPassword = ''
                this.userDetails.checkbox = false;
            }
            else {
                alert('wrong password');
            }
        },
        editDetails() {
            this.state = false;
            this.show = true;
        },
        changeDetails() {
            this.savedDetails.email = this.userDetails.email;
            this.savedDetails.name = this.userDetails.name;
            this.savedDetails.dob = this.userDetails.dob;
            this.show = false;
            this.userDetails.email = '';
            this.userDetails.name = '';
            this.userDetails.dob = null;
        }
    }
}
</script>
<style scoped>
.UserForm form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
}
</style>