<template>
  <div class="page-content">
    <hy-table :listData="dataList" v-bind="contentTableConfig">
      <div>{{ dataList.values }}</div>
      <template #Result="scope">
        {{
          scope.row.Result === '0'
            ? '错误'
            : scope.row.Result === '1'
            ? '正确'
            : '未答题'
        }}
      </template>
    </hy-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import HyTable from '@/base-ui/table'
import { useRoute } from 'vue-router'

export default defineComponent({
  components: {
    HyTable
  },
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup() {
    const store = useStore()
    const route = useRoute()
    //传值id
    const Id = route.query.id
    const dataList = computed(() => store.state.product.QuanBu)
    // 表格数据
    const getPageData = (Id: any) => {
      store.dispatch('product/postPageCquanBu', {
        pageUrl: '/api/Home/scqb',
        Id
      })
    }
    getPageData(Id)

    return {
      dataList,
      getPageData
    }
  }
})
</script>

<style scoped>
.page-content {
  padding: 50px;
}
</style>
