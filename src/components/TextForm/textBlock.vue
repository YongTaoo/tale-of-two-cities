<template>
    <div class="block" @click.left="translate" >
        {{ block }}
    </div>
</template>

<script>
export default {
    props: ['block','id'],
    methods: {
        translate() {
            console.log('key', this.$props.id)
            this.$emit('trans', this.$props.id)
        }
    }
}
</script>

<style>
.block {
    padding: 0.2rem 1rem;
    display: inline-block;
    font-family: var(--font-display)
}
.block:hover,.block:active {
    box-shadow: 0px 2px 8px rgba(0,0,0,0.2);
    border-radius: 10px;
}
</style>