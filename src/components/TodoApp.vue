<template>
    <v-container>
        <v-text-field type="text" label="Task" v-model="msg"></v-text-field>
        <v-btn @click.prevent="addTask">Add</v-btn>
    </v-container>
</template>
<script>
export default {
    name: "TodoApp",
    data() {
        return {
            msg: ''
        }
    },
    computed: {
        newTask() {
            return this.$store.getters.newTask;
        },
    },
    methods: {
        addTask() {
            this.$store.commit('addTask', this.msg)
            this.msg = ''
        },
    }
}
</script>