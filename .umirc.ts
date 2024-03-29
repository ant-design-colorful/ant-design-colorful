export default {
  title: 'Ant Design Colorful',
  mode: 'site',
  favicon: 'https://avatars1.githubusercontent.com/u/73024040?s=200&v=4',
  logo: 'https://avatars1.githubusercontent.com/u/73024040?s=200&v=4',
  outputPath: 'docs-dist',
  hash: true,
  base: '/ant-design-colorful/',
  publicPath: '/ant-design-colorful/',
  exportStatic: {},
  ssr: {},
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
  styles: [
    `
      .__dumi-default-layout-hero {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0' gradientTransform='rotate(54,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%232c14ff'/%3E%3Cstop offset='1' stop-color='%238fafff'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(188,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23F00'/%3E%3Cstop offset='1' stop-color='%23FC0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='5.9399999999999995'%3E%3Cpath transform='translate(-58.45 7.199999999999999) rotate(2.8499999999999996 1409 581) scale(0.9950429999999999)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='1.9800000000000002' transform='translate(-56.5 40) rotate(6.499999999999999 800 450) scale(1.009925)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(18.400000000000002 -70.5) rotate(59.5 401 736) scale(1.009925)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='1.8'%3E%3Cpath transform='translate(240 -5) rotate(1.25 150 345) scale(0.9816809999999999)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='3.9600000000000004' transform='translate(-99.5 -105.5) rotate(64.80000000000001 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='translate(-178.4 53.6) rotate(10.799999999999999 1400 132) scale(0.945)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        background-attachment: fixed;
        background-size: cover;
      }

      .__dumi-default-layout-hero h1 {
        letter-spacing: 2px;
        background-image: linear-gradient(90deg,red,#ff0,#0f0,#0ff,#00f,#f0f);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        animation: hue-data 6s linear infinite;
      }

      @keyframes hue-data {
        0% {
          filter: hue-rotate(0deg);
        }
        100% {
          filter: hue-rotate(1turn);
        }
      }
    `,
  ],
};
