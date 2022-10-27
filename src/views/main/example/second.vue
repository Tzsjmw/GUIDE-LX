<template>
  <div class="second">第一题</div>
  <!-- 操作区 -->
  <div class="SecondOne">
    <fieldset class="leg">
      <legend align="left">操作区</legend>
      <div class="text-div">
        设置题目数量<el-input
          v-model="input"
          placeholder="请输入数字1-10"
          clearable
          class="text-pt"
          oninput="value=value.replace(/[^\d]/g,'')"
        />
      </div>
      <div class="btn-div">
        <el-button type="primary" plain @click="AddBtn()">出题</el-button>
        <el-button type="success" plain @click="BtnClear()">重置</el-button>
      </div>
    </fieldset>
  </div>
  <!-- 考试结果 -->
  <div class="second-sp">
    <span>考试结果：</span>
    <span
      :style="{
        color:
          acc === '未提交'
            ? 'black'
            : acc === '优秀'
            ? 'red'
            : acc === '及格'
            ? 'green'
            : 'gray'
      }"
    >
      {{ acc }}
    </span>
  </div>

  <!-- 答题区 -->
  <fieldset class="leg-daan">
    <legend align="left">答题区</legend>
    <!-- 复用表格 -->
    <page-table :tableData="tableData" :propList="propList">
      <!-- 答案 -->
      <template #result="scope">
        <input
          type="number"
          v-model="scope.row.result"
          style="width: 80%"
          :disabled="scope.row.submitted"
        />
      </template>
    </page-table>
  </fieldset>

  <!-- 提交按钮 -->
  <el-button @click="submit" type="danger" class="btn-submit">提交</el-button>

  <!-- 第三次 原生table-->
  <!-- <table border="1" cellspacing="0">
    <thead>
      <tr>
        <td>id</td>
        <td>题目</td>
        <td>题目</td>
        <td>题目</td>
        <td>答案</td>
        <td>批阅结果</td>
        <td>操作</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in tableData" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.num1 }}</td>
        <td>{{ item.num3 }}</td>
        <td>{{ item.num2 }}</td>
        <td>
          <input
            type="number"
            v-model="item.result"
            style="width: 80%"
            :disabled="item.submitted"
          />
        </td>
        <td>{{ item.status }}</td>
        <td>
          <button @click="sum(item.id)" :disabled="item.submitted">提交</button>
        </td>
      </tr>
    </tbody>
  </table> -->
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import PageTable from './second/page-table.vue'
//Elemennt-Plus message
import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'

export default defineComponent({
  components: {
    PageTable
  },
  setup() {
    const input = ref('')
    // 重置按钮  （重置界面到一开始打开的情况）
    const BtnClear = () => {
      input.value = ''
      tableData.length = 0
      acc.value = '未提交'
    }
    // 添加
    const AddBtn = () => {
      // 文本框输入值
      var topic = input.value as any
      // 表格内有多少条数据
      var amount = tableData.length

      if (topic != '') {
        if (amount === 0) {
          if (topic <= 10) {
            for (var i = 0; (i < topic) as any; i++) {
              var acc = {
                id: i + 1,
                num1: Math.floor(Math.random() * 10) + 1,
                num2: Math.floor(Math.random() * 10) + 1,
                num3: ['+', '-', '*', '/'][Math.floor(Math.random() * 4)],
                status: '未完成',
                result: '',
                submitted: false
              }
              tableData.push(acc)
            }
          } else {
            ElMessage({
              message: '每次最多设置10道题目!!!',
              type: 'error',
              grouping: true
            })
          }
        } else {
          ElMessage({
            message: '当表格内有数据时不能再次添加',
            type: 'error',
            grouping: true
          })
          input.value = ''
        }
        // console.log(oo)
      } else {
        ElMessage({
          message: '文本框为空！！！',
          type: 'error',
          grouping: true
        })
      }
      // var acc = {
      //   id: 0,
      //   num1: Math.floor(Math.random() * 10) + 1,
      //   num2: Math.floor(Math.random() * 10) + 1,
      //   num3: ['+', '-', '*', '/'][Math.floor(Math.random() * 4)],
      //   status: '未完成',
      //   result: '',
      //   submitted: false
      // }
      // tableData.push(acc)
      // console.log(input.value)
    }

    // 表格总数据
    let tableData = reactive([
      {
        id: 0,
        num1: Math.floor(Math.random() * 10) + 1,
        num2: Math.floor(Math.random() * 10) + 1,
        num3: ['+', '-', '*', '/'][Math.floor(Math.random() * 4)],
        status: '未完成',
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
      { prop: 'num3', label: '题目' },
      { prop: 'num2', label: '题目' },
      { prop: 'result', label: '答案', slotName: 'result' },
      { prop: 'status', label: '批阅结果', width: '180px', slotName: 'status' }
    ]

    // 正确个数
    var accuracy = 0

    var acc = ref('未提交')
    // 总体提交方法
    const submit = () => {
      if (tableData.length != 0) {
        tableData.forEach((item) => {
          sum(item.id - 1)
        })
      } else {
        ElMessage({
          message: '表格内没有题目!!!',
          type: 'error',
          grouping: true
        })
      }
      // console.log(accuracy)
      if (tableData.length != 0) {
        // if (accuracy > tableData.length / 2) {
        //   acc.value = '优秀'
        // } else {
        //   acc.value = '不及格'
        // }
        if (accuracy === tableData.length) {
          acc.value = '优秀'
          accuracy = 0
        } else if (accuracy > tableData.length / 2) {
          acc.value = '及格'
          accuracy = 0
        } else {
          acc.value = '不及格'
          accuracy = 0
        }
      }
    }

    // 判断输入的数字是否正确
    const sum = (id: any) => {
      if (tableData[id].result == '') {
        return
      }
      switch (tableData[id].num3) {
        case '+':
          if (
            tableData[id].result ==
            (tableData[id].num1 + tableData[id].num2).toString()
          ) {
            tableData[id].status = '✔'
            tableData[id].submitted = true
          } else {
            tableData[id].status = '❌'
          }
          break
        case '-':
          if (
            tableData[id].result ==
            (tableData[id].num1 - tableData[id].num2).toString()
          ) {
            tableData[id].status = '✔'
            tableData[id].submitted = true
          } else {
            tableData[id].status = '❌'
          }
          break
        case '*':
          if (
            tableData[id].result ==
            (tableData[id].num1 * tableData[id].num2).toString()
          ) {
            tableData[id].status = '✔'
            tableData[id].submitted = true
          } else {
            tableData[id].status = '❌'
          }
          break
        case '/':
          if (
            tableData[id].result ==
            (tableData[id].num1 / tableData[id].num2).toString()
          ) {
            tableData[id].status = '✔'
            tableData[id].submitted = true
          } else {
            tableData[id].status = '❌'
          }
          break
      }
      // 每当有一个正确accuracy（正确个数）+1
      if (tableData[id].status === '✔') {
        accuracy += 1
      }

      // if (
      //   (tableData[id].submitted = true).valueOf.length >=
      //   tableData.length / 2
      // ) {
      //   console.log('优秀')
      // } else {
      //   console.log('不及格')
      // }
      // if (
      //   tableData[id].result ==
      //   (tableData[id].num1 + tableData[id].num2).toString()
      // ) {
      //   tableData[id].status = '正确'
      //   tableData[id].submitted = true
      // } else {
      //   tableData[id].status = '错误'
      // }
      // console.log(id)
    }

    return {
      tableData,
      propList,
      sum,
      input,
      BtnClear,
      AddBtn,
      submit,
      acc
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
  margin-left: 15px;
  width: 300px;
}
.btn-div {
  float: right;
  margin-right: 30px;
  line-height: 150px;
}
.leg {
  height: 100%;
}
.leg-daan {
  height: 100%;
  margin-top: 20px;
}
.btn-submit {
  margin-top: 20px;
  width: 200px;
  height: 35px;
}
.second-sp {
  margin-top: 20px;
}
</style>
