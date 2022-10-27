export const contentTableConfig = {
  title: '学生考试情况',
  propList: [
    { prop: 'Id', label: '学号', rowspan: '10' },
    { prop: 'Name', label: '姓名' },
    { prop: 'Numone', label: '题目' },
    { prop: 'Calculate', label: '题目' },
    { prop: 'Numtwo', label: '题目' },
    { prop: 'Answer', label: '答案' },
    { prop: 'Result', label: '结果', slotName: 'Result' },
    { prop: 'Score', label: '分数' }
  ]
}
