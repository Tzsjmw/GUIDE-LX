// 编写好规则
export const rules = {
  name: [
    {
      // 必传
      required: true,
      message: '账号是必填内容~',
      // trigger代表什么时候触发   blur失去焦点的时候
      trigger: 'blur'
    },
    {
      // 正则表达式
      pattern: /^[a-z0-9]{5,10}$/,
      message: '账号必须是5~10个字母或者数字~',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码是必填内容~',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '账号必须是3位以上的字母或者数字~',
      trigger: 'blur'
    }
  ]
}
