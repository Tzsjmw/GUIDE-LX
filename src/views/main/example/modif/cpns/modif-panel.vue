<template>
  <div class="regis-panel">
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Avatar /></el-icon>
            <span>账号修改</span>
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
import { defineComponent, ref, onBeforeMount, computed } from 'vue'
import { useRoute } from 'vue-router'
// 配置输入框规则
import { rules } from '../config/account-config'
import { useStore } from '@/store'

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
      Password: ''
    })
    const store = useStore()
    const route = useRoute()

    //传值id
    const Id = route.query.id
    onBeforeMount(() => {
      const promise = store.dispatch('system/postPageInid', {
        pageUrl: '/api/Home/Inid',
        Id
      })
      promise.then((res) => {
        const dataList = computed(() => store.state.system.InidList)
        console.log('wdad', dataList.value)
        account.value = dataList.value
        console.log('文本框', account.value)
      })
    })

    const UsersLoginClick = (queryInfo: any = {}) => {
      // 修改
      store.dispatch('system/postPageUpda', {
        pageUrl: '/api/Home/upda',
        ...account.value
      })
      console.log('获取的值', account.value)
    }

    return {
      UsersLoginClick,
      currentTab,
      account,
      rules
    }
  }
})
</script>

<style sscoped>
.demo-tabs {
  width: 350px;
  height: 300px;
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
