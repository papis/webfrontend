<template>
  <!-- list of papers -->
  <div class="papis-list">
      <div class="card-panel">
          <div class="child scrollable">
              <ul class="collection paper-elements">
                 <li
                 v-bind:class="{'collection-item':true, 'collection-item-active':(paper === active_paper)}"
                v-for="paper in papers" @click="selectPaper(paper)">
                     <span class="papis-title">{{ paper.title }}</span>
                     <p class="papis-authors">{{ paper.authors }}</p>
                 </li>
              </ul>
          </div>
      </div>
  </div>
</template>


<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PapersList',
  computed: mapGetters({
    papers: 'allPapers',
    active_paper: 'activePaper',
    show_list: 'showList',
  }),

  created () {
    this.$store.dispatch('getAllPapers')
  },

  methods: {
    selectPaper(s) {
      this.$store.dispatch('setActivePaper', s);
    },

  }

}
</script>
