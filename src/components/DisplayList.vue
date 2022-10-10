<template>
    <div class="display-list">
        <button @click="displayingDetails">DisplayList</button> <br /><br />
        <table class="display-list__table" v-if="display">
            <tr v-for="(value, index) in submitedDetails" :key="index">
                <td>{{value.name}}</td>
                <td>{{value.email}}</td>
                <td>{{value.phno}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    name: 'DisplayList',
    props: ['submitedDetails', 'display'],
    methods: {
        displayingDetails() {
            this.$emit('displayContent', this.display);
        }
    }
}
</script>
<style scoped>

</style>