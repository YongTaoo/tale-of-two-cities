export default {
    setChapters(state, payload) {
         state.chapters = payload;
    },
    setCurrentChapter(state, payload) {
         state.currentChapter = payload;
    },
    addChapter(state, payload) {
        state.chapters.push(payload);
    },


}