<template>
    <v-container>
        <v-list>
            <v-list-item v-for="(task, i) in newTask" :key="i">
                <v-list-item-content>
                    <v-list-item-title>{{task.msg}}</v-list-item-title>
                </v-list-item-content>
                <v-btn text color="red darken-4" @click="deleteTask(i)">delete</v-btn>
            </v-list-item>
        </v-list>
    </v-container>
</template>
<script>
export default {
    name: 'TodoList',
    computed: {
        newTask() {
            return this.$store.getters.newTask;
        },
    },
    methods: {
        deleteTask(i) {
            this.$store.commit('deleteTask', i);
        }
    }
}
</script>