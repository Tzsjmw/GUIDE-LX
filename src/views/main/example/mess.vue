<template>
  <div class="mess">
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
import pageSearch from './mess/page-search/src/page-search.vue'
import { searchFormConfig } from './mess/page-search/config/search.config'
import { useStore } from '@/store'

import PageContent from './mess/page-content/src/page-content.vue'
import { contentTableConfig } from './mess/page-content/config/content.config'

export default defineComponent({
  components: {
    pageSearch,
    PageContent
  },
  setup(props) {
    const input = ref('')
    const store = useStore()
    const tableData = computed(() => store.state.system.userList)

    const propList = [
      { prop: 'Id', label: 'Id', minWidth: '100', slotName: 'Id' },
      { prop: 'Name', label: '用户名', minWidth: '100' },
      { prop: 'Age', label: '年龄', minWidth: '100' },
      { prop: 'Account', label: '账号', minWidth: '100' },
      { prop: 'Password', label: '密码', minWidth: '100' },
      { prop: 'operate', label: '操作', minWidth: '100', slotName: 'operate' }
    ]
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
      store.dispatch('system/postPageListAction', {
        pageUrl: '/api/Home/inst',
        ...queryInfo
      })
    }

    return {
      input,
      tableData,
      propList,
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
