export default {
  title: 'ant-design-colorful',
  mode: 'site',
  favicon: 'https://avatars1.githubusercontent.com/u/73024040?s=200&v=4',
  logo: 'https://avatars1.githubusercontent.com/u/73024040?s=200&v=4',
  outputPath: 'docs-dist',
  hash: true,
  base: '/ant-design-colorful/',
  publicPath: '/ant-design-colorful/',
  resolve: {
    includes: ['docs'],
  },
  theme: {
    '@c-primary': '#1890ff',
  },
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  menus: {
    '/guide': [
      {
        children: ['guide/index', 'guide/how-to-use'],
      },
    ],
  },
  navs: [
    { title: '介 绍', path: '/guide' },
    { title: '组 件', path: '/components' },
    {
      title: 'GitHub',
      path: 'https://github.com/ant-design-colorful/ant-design-colorful',
    },
  ],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
};
