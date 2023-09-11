import axios from 'axios' ;

export default {
    async submitText(context, data) {
        const textData = {
            chapter: data.chapter,
            description: data.desc
        }

        const databaseUrl = context.rootGetters.databaseUrl;

        try {
            let result = 0;
            let date = new Date()
            let check = await axios.get(
                `${databaseUrl}/chapter.json`,   
            )
            let chapter = check?.data?.data;
            if( chapter == null) {
                chapter = []
            }else{
                for(let item of chapter) {
                    if(item == textData.chapter) {
                        result = 1;
                        break;
                    }
                }
            }
            if(result!=1){
                chapter.push(textData.chapter)
                await axios.put(
                    `${databaseUrl}/chapter.json`,
                   {data : chapter }
                )
            }
            await axios.put(
                `${databaseUrl}/text/${textData.chapter}/${date.getTime()}/.json`,
                {data: textData.description}
            )
            context.commit('registerText', {
                ...textData,
            })
        } catch (error) {
            console.log('error', error);
        }
    },
    async loadTexts(context) {
       

        const databaseUrl = context.rootGetters.databaseUrl;
        try {
            const {data: textsData} = await axios.get(
                `${databaseUrl}/text/1-period.json`
            )
            console.log(textsData)
            const texts = [];
            for(const key in textsData) {
                const text = {
                    id: key,
                    data: textsData[key].data
                }
                texts.push(text)
            }
             console.log('this is', texts)
            context.commit('setTexts', texts);
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