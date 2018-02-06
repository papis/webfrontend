<template>
  <!-- list of papers -->
  <div class="papis-list">
      <div class="card-panel">
          <div class="child scrollable">
              <ul class="collection paper-elements">
                 <li class="collection-item" v-for="paper in papers">
                     <span class="papis-title">{{ paper.title }}</span>
                     <p class="papis-author">{{ paper.author }}</p>
                 </li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'PapersList',
  data() {
      return {
          papers: [],
      }
  },
  created: function () {
      this.fetchData();
  },
  methods: {
      fetchData: function () {
          this.papers = [
            {"title": "Principia Mathematica2", "author": "Newton", "id": 0},
            {"title": "Principia Mathematica4", "author": "Newton", "id": 1}
          ]
      }
  },
}
</script>
