module.exports = {
  // 每行最大字符数，超过则换行
  printWidth: 100,
  // 缩进空格数
  tabWidth: 2,
  // 不使用制表符(tab)缩进
  useTabs: false,
  // 语句末尾添加分号
  semi: true,
  // 使用单引号代替双引号
  singleQuote: true,
  // 对象属性仅在必要时使用引号
  quoteProps: 'as-needed',
  // 多行对象、数组末尾添加逗号
  trailingComma: 'es5',
  // 对象、数组括号与内容之间添加空格
  bracketSpacing: true,
  // 标签的闭合括号不单独换行
  bracketSameLine: false,
  // 箭头函数参数始终添加括号 (x) => x
  arrowParens: 'always',
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  //  proseWrap: "preserve", // 保持markdown文本的换行
  // HTML空白敏感度，控制是否根据显示样式调整空格
  htmlWhitespaceSensitivity: 'css',
  // Vue文件中script和style标签内缩进
  vueIndentScriptAndStyle: true,
  // 换行符使用LF (跨平台通用选择)
  endOfLine: 'off',
  // 自动格式化嵌入的代码（如HTML中的JS）
  embeddedLanguageFormatting: 'auto',
  // 不强制每个HTML属性单独占一行
  singleAttributePerLine: false,
};
