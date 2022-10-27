import { Module } from 'vuex'

import { ILoginstate } from './types'
import { IRootState } from '../types'

import {
  accountLoginRequest,
  accountregisRequest,
  accountLoginZc
} from '@/service/login/login'
import { IAccount, IDataType } from '@/service/login/type'

import router from '@/router/main'

//Elemennt-Plus message
import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'
//Module 中要有两个类型
const loginModule: Module<ILoginstate, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '111',
      userInfo: {},
      userMenus: [],
      userMess: {
        Id: '',
        Name: '',
        Judge: ''
      }
    }
  },
  getters: {},
  mutations: {
    changeUserMess(state, userMess: any) {
      state.userMess = userMess
    }
  },
  actions: {
    // async 异步方法   账号登录
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1.实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const listmess = loginResult
      commit('changeUserMess', listmess)
      router.push('/main/example/fourthly')
      ElMessage({
        message: '登录成功！！！',
        type: 'success',
        grouping: true
      })
    },
    async accountRegisAction({ commit }, payload: IDataType) {
      await accountregisRequest(payload)
      ElMessage({
        message: '注册成功！！！',
        type: 'success',
        grouping: true
      })
      router.push('/login')
    },
    // 第三题注册
    async accountthirdlyAction({ commit }, payload: IDataType) {
      await accountLoginZc(payload)
      ElMessage({
        message: '注册成功！！！',
        type: 'success',
        grouping: true
      })
    }
  }
}

export default loginModule
