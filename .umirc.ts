import { defineConfig } from 'umi'

import { routes } from './config/route'

export default defineConfig({
  routes,
  layout: {
    name: '基座模版',
    locale: false,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  qiankun: {
    master: {},
  },
  metas: [
    {
      name: 'keywords',
      content: 'umi, umijs',
    },
    {
      name: 'description',
      content: '🍙 插件化的企业级前端应用框架。',
    },
    {
      bar: 'foo',
    },
  ],
  favicon: '/favicon.ico',
  dynamicImport: {},
})
