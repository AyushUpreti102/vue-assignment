<template>
    <div class="AddForm">
        <button @click="show">Open Form</button>
        <div v-if="seen">
            <UserForm/>
        </div>
    </div>
</template>
<script>
import UserForm from './UserForm.vue';
export default {
    name: 'AddForm',
    components: { UserForm },
    data(){
        return{
            seen: false
        }
    },
    methods: {
        show(){
            this.seen=true;
        }
    }
}
</script>
<style scoped>
    .AddForm button{
        background-color: rgb(180, 175, 175);
        padding: 10px;
        color: white;
        border: none;
        border-radius: 5px;
    }
</style>