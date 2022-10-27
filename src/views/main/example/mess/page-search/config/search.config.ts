import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  labelWidth: '120px',
  itemLayout: {
    padding: '10px 40px'
  },
  colLayout: {
    span: 8
  },
  formItems: [
    {
      field: 'Name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'Account',
      type: 'input',
      label: '账号',
      placeholder: '请输入账号'
    },
    {
      field: 'Password',
      type: 'password',
      label: '密码',
      placeholder: '请输入密码'
    }
  ]
}
