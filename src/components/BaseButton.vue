<template>
    <div class="BaseButton">
        <button class="base-button__primary-button" @click="callThat">{{btnName}}</button>
    </div>
</template>
<script>
export default {
    name: 'BaseButton',
    props: ['Alert', 'reverseName'],
    data() {
        return {
            btnName: 'Primary',
        }
    },
    methods: {
        callThat() {
            if (this.Alert) {
                alert('on click of first button');
            }
            if (this.reverseName) {
                this.btnName = this.btnName.split('').reverse().join('');
            }
        }
    }
}
</script>