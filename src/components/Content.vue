<template>
  <div class="papis-content">
    <LeftMenu/>
    <PapersList/>
    <PaperDetail/>
    <BottomRightButtons/>
  </div>
</template>

<script>

import LeftMenu from './LeftMenu'
import PapersList from './PapersList'
import PaperDetail from './PaperDetail'
import BottomRightButtons from './BottomRightButtons'


export default {
  name: 'Content',
  components: {
    LeftMenu,
    PapersList,
    PaperDetail,
    BottomRightButtons
  }
}
</script>
