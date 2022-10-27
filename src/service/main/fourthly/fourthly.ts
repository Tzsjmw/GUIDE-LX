import hyRequest from '../../index'

enum FourAPI {
  Sendxg = '/api/Home/fendxg',
  SoureXG = '/api/Home/fxgfs',
  Examtjtm = '/api/Home/ftjtm',
  Xsidc = '/api/Home/fendidc',
  SSlbc = '/api/Home/sslbc',
  Senddele = '/api/Home/enddele',
  Ssmhcx = '/api/Home/ssmhcx',
  Xgend = '/api/Home/xgend',
  Cquanb = '/api/Home/scqb'
}

// 修改学生考试状态
export function PostSendXg(queryInfo: any) {
  return hyRequest.post({
    url: FourAPI.Sendxg,
    data: queryInfo
  })
}

// 修改分数
export function PostSoureXg(queryInfo: any) {
  return hyRequest.post({
    url: FourAPI.SoureXG,
    data: queryInfo
  })
}

// 添加题目
export function PostExamTj(queryInfo: any) {
  return hyRequest.post({
    url: FourAPI.Examtjtm,
    data: queryInfo
  })
}

//根据Id查学生表
export function PostSendIdc(queryInfo: any) {
  return hyRequest.post({
    url: FourAPI.Xsidc,
    data: queryInfo,
    showLoading: false
  })
}

//连表展示表格数据
export function PostSslbc(queryInfo: any) {
  return hyRequest.post({
    url: FourAPI.SSlbc,
    data: queryInfo,
    showLoading: false
  })
}

//删除学生信息
export function PostEenddele(queryInfo: any) {
  return hyRequest.post({
    url: FourAPI.Senddele,
    data: queryInfo,
    showLoading: false
  })
}

//模糊查询
export function PostSendMhxc(queryInfo: any) {
  return hyRequest.post({
    url: FourAPI.Ssmhcx,
    data: queryInfo,
    showLoading: false
  })
}

//修改学生表
export function PostXgSend(queryInfo: any) {
  return hyRequest.post({
    url: FourAPI.Xgend,
    data: queryInfo,
    showLoading: false
  })
}

//学生信息考试详情
export function PostCquanBu(queryInfo: any) {
  return hyRequest.post({
    url: FourAPI.Cquanb,
    data: queryInfo,
    showLoading: false
  })
}
