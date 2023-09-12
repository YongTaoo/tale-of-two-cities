import { createStore } from 'vuex'
import  textModule  from './modules/text'
import chapter from './modules/chapter'

export default createStore({
  modules: {
    text: textModule,
    chapter: chapter
  },
  state() {
    return {
       databaseUrl: 'https://vue-demo-62086-default-rtdb.asia-southeast1.firebasedatabase.app'
    }
  },
  getters: {
    databaseUrl(state) {
       return state.databaseUrl;
    }
  },
  mutations: {
  },
  actions: {
  },
 
})
