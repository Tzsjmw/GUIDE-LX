<template>
  <div class="loadin-panel">
    <!-- 登录 -->
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Avatar /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account-vue ref="accoutRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox class="account-remember-me" v-model="iskeepPassword"
        >记住密码</el-checkbox
      >
      <!-- 注册 -->
      <el-link type="primary" class="account-forget" href="/regis"
        >注册</el-link
      >
      <!-- <router-link to="/register">1111</router-link> -->
    </div>
    <el-button type="primary" class="loading-btn" @click="UsersLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import loginAccountVue from './login-account.vue'
import router from '@/router/main'

export default defineComponent({
  components: {
    loginAccountVue
  },
  setup() {
    // 1.定义属性
    const iskeepPassword = ref(false)
    // 拿到组件对象
    const accoutRef = ref<InstanceType<typeof loginAccountVue>>()

    // 绑定组件
    const currentTab = ref<string>('account')

    // 2.定义方法
    const UsersLoginClick = () => {
      // console.log('立即登录', accoutRef.value)
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
  height: 200px;
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
.account-remember-me {
  margin-top: 10px;
  color: black;
}

.account-forget {
  margin-left: 170px;
  color: black;
  margin-left: 245px;
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
