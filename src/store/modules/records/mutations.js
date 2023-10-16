export default {

    setRecord(state, payload) {
        state.record = payload;
    },
    setFetchTimestamp(state) {
        state.lastFetch = Date.now();
    }
}