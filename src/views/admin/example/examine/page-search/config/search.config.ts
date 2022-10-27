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
      label: '姓名',
      placeholder: '姓名'
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
    },
    {
      field: 'Score',
      type: 'input',
      label: '分数',
      placeholder: '请输入分数'
    }
  ]
}
