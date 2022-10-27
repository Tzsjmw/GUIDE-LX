<template>
  <div class="details">
    <page-table
      :contentTableConfig="contentTableConfig"
      pageName="details"
    ></page-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageTable from './details/src/page-content.vue'
import { contentTableConfig } from './details/config/content.config'

export default defineComponent({
  components: {
    PageTable
  },
  setup() {
    return {
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
