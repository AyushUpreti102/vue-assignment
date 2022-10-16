<template>
    <div class="DisplayDetails">
        <table>
            <tr>
                <td>Email:- {{userInfo.email}}</td>
                <td>Name:- {{userInfo.name}}</td>
                <td>Date of birth:- {{userInfo.dob}}</td>
            </tr>
        </table>
        <button class="DisplayDetails__Button" @click="editDetails">Edit</button>
    </div>
</template>
<script>
export default {
    name: 'DisplayDetails',
    props: ['userInfo'],
    methods: {
        editDetails(){
            this.$emit('editDetails', true)
        }
    }
}
</script>
<style scoped>
    .DisplayDetails{
        background-color: rgb(248, 248, 119);
        padding: 20px 30px;
    }
    .DisplayDetails table{
        width: 100%;
        margin-bottom: 10px;
    }
    .DisplayDetails table tr td{
        border: 1px solid black;
        height: 30px;
        width: 33.33%;
    }
    .DisplayDetails__Button{
        width: 20%;
        padding: 10px;
    }
    @media only screen and (max-width: 450px){
        .DisplayDetails table tr{
            display: flex;
            flex-direction: column;
        }
        .DisplayDetails table tr td{
            width: 100%;
        }
    }
</style>