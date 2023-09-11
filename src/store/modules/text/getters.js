export default {
    texts(state) {
        return state.texts;
    },
    hasText(state, getters) {
        return getters.text && getters.text.length > 0
    },
    shouldUpdate(state) {
        const lastFetch = state.lastFetch ;
        if(!lastFetch) {
            return true;
        }else {
            const currentTimestamp = Date.now();
            return (currentTimestamp - lastFetch) / 1000 > 60;
        }
    }
}