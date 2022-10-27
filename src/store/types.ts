import { ISystemState } from './main/system/types'
import { ILoginstate } from './login/types'
import { IProductState } from './main/product/types'
export interface IRootState {
  name: string
  age: number
}
export interface IRootWithModule {
  login: ILoginstate
  system: ISystemState
  product: IProductState
}

export type IStoreType = IRootState & IRootWithModule
