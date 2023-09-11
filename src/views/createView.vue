<template>
    <div class="about">
      <h1>Just the way things go</h1>
        <text-form @save-data="saveData"></text-form>
    </div>
  </template>
<script>
    import textForm from '@/components/TextForm/textForm.vue';
    export default {
        components: { textForm },
        methods: {
            saveData(data) {
               console.log(data);
               this.$store.dispatch('text/submitText', data);
               this.$router.replace('/about');
            }
        }
    }
</script>
  <style scoped>
  
  </style>
  