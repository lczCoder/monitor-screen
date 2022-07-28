export const graphData = [
  {
    "name": "单日访问人数",
    "date": "三天前",
    "view": 1000
  },
  {
    "name": "单日访问人数",
    "date": "两天前",
    "view": 3000
  },
  {
    "name": "单日访问人数",
    "date": "一天前",
    "view": 200
  },
  {
    "name": "单日访问人数",
    "date": "昨日",
    "view": 100
  },
  {
    "name": "单日访问人数",
    "date": "今日",
    "view": 800
  },
  
  {
    "name": "单日新增人数",
    "date": "三天前",
    "view": 2000
  },
  {
    "name": "单日新增人数",
    "date": "两天前",
    "view": 400
  },
  {
    "name": "单日新增人数",
    "date": "一天前",
    "view": 700
  },
  {
    "name": "单日新增人数",
    "date": "昨日",
    "view": 1100
  },
  {
    "name": "单日新增人数",
    "date": "今日",
    "view": 500
  },
  

  // {
  //   "name": "单日访问人数",
  //   "date": "三天前",
  //   "view": 1000
  // },
  // {
  //   "name": "单日访问人数",
  //   "date": "两天前",
  //   "view": 3000
  // },
  // {
  //   "name": "单日访问人数",
  //   "date": "一天前",
  //   "view": 200
  // },
  // {
  //   "name": "单日访问人数",
  //   "date": "昨日",
  //   "view": 100
  // },
  // {
  //   "name": "单日访问人数",
  //   "date": "今日",
  //   "view": 800
  // },
]


export const config = {
  data:graphData,
  xField: 'date',
  yField: 'view',
  seriesField: 'name',
  yAxis: {
    label: {
      formatter: (v) => `${v}人`,
    },
  },
  legend: {
    position: 'top',
  },
  smooth: true,
  // @TODO 后续会换一种动画方式
  animation: {
    appear: {
      animation: 'path-in',
      duration: 5000,
    },
  },
};