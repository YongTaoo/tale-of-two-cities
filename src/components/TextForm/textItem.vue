<template>
    <base-card mode="flat">
        <text-block v-for="(block, index) of blocks" :key="index" :id="index" :block="block" @trans="trans"></text-block>
    </base-card>
</template>

<script>
import axios from 'axios';
import { MD5 } from 'crypto-js';
import BaseCard from '../UI/BaseCard.vue'
import textBlock from './textBlock.vue';
export default {
  components: { BaseCard, textBlock },
    props: ['text'],
    data() {
        return {
            blocks: null,
            currentValue : ''
        }
    },
    methods: {
        trans(val) {
            let appid = '20230911001813027'
            let salt = Math.round(Math.random()*10000000000);
          this.currentValue = this.blocks[val];
          const hash = MD5(appid + this.currentValue + salt)
          console.log(hash.toString())
          let result = axios.get(`http://api.fanyi.baidu.com/api/trans/vip/translate?q=${this.currentValue}&from=en&to=zh&appid=20230911001813027&salt=${salt}&sign=${hash.toString()}`)
          console.log(result)
        }
    },
    created() {
        this.blocks = this.$props.text.split(' ');
    }

}
</script>

<style>
 
</style>