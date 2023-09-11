<template>
    <div class="block" @click.right="translate" >
        {{ block }}
    </div>
</template>

<script>
export default {
    props: ['block'],
    methods: {
        translate() {
            this.$emit('trans', this.$props.key)
        }
    }
}
</script>

<style>
.block {
    padding: 0.2rem 1rem;
    display: inline-block;
}
.block:hover {
    box-shadow: 0px 2px 8px rgba(0,0,0,0.2);
    border-radius: 10px;
}
</style>