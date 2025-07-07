import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ssd-notes",
  description: "Software Systems Development Notes",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Notes',
        items: [
          { text: 'Spec Reference', link: '/spec-reference' },
          { text: 'SSD AS', link: '/ssd-as' },
          { text: 'SSD A2', link: '/ssd-a2' },
          { text: 'DT GCSE', link: '/spec-reference' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bifunctors/ssd-notes' }
    ]
  }
})
