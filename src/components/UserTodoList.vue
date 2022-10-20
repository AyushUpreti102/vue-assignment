<template>
    <v-container>
        <v-snackbar v-model="snackbar" top timeout="2000">
            <span>{{msg}}</span>
        </v-snackbar>
        <v-card height="200">
            <v-card-subtitle>
                <v-form ref="form" lazy-validation>
                    <v-text-field v-model="task.task" label="Add Task" required></v-text-field>
                    <v-btn color="success" class="mr-4" @click="saveTask" v-if="show">
                        Add
                    </v-btn>
                    <v-btn v-if="!show" @click="saveChages">Save</v-btn>
                </v-form>
            </v-card-subtitle>
        </v-card>
        <v-list>
            <v-list-item-group>
                <v-list-item v-for="(item, i) in tasks" :key="i">
                    <v-checkbox v-model="item.workDone" @click="workOver()"></v-checkbox>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.task" :class="{cancel: item.workDone}"></v-list-item-title>
                    </v-list-item-content>
                    <v-btn text color="blue lighten-1" @click="editTask(i)" :disabled="not">
                        <v-icon>mdi-pencil-outline</v-icon>
                    </v-btn>
                    <v-btn text color="red lighten-1" right @click="deleteTask(i)">
                        <v-icon>mdi-trash-can-outline</v-icon>
                    </v-btn>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-container>
</template>
<script>
export default {
    name: "UserTodoList",
    data() {
        return {
            task: { task: '', seen: false, workDone: false },
            tasks: [],
            show: true,
            not: false,
            msg: '',
            snackbar: false,
            indx: 0
        };
    },
    methods: {
        saveTask() {
            if (this.task.task === '') {
                this.snackbar = true;
                this.msg = 'add some task first'
            }
            else {
                this.tasks.push(JSON.parse(JSON.stringify(this.task)));
                this.task.task = '';
                this.snackbar = true;
                this.msg = 'task added'
            }
        },
        editTask(i) {
            this.task.task = this.tasks[i].task;
            this.tasks[i].seen = true
            this.show = false;
            this.not = true;
            this.indx = i;
        },
        deleteTask(i) {
            this.tasks.splice(i, 1);
            if (this.tasks.length === 0) {
                this.show = true;
            }
            this.not = false
            this.task.task = ''
            this.snackbar = true;
            this.msg = 'task deleted';
        },
        saveChages() {
            this.tasks[this.indx].task = this.task.task;
            this.task.task = ''
            this.tasks[this.indx].seen = false
            this.show = true
            this.not = false
            this.snackbar = true;
            this.msg = 'task edited'
        },
        workOver() {
            // this.tasks[i].workDone = !this.tasks[i].workDone;
            this.snackbar = true;
            this.msg = 'task completed'
        }
    },
}
</script>
<style>
.cancel {
    text-decoration: line-through;
}
</style>