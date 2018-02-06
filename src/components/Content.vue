<template>
  <div class="papis-content">
    <LeftMenu/>
    <PapersList/>
    <PaperDetail/>
  </div>
</template>

<script>

import LeftMenu from './LeftMenu'
import PapersList from './PapersList'
import PaperDetail from './PaperDetail'


export default {
  name: 'Content',
  components: {
    LeftMenu,
    PapersList,
    PaperDetail
  }
}
</script>
