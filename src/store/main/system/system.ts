import { Module } from 'vuex'
import { IRootState } from '@/store/types'
import { ISystemState } from './types'

import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'

import {
  getPageListData,
  PostPageListData,
  PostPageDel,
  PostPageInid,
  PostPageChange
} from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      InidList: {}
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeInidList(state, InidList: any[]) {
      state.InidList = InidList
      console.log('muta', InidList)
    },
    changeInstList(state, IninstList: any[]) {
      state.userList = IninstList
    }
  },
  actions: {
    // 表格数据
    async getPageListAction({ commit }, payload: any) {
      // 1.对页面发送请求
      const pageResult = await getPageListData(
        payload.pageUrl,
        payload.queryInfo
      )
      const { list } = pageResult.data
      commit('changeUserList', list)
    },
    // 删除
    async postPageDel({ commit }, payload: any) {
      await PostPageDel(payload)
    },
    // 查询
    async postPageListAction({ commit }, payload: any) {
      // 1.对页面发送请求
      const loginResult = await PostPageListData(payload)
      const list = loginResult
      commit('changeInstList', list)
    },
    // id查询
    async postPageInid({ commit }, payload: any) {
      // 1.对页面发送请求
      const loginResult = await PostPageInid(payload)
      const list = loginResult
      console.log('lsit', list)
      commit('changeInidList', list)
    },
    // 修改
    async postPageUpda({ commit }, payload: any) {
      // 1.对页面发送请求
      const loginResult = await PostPageChange(payload)
      ElMessage({
        message: '修改成功！！！',
        type: 'success',
        grouping: true
      })
    }
  }
}

export default systemModule
