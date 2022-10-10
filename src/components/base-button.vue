<template>
    <div class="base-button">
        <button class="base-button__primary-button button1" @click="callThat">Primary</button><br /><br />
        <button class="base-button__primary-button button1" @click="reverseMessage">{{btnName}}</button>
    </div>
</template>
<script>
export default {
    name: 'base-button',
    props: ['btnName'],
    methods: {
        callThat() {
            this.$emit('alert', 'on click of first button');
        },
        reverseMessage() {
            this.$emit('reverse');
        }
    }
}
</script>