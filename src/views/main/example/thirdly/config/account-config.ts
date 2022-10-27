// 编写好规则
export const rules = {
  account: [
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
  ],
  name: [
    {
      required: true,
      message: '姓名是必填内容~',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '姓名必须是3位以上的字母或者数字~',
      trigger: 'blur'
    }
  ],
  age: [
    {
      required: true,
      message: '年龄是必填内容~',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{1,}$/,
      message: '年龄必须是1位以上的数字~',
      trigger: 'blur'
    }
  ]
}
