// 编写好规则
export const rules = {
  account: [
    {
      // 正则表达式
      pattern: /^[a-z0-9]{5,10}$/,
      message: '账号必须是5~10个字母或者数字~',
      trigger: 'blur'
    }
  ],
  password: [
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '账号必须是3位以上的字母或者数字~',
      trigger: 'blur'
    }
  ],
  name: [
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '姓名必须是3位以上的字母或者数字~',
      trigger: 'blur'
    }
  ],
  age: [
    {
      pattern: /^[0-9]{1,}$/,
      message: '年龄必须是1位以上的数字~',
      trigger: 'blur'
    }
  ],
  judge: [
    {
      pattern: /^[0-9]{1,}$/,
      message: '考试状态',
      trigger: 'blur'
    }
  ]
}
