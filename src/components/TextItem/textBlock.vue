<template>
    <div :class="{'color' : check, 'block' : true }" @click.left="translate" >
        {{ block }}
    </div>
</template>

<script>
export default {
    props: ['block','id'],
    data() {
        return {
            check: false,
        }
    },
    methods: {
        translate() {
            console.log('key', this.$props.id)
            this.$emit('trans', this.$props.id)
            this.check = !this.check;
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

.color {
    background: rgb(188,188,0);
    color: whitesmoke;
    border-radius: 10px;
}
</style>