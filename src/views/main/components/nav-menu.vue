<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="../../../assets/img/logo.png" alt="logo" />
      <span class="title" v-if="!collapse">技术培训题</span>
    </div>

    <el-menu
      default-active="2"
      class="el-menu-vertical"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      :collapse="collapse"
    >
      <template v-for="(item, index) in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <!-- 二级菜单可以展开的标题 -->
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon><component :is="iconName[index]"></component></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <!-- 遍历里面的 item-->
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleMenuItemClick(subitem)"
              >
                <template #title>
                  <el-icon
                    ><component :is="iconName[index + 1]"></component
                  ></el-icon>
                  <span class="item_interior">
                    <!-- <router-link to="/second">{{ subitem.name }}</router-link> -->
                    {{ subitem.name }}
                  </span>
                </template>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { userMenus } from './config/userMenus'
import { useRouter, useRoute } from 'vue-router'
import { pathMapToMenu } from '@/utils/map-menus'
import { useStore } from '@/store'

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    //图标
    const iconName = ['Platform', 'Tickets']
    // 绑定菜单
    const router = useRouter()
    const handleMenuItemClick = (item: any) => {
      router.push({
        path: item.url ?? 'not-found'
      })
    }

    return {
      userMenus,
      iconName,
      handleMenuItemClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  // background-color: #001529;
  background-color: rgb(12, 33, 53);

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      width: 45%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  :v-deep(.el-submenu__title) {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
.item_interior {
  margin-left: 10px;
}
</style>
