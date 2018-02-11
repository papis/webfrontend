<template>
 <div class="papis-details" v-if="active_paper">
     <article>
         <p class="url"><a target="_blank" :href="active_paper.url">{{active_paper.url}}</a></p>
         <h1>{{active_paper.title}}</h1>
         <p class="authors">{{active_paper.authors}}</p>
         <p class="year">(details.year)</p>
         <p class="journal">details.publisher</p>
         <p class="abstract latex-style">{{active_paper.abstract}}</p>

     </article>
 </div>
</template>


<script>
window.$ = window.jQuery = require('jquery');
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PaperDetail',

  created () {

  },

  methods : {
    randomNumber : function(){
      return Math.random();
    },
  },

  computed: {
    ...mapGetters({
      active_paper: 'activePaper',
      show_list: 'showList',
    }),
  },
}




</script>
