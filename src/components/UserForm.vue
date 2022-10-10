<template>
    <div class="UserForm">
        <form class="UserForm__Form">
            Name<input type="text" v-model="passDetails.name"> email<input type="text" v-model="passDetails.email">
            phno.<input type="text" v-model="passDetails.phno">
        </form>
        <div class="UserForm__Buttons">
            <SubmitForm :enteredDetails="passDetails" @savingDetails="saveDetails" />
        </div>
    </div>
</template>
<script>
import SubmitForm from './SubmitForm.vue';
export default {
    name: 'UserForm',
    props: ['toBeSubmited', 'passDetails'],
    components: {
        SubmitForm
    },
    methods: {
        saveDetails(value) {
            this.$emit('submitingForm', this.toBeSubmited.push(JSON.parse(JSON.stringify(value))));
        },
    }
}
</script>
<style scoped>

</style>
