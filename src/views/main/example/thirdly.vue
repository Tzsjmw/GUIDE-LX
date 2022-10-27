<template>
  <div class="thirdly">
    <thirdly-panel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ThirdlyPanel from '@/views/main/example/thirdly/cpns/thirdly-panel.vue'

export default defineComponent({
  components: { ThirdlyPanel },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.thirdly {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 100px;
}
</style>
