import hyRequest from '../index'
import { IAccount, IDataType } from './type'

enum LoginAPI {
  AccountLogin = '/api/home/fdl',
  RegisUserInfo = '/api/home/fzc',
  ACCzc = '/api/home/regis'
}

// 第三题登录
export function accountLoginZc(account: IAccount) {
  return hyRequest.post({
    url: LoginAPI.ACCzc,
    data: account
  })
}

// 第四题登录
export function accountLoginRequest(account: IAccount) {
  return hyRequest.post({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

//第四题注册
export function accountregisRequest(account: IDataType) {
  return hyRequest.post({
    url: LoginAPI.RegisUserInfo,
    data: account
  })
}
