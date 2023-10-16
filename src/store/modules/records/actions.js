import axios from 'axios' ;

export default {
    async submitRecord(context, data) {
        const recordData = {
            chapter: data.chapter,
            record: data.record
        }

        const databaseUrl = context.rootGetters.databaseUrl;

        try {
            await axios.put(
                `${databaseUrl}/text/new/${recordData.chapter}/.json`,
                {data: recordData.record}
            )
            context.commit('registerText', {
                ...recordData,
            })
        } catch (error) {
            console.log('error', error);
        }
    },
    async loadTexts(context, payload) {
       

        const databaseUrl = context.rootGetters.databaseUrl;
        try {
            const {data: record} = await axios.get(
                `${databaseUrl}/text/new/${payload}.json`
            )
            console.log(record);
             console.log('this is', record);
            context.commit('setFetchTimestamp');
        } catch (err) {
            console.log( err.response );
            const error = new Error(
                err.response.data.error || 'Failed to fetch'
            );
            throw error;
        }
    }

    
}