import Vue from 'vue'
import Vuex from 'vuex'
import papers from './modules/papers'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    papers
  },

})