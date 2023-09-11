<template>
    <teleport to="body">
        <div v-if="show" @click="tryClose" class="backdrop"></div>
        <transition name="dialoge">
            <dialog open v-if="show">
                <section>
                    <slot></slot>
                </section>
                <menu v-if="!fixed">
                    <slot name="actions">
                        <base-button @click="tryClose">Close</base-button>
                    </slot>
                </menu>
            </dialog>
        </transition>
    </teleport>
</template>
<script>
export default {
    props: {
        show: {
            type: Boolean,
            required: true,
        },
        fixed: {
            type: Boolean,
            required: false,
            default: false,
        }
    },
    emits: ['close'],
    methods: {
        tryClose() {
            if(this.fixed) {
                return
            }
            this.$emit('close');
        }
    }
}
</script>
<style scoped>
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: 10;
}

dialog {
    position: fixed;
    top: 20vh;
    margin: 0 auto;
    max-width: 30rem;
    width: 90%;
    z-index: 100;
    overflow: hidden;
    font-size: 3rem;

    border-radius: 1.2rem;
    
}


section {
    padding: 1.6rem;
    margin: 0;
    margin-top: 1.6rem;
}

menu {
    padding: 1.6rem;
    display: flex;
    justify-content: end;
    margin: 0;
}

.dialoge-enter-from {
    opacity: 0px;
    transform: translateY(-40px) scale(0.8);
}

.dialoge-enter-active {
    transition: all 250ms;
}

.dialoge-leave-to {
    opacity: 0;
    transform: translateY(40px) scale(0.8) ;
}

.dialoge-leave-active {
    transition: all 250ms ease-in;
}
</style>