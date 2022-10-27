export const userMenus = [
  {
    id: 1,
    name: '练习题',
    type: 1,
    url: '/main/example',
    sort: 1,
    children: [
      {
        id: 2,
        url: '/main/example/second',
        name: '第一题',
        sort: 2,
        type: 2,
        children: null,
        parentId: 2
      },
      {
        id: 3,
        url: '/main/example/thirdly',
        name: '第二题(注册)',
        sort: 3,
        type: 3,
        children: null,
        parentId: 3
      },
      {
        id: 4,
        url: '/main/example/mess',
        name: '第二题(学生信息)',
        sort: 4,
        type: 4,
        children: null,
        parentId: 4
      },
      {
        id: 5,
        url: '/main/example/modif',
        name: '第二题(修改)',
        sort: 5,
        type: 5,
        children: null,
        parentId: 5
      },
      {
        id: 6,
        url: '/main/example/fourthly',
        name: '第三题',
        sort: 6,
        type: 6,
        children: null,
        parentId: 6
      }
    ]
  }
]
