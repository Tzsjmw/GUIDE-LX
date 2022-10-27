<template>
  <div class="regis-panel">
    <!-- 登录 -->
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Avatar /></el-icon>
            <span>账号注册</span>
          </span>
        </template>
        <regis-account ref="accoutRef" />
      </el-tab-pane>
    </el-tabs>
    <el-link type="primary" class="account-forget" href="/login"
      >返回登陆</el-link
    >
    <div class="account-control"></div>
    <el-button type="primary" class="loading-btn" @click="UsersLoginClick"
      >立即注册</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import RegisAccount from './regis-account.vue'
// import router from '@/router/main'

export default defineComponent({
  components: {
    RegisAccount
  },
  setup() {
    // 1.定义属性
    const iskeepPassword = ref(false)
    // 拿到组件对象
    const accoutRef = ref<InstanceType<typeof RegisAccount>>()

    // 绑定组件
    const currentTab = ref<string>('account')

    // 2.定义方法
    const UsersLoginClick = () => {
      // 调完子组件的方法也把 iskeepPassword 传过去，判断是否记住密码
      accoutRef.value?.LoadingAction(iskeepPassword.value)
    }
    return {
      iskeepPassword,
      UsersLoginClick,
      accoutRef,
      currentTab
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
