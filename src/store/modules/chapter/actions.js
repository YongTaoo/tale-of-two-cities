import axios from 'axios';

export default {
    async loadChapters(context) {
        const databaseUrl = context.rootGetters.databaseUrl;
        try {
            const { data: responseData } = await axios.get(
                `${databaseUrl}/chapter.json`
            )
            const chapters = [];
            for(let chapter of responseData.data) {
                chapters.push(chapter);
            }
            
            context.commit('setChapters', chapters)

        } catch (err) {
             const error = new Error(
                 'Failed to fetch'
             );
             throw error;
        }
    },

    async addChapter(context, payload) {
        const databaseUrl = context.rootGetters.databaseUrl;
         context.commit('addChapter', payload);

         try {

            let chapters = context.getters.chapters
            await axios.put(
                `${databaseUrl}/chapter.json`,
                chapters
            )
         } catch (err) {
            console.log(err);
            throw err
         }
    },

    async setCurrentChapter(context, payload) {
         context.commit('setCurrentChapter', payload);
    }

}