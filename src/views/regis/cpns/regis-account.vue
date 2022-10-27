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
      <el-form-item prop="Judge" type="hidden">
        <el-input v-model="account.Judge" show-password type="hidden" />
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
import { useStore } from '@/store'

export default defineComponent({
  setup() {
    const account = reactive({
      // 获取LocalCache缓存，如果是空，文本框不显示
      name: '',
      age: '',
      account: '',
      password: '',
      Judge: '0'
    })

    const store = useStore()

    const formRef = ref<InstanceType<typeof ElForm>>()

    const LoadingAction = (iskeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          store.dispatch('login/accountRegisAction', { ...account })
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
