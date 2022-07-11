module.exports = function (plop) {
  // create your generators here
  plop.setGenerator('basic', {
    description: 'this is a monitor',
    prompts: [
      // 提示问题，可以是多问题，以数组的形式表示
      {
        // 可以根据输入的name动态创建组件的相关文件
        type: 'input',
        name: 'dir',
        message: 'please input dir',
      },
      {
        // 可以根据输入的name动态创建组件的相关文件
        type: 'input',
        name: 'name',
        message: 'please input name',
      },
    ],
    actions: [
      // 命令完成对应的操作，可以是多操作，以数组的形式表示
      {
        type: 'add', // 创建文件
        path: 'src/{{dir}}/{{name}}/index.tsx', // 生成的文件
        templateFile: 'template/{{dir}}/index.tsx', // 模板文件
      },
      {
        type: 'add',
        path: 'src/{{dir}}/{{name}}/index.module.less',
        templateFile: 'templates/{{dir}}/index.module.less',
      },
    ],
  });
};
