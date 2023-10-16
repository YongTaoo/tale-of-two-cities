export default {
    record(state) {
        return state.record;
    },
    hasRecord(state, getters) {
        return !!getters.record
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