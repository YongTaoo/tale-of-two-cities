<template>
   <div>
       <chapterItem v-for="chapter in hasChapters" :key="chapter" :chapter="chapter"></chapterItem>
   </div>
</template>

<script>
import chapterItem from '@/components/ChapterForm/chapterItem.vue'
export default {
    components: {chapterItem},
    data() {
        return {
            chapters: []
        }
    },
    computed: {
         hasChapters() {
             const chaps = this.$store.getters['chapter/chapters']
             return chaps
         }
    },
    methods: {
        async loadChapters() {
            try {
                await this.$store.dispatch('chapter/loadChapters')
            } catch (err) {
                console.log(err)
            }
        }
    },
    created() {
        this.loadChapters();
    }

}
</script>

<style scoped>

</style>