<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>

      <el-form-item label="年龄" prop="age">
        <el-input v-model="account.age" />
      </el-form-item>

      <el-form-item label="账号" prop="account">
        <el-input v-model="account.account" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { ElForm } from 'element-plus'
// 配置输入框规则
import { rules } from '../config/account-config'
// vuex
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const account = reactive({
      // 获取LocalCache缓存，如果是空，文本框不显示
      name: '',
      age: '',
      account: '',
      password: ''
    })

    const Store = useStore()

    const formRef = ref<InstanceType<typeof ElForm>>()

    const LoadingAction = (iskeepPassword: boolean) => {
      // console.log('子组件的点击事件')
      formRef.value?.validate((valid) => {
        // console.log(valid)
        if (valid) {
          // console.log('真正登录成功的执行逻辑')
          // dispatch：异步操作
          Store.dispatch('login/accountthirdlyAction', { ...account })
          account.name = ''
          account.age = ''
          account.account = ''
          account.password = ''
        }
      })
    }
    return {
      account,
      rules,
      LoadingAction,
      formRef
    }
  }
})
</script>

<style scoped></style>
