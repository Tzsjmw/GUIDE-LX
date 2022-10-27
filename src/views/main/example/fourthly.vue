<template>
  <div class="fourthly">
    <el-button type="primary" plain @click="AddBtn()">出题</el-button>
    <el-button type="success" plain @click="submit()" :disabled="ShowBtn"
      >提交</el-button
    >

    <four-thly :tableData="tableData" :propList="propList">
      <!-- 答案 -->
      <template #result="scope">
        <input
          type="number"
          v-model="scope.row.result"
          style="width: 80%"
          :disabled="scope.row.submitted"
        />
      </template>
    </four-thly>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import FourThly from './fourthly/page-table.vue'
//Elemennt-Plus message
import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'
import { useStore } from '@/store'
import LocalCache from '@/utils/cache'

export default defineComponent({
  components: {
    FourThly
  },
  setup() {
    const store = useStore()
    const ShowBtn = ref(false)
    // 添加
    const AddBtn = () => {
      if (calculateount.Judge == '1') {
        ElMessage({
          message: '已经参加过考试不能再次参加',
          type: 'error',
          grouping: true
        })
      } else {
        // 文本框输入值
        var topic = 10
        // 表格内有多少条数据
        var amount = tableData.length
        if (amount === 0) {
          for (var i = 0; (i < topic) as any; i++) {
            var calculate = {
              id: i + 1,
              num1: Math.floor(Math.random() * 10) + 1,
              num2: Math.floor(Math.random() * 10) + 1,
              calculate: ['+', '-', '*', '/'][Math.floor(Math.random() * 4)],
              status: '3',
              result: '',
              submitted: false
            }
            tableData.push(calculate)
          }
        } else {
          ElMessage({
            message: '当表格内有数据时不能再次添加',
            type: 'error',
            grouping: true
          })
        }
      }
    }

    // 表格总数据
    let tableData = reactive([
      {
        id: 0,
        num1: Math.floor(Math.random() * 10) + 1,
        num2: Math.floor(Math.random() * 10) + 1,
        calculate: ['+', '-', '*', '/'][Math.floor(Math.random() * 4)],
        status: '3',
        result: '',
        submitted: false
      }
    ])
    //让表格数据默认为空
    tableData.length = 0

    // 每一列的数据
    const propList = [
      { prop: 'id', label: '序号' },
      { prop: 'num1', label: '题目' },
      { prop: 'calculate', label: '题目' },
      { prop: 'num2', label: '题目' },
      { prop: 'result', label: '答案', slotName: 'result' }
    ]

    // 判断输入的数字是否正确
    const sum = (id: any) => {
      if (tableData[id].result == '') {
        return
      }
      switch (tableData[id].calculate) {
        case '+':
          if (
            tableData[id].result ==
            (tableData[id].num1 + tableData[id].num2).toString()
          ) {
            tableData[id].status = '1'
            tableData[id].submitted = true
          } else {
            tableData[id].status = '0'
          }
          break
        case '-':
          if (
            tableData[id].result ==
            (tableData[id].num1 - tableData[id].num2).toString()
          ) {
            tableData[id].status = '1'
            tableData[id].submitted = true
          } else {
            tableData[id].status = '0'
          }
          break
        case '*':
          if (
            tableData[id].result ==
            (tableData[id].num1 * tableData[id].num2).toString()
          ) {
            tableData[id].status = '1'
            tableData[id].submitted = true
          } else {
            tableData[id].status = '0'
          }
          break
        case '/':
          if (
            tableData[id].result ==
            (tableData[id].num1 / tableData[id].num2).toString()
          ) {
            tableData[id].status = '1'
            tableData[id].submitted = true
          } else {
            tableData[id].status = '0'
          }
          break
      }
      // 每当有一个正确calculateuracy（正确个数）+1
      if (tableData[id].status === '1') {
        calculateuracy += 1
      }
    }

    // 用户id
    const calculateount = reactive({
      // 获取LocalCache缓存，如果是空，文本框不显示
      Id: LocalCache.getCache('Id') ?? '',
      Judge: LocalCache.getCache('Judge') ?? ''
    })
    // 正确个数
    let calculateuracy = 0

    // 总体提交方法
    const submit = () => {
      if (tableData.length != 0) {
        tableData.forEach((item) => {
          sum(item.id - 1)
          tableData[item.id - 1].submitted = true
          // 拿到当前用户ID
          const calculateount = reactive({
            // 获取LocalCache缓存，如果是空，文本框不显示
            Id: LocalCache.getCache('Id') ?? ''
          })
          // 拿到字段
          var Sid = calculateount.Id
          var Numone = item.num1
          var Calculate = item.calculate
          var Numtwo = item.num2
          var Result = item.status
          var Answer = item.result
          // 添加题目
          store.dispatch('product/postPageExamTj', {
            pageUrl: '/api/Home/ftjtm',
            Sid,
            Numone,
            Calculate,
            Numtwo,
            Result,
            Answer
          })
          LocalCache.setCath('Judge', 1)
        })
        const calculateount = reactive({
          // 获取LocalCache缓存，如果是空，文本框不显示
          Id: LocalCache.getCache('Id') ?? '',
          Judge: LocalCache.getCache('Judge') ?? ''
        })
        // 提交时修改学生考试状态
        const Id = calculateount.Id
        store.dispatch('product/postPageUpda', {
          pageUrl: '/api/Home/fendxg',
          Id
        })
        LocalCache.setCath('Judge', 1)
        // 修改分数
        const KId = calculateount.Id
        const Score = calculateuracy * 10
        store.dispatch('product/postPageSoureXg', {
          pageUrl: '/api/Home/fxgfs',
          KId,
          Score
        })
        // 禁用按钮
        ShowBtn.value = true
      } else {
        ElMessage({
          message: '表格内没有题目!!!',
          type: 'error',
          grouping: true
        })
      }
    }

    return {
      AddBtn,
      tableData,
      propList,
      submit,
      ShowBtn
    }
  }
})
</script>

<style scoped></style>
