<template>
  <div class="examine">
    <!-- 查询 -->
    <div class="SecondOne">
      <fieldset class="leg">
        <legend align="left">查询</legend>
        <page-search
          :searchFormConfig="searchFormConfig"
          @resetBtnClick="handleResetClick"
          @queryBtnClick="handleQueryClick"
        ></page-search>
      </fieldset>
    </div>

    <!-- 学生信息 -->
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="mess"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import pageSearch from './examine/page-search/src/page-search.vue'
import { searchFormConfig } from './examine/page-search/config/search.config'
import { useStore } from '@/store'

import PageContent from './examine/page-content/src/page-content.vue'
import { contentTableConfig } from './examine/page-content/config/content.config'

export default defineComponent({
  components: {
    pageSearch,
    PageContent
  },
  setup(props) {
    const input = ref('')
    const store = useStore()
    const tableData = computed(() => store.state.system.userList)

    // 表格数据
    const getPageData = () => {
      store.dispatch('system/getPageListAction', {
        pageUrl: '/api/Home/GetDalt'
      })
    }
    getPageData()
    // 重置
    const handleResetClick = () => {
      getPageData()
    }

    // 查询
    const handleQueryClick = (queryInfo: any) => {
      store.dispatch('product/postPageSendMhxc', {
        pageUrl: '/api/Home/ssmhcx',
        ...queryInfo
      })
    }

    return {
      input,
      tableData,
      searchFormConfig,
      getPageData,
      handleResetClick,
      handleQueryClick,
      contentTableConfig
    }
  }
})
</script>

<style scoped>
.text-div {
  margin-left: 30px;
  float: left;
  line-height: 150px;
}
.text-pt {
  margin-left: 200px;
  width: 600px;
}
.btn-div {
  float: right;
  margin-right: 300px;
  line-height: 150px;
}
.leg-daan {
  margin-top: 50px;
}
</style>
