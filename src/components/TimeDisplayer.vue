<template>
    <div class="TimeDisplayer">
        <div class="TimeDisplayer__Timer">{{time}}</div>
        <TimeControler @startTimer="started" @stopTimer="stoped" />
    </div>
</template>
<script>
import TimeControler from './TimeControler.vue';
export default {
    name: "TimeDisplayer",
    components: { TimeControler },
    props: ['time'],
    data() {
        return {
            counter: null,
            count: 0,
        }
    },
    methods: {
        started(value) {
            if (value) {
                this.counter = setInterval(() => {
                    this.$emit('number', this.count);
                }, 1000);
            }
        },
        stoped(value) {
            if (value) {
                clearInterval(this.counter);
            }
        }
    }
}
</script>
<style>
.TimeDisplayer {
    display: flex;
    flex-direction: column;
}

.TimeDisplayer__Timer {
    height: 50px;
    font-size: 50px;
    color: red;
    margin: auto;
}
</style>