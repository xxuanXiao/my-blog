import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Xuanxiao 的技术博客",
  description: "Xuanxiao 的技术博客",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' , activeMatch: '^/$' },
      { text: '文章', link: '/Articles/learn_linux', activeMatch: '^/Articles/' },
      { text: '友链', link: '/Friends' , activeMatch: '^/Friends/' },
    ],

    sidebar: {
      '/Friends/': [],
      '/Articles/': [
        {
          text: '学习合集',
          collapsed: false,
          items: [
            { text: '跳槽Linux学习内容', link: '/Articles/learn_linux' }
          ]
        },
        {
          text: '随笔合集',
          collapsed: false,
          items: [
            { text: 'Hello,World', link: '/Articles/Hello-World' }
          ]
        },
        {
          text: '个人页面',
          collapsed: false,
          items: [
            { text: '关于我', link: '/Articles/about-me' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xxuanXiao' }
    ],

    footer: {
      copyright: 'Copyright © 2026-present Xuanxiao'
    }
  }
})
