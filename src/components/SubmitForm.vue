<template>
    <div class="submit-form">
        <button @click="saveUserDetails">Submit</button>
    </div>
</template>
<script>
export default {
    name: 'SubmitForm',
    props: ['enteredDetails', 'storedDetails'],
    methods: {
        saveUserDetails() {
            if (this.enteredDetails.name === '' || this.enteredDetails.email === '' || this.enteredDetails.phno === '') {
                alert('please fill the form');
            }
            else {
                this.$emit('savingDetails', this.enteredDetails);
            }
        }
    }
}
</script>
<style scoped>

</style>