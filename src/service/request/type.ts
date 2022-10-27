//自带类型
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
//拦截器
export interface HYRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  //响应错误的拦截
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

//让 HYRequesConfig 继承 AxiosRequestConfig
export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  //对 AxiosRequestConfig 进行一些扩展
  interceptors?: HYRequestInterceptors<T>

  showLoading?: boolean
}
