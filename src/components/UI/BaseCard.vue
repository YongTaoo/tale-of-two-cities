<template>
    <div :class="['card', mode, color]">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ['mode', 'color'],
}
</script>

<style scoped>
.card {
    padding: 2rem;
    padding-bottom: 2rem;
    background: var(--white-1);
    font-size: 3rem;

    border:0.3rem solid var(--gray-2);
    border-radius: 1.2rem;

    max-width: 60rem;
    width: 100%;
    margin: 3rem auto;
}

.full {
    max-width: 100%;
}

.shadow {
    box-shadow: 0.8rem 0.8rem var(--gray-2);
}

.flat {
    border: none;
    background: transparent;
    padding: 2rem 2rem;
    max-width: 100%;
    box-shadow: none;
}

.shadow.color {
    box-shadow: 0.8rem 0.8rem;
}

.color {
    border-color: var(--purple-2)
}
</style>