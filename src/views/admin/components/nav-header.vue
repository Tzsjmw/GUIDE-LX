<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="isFoldClick"
      ><component :is="isFold ? iconNames[0] : iconNames[1]"></component>
    </el-icon>
  </div>
  <div class="nav-header-top">
    <h1>武汉港迪软件信息技术有限公司</h1>
  </div>
  <user-info></user-info>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import UserInfo from './user-info.vue'

export default defineComponent({
  components: {
    UserInfo
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    // 1.折叠相关逻辑
    const isFold = ref(false)
    //2.菜单图标，根据index值来进行选择
    const iconNames = ['Fold', 'Expand']

    const isFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    return {
      isFold,
      iconNames,
      isFoldClick
    }
  }
})
</script>

<style scoped>
.fold-menu {
  font-size: 30px;
  cursor: pointer;
}
.nav-header-top {
  margin: 0px auto;
}
</style>
