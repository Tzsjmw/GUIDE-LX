class LocalCache {
  // 保存缓存
  setCath(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  // 获取缓存
  getCache(key: string) {
    // obj=>sting=>obj
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  // 删除缓存
  deleteCatch(key: string) {
    window.localStorage.removeItem(key)
  }

  // 清空缓存
  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
