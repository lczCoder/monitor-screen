

const data = [
  {
    type: 'JS错误',
    value: 271,
  },
  {
    type: '资源加载错误',
    value: 215,
  },
  {
    type: 'Promise错误',
    value: 118,
  },
  {
    type: '接口错误',
    value: 115,
  },
  {
    type: '分类五',
    value: 110,
  },
  {
    type: '其他',
    value: 51,
  },
]

export const errorConfig = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    interactions: [
      {
        type: 'pie-legend-active',
      },
      {
        type: 'element-active',
      },
    ],
    state: {
      // 设置 active 激活状态的样式
      active: {
        animate: { duration: 100, easing: 'easeLinear' },
        style: {
          lineWidth: 4,
          stroke: '#f5f5f5',
        },
      },
    }
}