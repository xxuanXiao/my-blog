import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Xuanxiao 的技术博客",
  description: "Xuanxiao 的技术博客",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文章', link: '/Articles' },
      { text: '友链', link: '/Friends' },
    ],

    sidebar: {
      '/Friends/': [],
      '/Articles/': [
        {
          text: '文章',
          items: [
            { text: 'Hello，World', link: '/Articles/Hello-World' },
            { text: '关于我', link: '/Articles/about-me' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xxuanXiao' }
    ]
  }
})
