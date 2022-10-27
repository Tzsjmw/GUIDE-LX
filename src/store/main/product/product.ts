import { Module } from 'vuex'
import { IRootState } from '@/store/types'
import { IProductState } from './types'

import 'element-plus/es/components/message/style/css'

import {
  PostSendXg,
  PostExamTj,
  PostSoureXg,
  PostSendIdc,
  PostSslbc,
  PostEenddele,
  PostSendMhxc,
  PostXgSend,
  PostCquanBu
} from '@/service/main/fourthly/fourthly'

const systemModule: Module<IProductState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      InidList: {},
      QuanBu: []
    }
  },
  mutations: {
    changeUserList(state, userList: any) {
      state.userList = userList
    },
    changeSendList(state, userList: any) {
      state.userList = userList
    },
    changeInidList(state, InidList: any) {
      state.InidList = InidList
    },
    changeQuanBu(state, QuanBu: any[]) {
      state.QuanBu = QuanBu
    }
  },
  actions: {
    // 修改学生考试状态
    async postPageUpda({ commit }, payload: any) {
      await PostSendXg(payload)
    },
    // 分数修改
    async postPageSoureXg({ commit }, payload: any) {
      await PostSoureXg(payload)
    },
    // 表格添加
    async postPageExamTj({ commit }, payload: any) {
      await PostExamTj(payload)
    },
    //根据Id查学生表
    async postPageSendIdc({ commit }, payload: any) {
      const SendIdc = await PostSendIdc(payload)
      const list = SendIdc
      commit('changeInidList', list)
    },
    //学生表和分数表-连表
    async postPageSslbc({ commit }, payload: any) {
      const loginResult = await PostSslbc(payload)
      const list = loginResult
      commit('changeUserList', list)
    },
    //删除学生信息
    async postPageEnddelet({ commit }, payload: any) {
      await PostEenddele(payload)
    },
    //模糊查询
    async postPageSendMhxc({ commit }, payload: any) {
      const loginResult = await PostSendMhxc(payload)
      const list = loginResult
      commit('changeSendList', list)
    },

    //修改学生表
    async postPageXgSend({ commit }, payload: any) {
      await PostXgSend(payload)
    },
    //修改学生表
    async postPageCquanBu({ commit }, payload: any) {
      const loginResult = await PostCquanBu(payload)
      const list = loginResult
      commit('changeQuanBu', list)
    }
  }
}

export default systemModule
