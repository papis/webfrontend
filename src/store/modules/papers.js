import papers_api from '../../api/papers_api'
import {_} from 'vue-underscore';


const state = {
  entries: [],
  selected_entry: null
}

// getters
const getters = {
  activePaper: state => state.selected_entry,
  allPapers: state => state.entries
}


const actions = {
  getAllPapers ({ commit }) {
    papers_api.getPapers(sheets => {
      commit('setPapers', sheets)
    })
  },

  setActivePaper ({ state, commit }, sheet) {
    const selected_item = state.entries.find(item => item.id === sheet.id)
    commit('setActivePaper', selected_item)
  }

}


// mutations
const mutations = {
  setPapers (state, sheets) {
    state.entries = sheets
  },

  setActivePaper(state, sheet){
    state.selected_entry = sheet
  }
}



export default {
  state,
  getters,
  actions,
  mutations
}