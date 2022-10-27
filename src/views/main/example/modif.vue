<template>
  <div class="modif">
    <modif-panel></modif-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ModifPanel from '@/views/main/example/modif/cpns/modif-panel.vue'

export default defineComponent({
  components: {
    ModifPanel
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.modif {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 100px;
}
</style>
