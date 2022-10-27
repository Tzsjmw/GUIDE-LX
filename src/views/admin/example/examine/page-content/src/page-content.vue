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
      <template #opertwo="scope">
        <el-button
          type="primary"
          text
          @click="particulars(scope.row.Id, scope.row.Judge)"
          >查看考试情况</el-button
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
      store.dispatch('product/postPageSslbc', {
        pageUrl: '/api/Home/sslbc'
      })
    }
    getPageData()

    // 从vuex中获取数据
    const dataList = computed(() => store.state.product.userList)

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
          const acc = store.dispatch('product/postPageEnddelet', {
            pageUrl: '/api/Home/enddele',
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
    }

    const router = useRouter()
    // 修改
    const Update = (id: any) => {
      router.push({
        path: '/admin/example/modif',
        query: {
          id
        }
      })
    }

    // 查看详情
    const particulars = (id: any, judge: any) => {
      if (judge === '0') {
        ElMessage({
          type: 'info',
          message: '当前学生还未答题'
        })
      } else {
        router.push({
          path: '/admin/example/details',
          query: {
            id
          }
        })
      }
    }

    return {
      dataList,
      getPageData,
      Dele,
      Update,
      particulars
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
