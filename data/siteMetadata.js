const siteMetadata = {
  title: 'MaiNick Web',
  author: 'Maico Orazio',
  headerTitle: 'MaiNick Web',
  description:
    'MaiNick Web - Il blog di Maico Orazio | Tutorial e Risorse gratuite su JavaScript, PHP e programmazione in generale',
  language: 'it',
  theme: 'system', // system, dark or light
  siteUrl: 'https://www.mainickweb.com/',
  siteRepo: 'https://github.com/mainick/mainickweb.com',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.jpeg',
  socialBanner: '/static/images/twitter-card.png',
  email: 'maico.orazio@gmail.com',
  github: 'https://github.com/mainick',
  twitter: 'http://twitter.com/mainick',
  facebook: 'http://www.facebook.com/maico.orazio',
  devto: 'https://dev.to/mainick',
  linkedin: 'http://www.linkedin.com/in/maicoorazio',
  locale: 'it-IT',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    googleAnalyticsId: 'UA-1622580-6', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue
    // Please add your .env file and modify it according to your selection
    provider: '',
  },
  comment: {
    // If you want to use a commenting system other than giscus you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'title', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'custom',
      // Place the comment box above the comments. options: bottom, top
      inputPosition: 'top',
      // Choose the language giscus will be displayed in. options: en, es, zh-CN, zh-TW, ko, ja etc
      lang: 'it',
      // theme when dark mode
      darkTheme: 'dark_dimmed',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: 'https://giscus.app/themes/custom_example.css',
    },
  },
}

module.exports = siteMetadata
