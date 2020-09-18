import React, { useState } from 'react'
import { ApolloProvider } from '@apollo/client'
import { client } from '@/Apollo'
import { HeaderContentRender } from '@/components/Header'

// https://umijs.org/zh-CN/plugins/plugin-initial-state
// 可通过 useModel('@@initialState') 获取
export async function getInitialState() {
  const data = {
    userId: 1,
    name: 'muchang',
    avatar: 'https://avatars1.githubusercontent.com/u/16712324?s=60&v=4',
  }
  return data
}

// https://umijs.org/zh-CN/plugins/plugin-layout
export const layout = {
  // 自定义 Nav 区域
  headerContentRender: HeaderContentRender,
  logout: (data: any) => {
    console.log('logout data:', data)
  },
}

// https://umijs.org/zh-CN/plugins/plugin-qiankun
export async function qiankun() {
  return {
    // 注册子应用信息
    apps: [
      {
        name: 'sub-app',
        entry: 'http://localhost:8090/',
      },
    ],
    // 完整生命周期钩子请看 https://qiankun.umijs.org/zh/api/#registermicroapps-apps-lifecycles
    // lifeCycles: {
    //   afterMount: (props) => {
    //     console.log(props);
    //   },
    // },
    // 支持更多的其他配置，详细看这里 https://qiankun.umijs.org/zh/api/#start-opts
  }
}

export function useQiankunStateForSlave() {
  const [globalState, setGlobalState] = useState({})
  return {
    globalState,
    setGlobalState,
  }
}

export const rootContainer = (container: React.ReactNode) => (
  <React.StrictMode>
    <ApolloProvider client={client}>{container} </ApolloProvider>
  </React.StrictMode>
)
