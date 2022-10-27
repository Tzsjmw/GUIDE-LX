<template>
  <div class="modif">
    <modif-panel></modif-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import ModifPanel from '@/views/admin/example/modif/cpns/modif-panel.vue'

export default defineComponent({
  components: {
    ModifPanel
  },
  setup() {
    const route = useRoute()

    //传值id
    const Id = route.query.id
    console.log(Id)
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
