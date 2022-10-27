<template>
  <div class="page-content">
    <hy-table :listData="dataList" v-bind="contentTableConfig">
      <!-- 2.列中的插槽 -->
      <template #Id="scope"> M000{{ scope.row.Id }} </template>
      <template #operate="scope">
        <el-button type="primary" text @click="Update(scope.row.Id)"
          >修改</el-button
        >
        <el-button type="danger" text @click="Dele(scope.row.Id)"
          >删除</el-button
        >
      </template>
    </hy-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import HyTable from '@/base-ui/table'
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
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

    // 2.发送网络请求
    // 表格数据
    const getPageData = () => {
      store.dispatch('system/getPageListAction', {
        pageUrl: '/api/Home/GetDalt'
      })
    }
    getPageData()

    // 3.从vuex中获取数据
    const dataList = computed(() => store.state.system.userList)

    // 删除
    const Dele = (Id: any) => {
      ElMessageBox.confirm('是否删除?', '删除', {
        confirmButtonText: '删除',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          ElMessage({
            type: 'success',
            message: '删除成功'
          })
          const acc = store.dispatch('system/postPageDel', {
            pageUrl: '/api/Home/del',
            Id
          })
          acc.then(() => {
            getPageData()
          })
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '删除失败'
          })
        })
      getPageData()
    }

    const router = useRouter()
    // 修改
    const Update = (id: any) => {
      router.push({
        path: '/main/example/modif',
        query: {
          id
        }
      })
    }

    return {
      dataList,
      getPageData,
      Dele,
      Update
    }
  }
})
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
