<template>
    <base-card mode="flat">
        <base-dialoge :show="!!meaning" @close="handleTrans">
          {{ meaning }}
       </base-dialoge>
        <text-block v-for="(block, index) of blocks" :key="index" :id="index" :block="block" @trans="trans"></text-block>
    </base-card>
</template>

<script>
import { jsonp } from 'vue-jsonp';
import { MD5 } from 'crypto-js';
import BaseCard from '../UI/BaseCard.vue'
import textBlock from './textBlock.vue';
import BaseDialoge from '../UI/BaseDialoge.vue';
export default {
  components: { BaseCard, textBlock, BaseDialoge },
    props: ['text'],
    data() {
        return {
            blocks: null,
            currentValue : '',
            meaning: '',
            open: false,
        }
    },
    methods: {
        async trans(val) {
            let appid = '20230911001813027'
            let salt = Math.round(Math.random()*10000000000);
            let key = "3qmuvxwt1N14W2Y8pESo";
          this.currentValue = this.blocks[val];
          const hash = MD5(appid + this.currentValue + salt.toString() + key)
          let result = await jsonp(`http://api.fanyi.baidu.com/api/trans/vip/translate?q=${this.currentValue}&from=en&to=zh&appid=20230911001813027&salt=${salt}&sign=${hash.toString()}`)
          this.meaning = result.trans_result[0].dst;
        },
        handleTrans() {
            this.meaning = null;
        }
    },
    created() {
        this.blocks = this.$props.text.split(' ');
    }

}
</script>

<style>
 
</style>