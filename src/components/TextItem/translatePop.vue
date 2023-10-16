<template>
   <div class="word">
        {{word}}
   </div>
</template>

<script>
import axios from 'axios';
export default {
  props: ['word'],
  data() {
    return {
        tran: null
    }

  },
  created() {
     let word = this.$props.word;
     let salt = Math.round(Math.random()*10000000000);
     let result = axios.get(`http://api.fanyi.baidu.com/api/trans/vip/translate?q=${word}&from=en&to=zh&appid=20230911001813027&salt=${salt}&sign=3qmuvxwt1N14W2Y8pESo`)
     console.log(result)
    } 
}

</script>

<style scoped>
   .word {
      height: 10rem;
      width: 100rem !important;
      font-size: 3rem;
}
</style>