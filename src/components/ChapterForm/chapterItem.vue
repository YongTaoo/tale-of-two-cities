<template>
    <div>
      <base-card mode="shadow">
          <div class="chapter">
              {{ chapter }}
          </div>
          <div>
             <base-button mode="outline" link :to="reading">阅读</base-button>
          </div>
      </base-card>
    </div>
 </template>
 
 <script>
 import BaseButton from '@/components/UI/BaseButton.vue';
 import BaseCard from '@/components/UI/BaseCard.vue';
 export default {
     props: ['chapter'],
     components: {BaseButton, BaseCard},
     computed: {
        reading() {
            return {
                name : 'text',
                params: {chapter: this.chapter}
            }
        }
     }
 }
 </script>
 
 <style scoped>
  .chapter {
    padding: 2rem;
    font-family: Georgia, 'Times New Roman', Times, serif;
  }
 </style>