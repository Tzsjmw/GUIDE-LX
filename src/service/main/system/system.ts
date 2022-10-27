import hyRequest from '../../index'
import { IDataType } from './type'

enum LoginAPI {
  YongInst = '/api/Home/inst',
  Delacc = '/api/Home/del',
  Inid = '/api/Home/inid',
  Upda = '/api/Home/upda',
  Sendxg = '/api/Home/fendxg'
}
// 查全部
export function getPageListData(url: string, queryInfo: any) {
  return hyRequest.get({
    url: url,
    data: queryInfo,
    showLoading: false
  })
}
// 查询
export function PostPageListData(account: IDataType) {
  return hyRequest.post({
    url: LoginAPI.YongInst,
    data: account,
    showLoading: false
  })
}
//删
export function PostPageDel(account: IDataType) {
  return hyRequest.post({
    url: LoginAPI.Delacc,
    data: account
  })
}
// id查
export function PostPageInid(queryInfo: any) {
  return hyRequest.post({
    url: LoginAPI.Inid,
    data: queryInfo
  })
}

// 修改
export function PostPageChange(queryInfo: any) {
  return hyRequest.post({
    url: LoginAPI.Upda,
    data: queryInfo
  })
}
