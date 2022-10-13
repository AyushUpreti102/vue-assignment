<template>
    <div class="TimeControler">
        <button @click="startTimer">start</button>
        <button @click="stopTimer">stop</button>
    </div>
</template>
<script>
export default {
    name: 'TimeControler',
    methods: {
        startTimer() {
            this.$emit('startTimer', true);
        },
        stopTimer() {
            this.$emit('stopTimer', true);
        }
    }
}
</script>
<style scoped>
.TimeControler button {
    padding: 10px;
    min-width: 100px;
    background-color: greenyellow;
    border: none;
    border-radius: 5px;
    margin: 0 10px;
}
</style>