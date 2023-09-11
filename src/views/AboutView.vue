<template>
  <div class="about">
     <section>
        <title></title>
        <text-item
          v-for="text in filterText"
          :key="text.id"
          :text ="text.data"
          >

        </text-item>
     </section>
  </div>
</template>
<script>
  import textItem from "@/components/TextForm/textItem.vue";
  export default {
     components: { textItem },
     computed: {
        filterText() {
           const texts = this.$store.getters['text/texts'] ;
           console.log(texts)
           return texts;
        }
     },
     methods: {
        async loadTexts(refresh = false) {
          console.log(refresh)
          try {
           await this.$store.dispatch('text/loadTexts')
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

</style>
