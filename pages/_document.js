import Document, { Html, Head, Main, NextScript } from 'next/document'
import siteMetadata from '@/data/siteMetadata'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href={siteMetadata.favicon.apple} />
          <link rel="icon" type="image/png" sizes="32x32" href={siteMetadata.favicon.with32} />
          <link rel="icon" type="image/png" sizes="16x16" href={siteMetadata.favicon.with16} />
          <link rel="manifest" href={siteMetadata.favicon.webmanifest} />
          <link rel="shortcut icon" href={siteMetadata.favicon.ico} />
          <meta name="apple-mobile-web-app-title" content={siteMetadata.title} />
          <meta name="application-name" content={siteMetadata.title} />
          <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#337ab7" />
          <meta name="theme-color" content="#FFFFFF" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        </Head>
        <body className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
