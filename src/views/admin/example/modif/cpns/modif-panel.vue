<template>
  <div class="regis-panel">
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Avatar /></el-icon>
            <span>修改学生信息</span>
          </span>
        </template>
        <div class="login-account">
          <el-form
            label-width="60px"
            :rules="rules"
            :model="account"
            ref="formRef"
          >
            <el-form-item label="姓名" prop="name">
              <el-input v-model="account.Name" />
            </el-form-item>

            <el-form-item label="年龄" prop="age">
              <el-input v-model="account.Age" />
            </el-form-item>

            <el-form-item label="账号" prop="account">
              <el-input v-model="account.Account" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="account.Password" show-password />
            </el-form-item>
            <el-form-item label="状态" prop="Judge">
              <!-- <el-input v-model="account.Judge" /> -->
              <el-select
                v-model="account.judge"
                class="m-2"
                placeholder="Select"
                size="large"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-form>
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-button type="primary" class="loading-btn" @click="UsersLoginClick"
      >立即修改</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
// 配置输入框规则
import { rules } from '../config/account-config'
import { useStore } from '@/store'
import { ElMessage } from 'element-plus'

export default defineComponent({
  components: {
    // RegisAccount
  },
  setup() {
    // 绑定组件
    const currentTab = ref<string>('account')
    let account: any = ref({
      // 获取LocalCache缓存，如果是空，文本框不显示
      Id: 0,
      Name: '',
      Age: 0,
      Account: '',
      Password: '',
      judge: ''
    })
    const store = useStore()
    const route = useRoute()

    // 下拉框
    account.value.judge = '0'
    const options = [
      {
        value: '0',
        label: '未考试'
      },
      {
        value: '1',
        label: '已考试'
      }
    ]

    //传值id
    const Id = route.query.id
    const promise = store.dispatch('product/postPageSendIdc', {
      pageUrl: '/api/Home/fendidc',
      Id
    })
    promise.then(() => {
      const dataList = computed(() => store.state.product.InidList)
      account.value = dataList.value
    })

    // 修改
    const UsersLoginClick = (queryInfo: any = {}) => {
      store.dispatch('product/postPageXgSend', {
        pageUrl: '/api/Home/xgend',
        ...account.value
      })
      ElMessage({
        type: 'success',
        message: '修改成功'
      })
    }

    return {
      // iskeepPassword,
      UsersLoginClick,
      // accoutRef,
      currentTab,
      account,
      rules,
      options
    }
  }
})
</script>

<style sscoped>
.demo-tabs {
  width: 350px;
  height: 350px;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
.loadin-panel {
  margin-bottom: 20px;
}
.header_format {
  text-align: center;
}

.account-forget {
  margin-left: 170px;
  color: black;
  margin-left: 295px;
}
.loading-btn {
  width: 100%;
  margin-top: 10px;
}
</style>
<style>
.el-checkbox__input.is-checked + .el-checkbox__label {
  color: black;
}
</style>
