<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar :size="30" :src="circleUrl" />
        <span>{{ account.Name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleFoldClick">
            <el-icon><turn-off /></el-icon>退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import 'element-plus/dist/index.css'
import { useStore } from '@/store'
// 配置记住密码规则
import LocalCache from '@/utils/cache'
export default defineComponent({
  setup() {
    // 头像
    const state = reactive({
      circleUrl:
        'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
    })
    const { circleUrl } = toRefs(state)

    const account = reactive({
      // 获取LocalCache缓存，如果是空，文本框不显示
      Name: LocalCache.getCache('Name') ?? ''
    })

    // 退出登录
    const router = useRouter()
    const handleFoldClick = () => {
      router.push('/login')
      ElMessage({
        showClose: true,
        message: '退出成功！',
        center: true,
        type: 'success'
      })
    }
    return {
      circleUrl,
      handleFoldClick,
      account
    }
  }
})
</script>

<style scoped>
.el-dropdown-link {
  /* 鼠标变点击样式  cursor*/
  cursor: pointer;
  display: flex;
  align-items: center;
}
.el-dropdown-link span {
  margin-left: 5px;
}
</style>
