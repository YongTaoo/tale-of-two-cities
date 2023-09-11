<template>
    <base-card mode="flat">
        <text-block v-for="(index, block) of textBlocks" :key="index" :block="block" @trans="trans"></text-block>
    </base-card>
</template>

<script>
import BaseCard from '../UI/BaseCard.vue'
import textBlock from './textBlock.vue';
export default {
  components: { BaseCard, textBlock },
    props: ['text'],
    data() {
        return {
            blocks: null
        }
    },
    computed: {
        textBlocks() {
            this.blocks = this.$props.text.split(' ');
            return this.blocks
        }
    },
    methods: {
        trans(val) {
            console.log(val)
        }
    }

}
</script>

<style>
 
</style>