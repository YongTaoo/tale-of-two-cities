<template>
  <div class="about">
    <div class="chapter">{{ chapter }}</div>
     <section>
        <text-item
          v-for="text in filterText"
          :key="text.id"
          :text ="text.data"
          :map="text.map"
          >

        </text-item>
     </section>
  </div>
</template>
<script>
  import textItem from "@/components/TextItem/textItem.vue";
  export default {
     components: { textItem },
     props: ['chapter'],
     computed: {
        filterText() {
           const texts = this.$store.getters['text/texts'] ;
           return texts;
        }
     },
     methods: {
        async loadTexts(refresh = false) {
         console.log(refresh)
          try {
           await this.$store.dispatch('text/loadTexts', this.chapter)
          }catch(err) {
             this.error = err.message || 'somthing went wrong'
          }
        }
     },
     created() {
      this.loadTexts()
     }
  }
</script>
<style scoped>
 .chapter {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 4rem;
    padding-bottom: 2rem;
 }
</style>
