import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'ant-design-colorful',
  mode: 'site',
  favicon: '/images/logo.png',
  logo: '/images/logo.png',
  outputPath: 'dist',
  publicPath: './ant-design-colorful/',
  resolve: {
    includes: ['docs'],
  },
  theme: {
    '@c-primary': '#72a2de',
  },
  menus: {
    '/guide': [
      {
        children: ['guide/index', 'guide/how-to-use'],
      },
    ],
    '/components': [
      {
        title: '通 用',
        children: ['components/button'],
      },
    ],
  },
  navs: [
    { title: '介 绍', path: '/guide' },
    { title: '组 件', path: '/components' },
    { title: 'GitHub', path: 'https://github.com/xrkffgg/ant-design-colorful' },
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
});
