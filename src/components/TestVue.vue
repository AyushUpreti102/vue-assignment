<template>
    <div class="TestVue">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, aliquam.</p>
    </div>
</template>
<script>
export default {
    name: 'TestVue',
    destroyed() {
        console.warn("TestVue destroyed")
    },
    created() {
        console.warn("TestVue Created")
    },
    mounted() {
        console.warn("TestVue Mounted")
    }
}
</script>
  