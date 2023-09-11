export default {
    registerText(state, payload) {
        state.texts.push(payload)
    },
    setTexts(state, payload) {
        state.texts = payload;
    },
    setFetchTimestamp(state) {
        state.lastFetch = Date.now();
    }
}