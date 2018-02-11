<template>
  <div>
      <!-- add button BEGIN -->

      <fab style="bottom:20px;right:20px">
  <a class="btn-floating btn-large" slot="fab">hover</a>
  <li><a class="btn-floating">1</a></li>
  <li><a class="btn-floating">2</a></li>
</fab>

      <!-- add button END -->
  </div>
</template>

<script>

import {fixedActionButton} from "vue-materialize"

export default {
  name: 'BottomRightButtons',

  components: {
    "fab": fixedActionButton
  }

}
</script>
