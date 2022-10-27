import { createStore, Store, useStore as useVuxStore } from 'vuex'
import login from './login/login'
import system from './main/system/system'
import product from './main/product/product'
import { IRootState, IStoreType } from './types'

const store = createStore<IRootState>({
  state() {
    return {
      name: '郭源潮',
      age: 18
    }
  },
  mutations: {
    changeName(state) {
      console.log(state)
    }
  },
  getters: {},
  actions: {},
  modules: {
    login,
    system,
    product
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export function useStore(): Store<IStoreType> {
  return useVuxStore()
}
export default store
