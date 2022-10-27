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
        url: '/admin/example/examine',
        name: '查看学生信息',
        sort: 2,
        type: 2,
        children: null,
        parentId: 2
      },
      {
        id: 3,
        url: '/admin/example/modif',
        name: '修改学生信息',
        sort: 3,
        type: 3,
        children: null,
        parentId: 3
      },
      {
        id: 4,
        url: '/admin/example/details',
        name: '学生详情',
        sort: 4,
        type: 4,
        children: null,
        parentId: 4
      }
    ]
  }
]
