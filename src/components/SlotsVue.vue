<template>
    <div class="SlotsVue" style="border: 1px solid lightgray; width: 300px;">
        <slot name="header"></slot>
        <slot name="title"></slot>
        <slot name="body"></slot>
        <slot name="footer"></slot>
    </div>
</template>
<script>
export default {
    name: 'SlotsVue',
}
</script>
<style scoped>

</style>