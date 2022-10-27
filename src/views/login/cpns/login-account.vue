<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="account">
        <!-- required="true" -->
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
// 配置记住密码规则
import LocalCache from '@/utils/cache'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'
import { toRaw } from '@vue/reactivity'

export default defineComponent({
  setup() {
    const account = reactive({
      // 获取LocalCache缓存，如果是空，文本框不显示
      account: LocalCache.getCache('account') ?? '',
      password: LocalCache.getCache('password') ?? ''
    })
    const store = useStore()

    const formRef = ref<InstanceType<typeof ElForm>>()

    const router = useRouter()

    const LoadingAction = (iskeepPassword: boolean) => {
      if (account.account == 'admin' && account.password == '123456') {
        router.push('/admin/example/examine')
        LocalCache.setCath('account', account.account)
        LocalCache.setCath('password', account.password)
        LocalCache.setCath('Name', '管理员')
      } else {
        var user = toRaw(store.state.login.userMess)
        // console.log('子组件的点击事件')
        formRef.value?.validate((valid) => {
          if (valid) {
            // console.log('真正登录成功的执行逻辑')
            // 1.判断是否记住密码
            if (iskeepPassword) {
              // 本地缓存
              LocalCache.setCath('account', account.account)
              LocalCache.setCath('password', account.password)
              LocalCache.setCath('Name', ref(user).value.Name)
            }
            // 2.开始登录验证
            // dispatch：异步操作
            // store.dispatch('login/accountLoginAction', { ...account })
            const acc = store.dispatch('login/accountLoginAction', {
              ...account
            })
            acc.then((res) => {
              var user = toRaw(store.state.login.userMess)
              LocalCache.setCath('Name', ref(user).value.Name)
              LocalCache.setCath('Id', ref(user).value.Id)
              LocalCache.setCath('Judge', ref(user).value.Judge)
            })
          } else {
            LocalCache.deleteCatch('account')
            LocalCache.deleteCatch('password')
            LocalCache.deleteCatch('Name')
            LocalCache.deleteCatch('Id')
          }
        })
      }
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
