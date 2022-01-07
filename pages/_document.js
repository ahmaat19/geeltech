import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Global site tag (gtag.js) - Google Analytics */}
          <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-V2Z73KY0N0'
          ></script>

          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V2Z73KY0N0', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />

          <meta charSet='utf-8' />
          <meta name="language" content="English"/>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='theme-color' content='#000000' />
          <link rel='canonical' href='https://websom.dev/' />
        
        <meta
          name='keywords'
          content='software development, web development, web design, seo optimization, marketing branding, e-commerce, geel tech, geeltech, websom, web som, web designing, web, web development company, somali, web development company in somalia'
        />
        <meta
          name='description'
          content='We are one of the most effective Web Development Companies in Somalia'
        />
        <meta name="robots" content= "index, follow"/>
        <link rel='icon' href='/favicon.png' />

        <title>Websom - Web Design Company</title>
        <meta name='title' content=' Websom - Web Design Company' />
        <meta name="description" content="We are one of the most effective Web Development Companies in Somalia"/>

      {/* <!-- Google / Search Engine Tags --> */}
      <meta itemprop="name" content="Websom - Web Design Company"/>
      <meta itemprop="description" content="We are one of the most effective Web Development Companies in Somalia"/>
      <meta itemprop="image" content=""/>

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://www.websom.dev"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="Websom - Web Design Company"/>
      <meta property="og:description" content="We are one of the most effective Web Development Companies in Somalia"/>
      <meta property="og:image" content=""/>

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content="Websom - Web Design Company"/>
      <meta name="twitter:description" content="We are one of the most effective Web Development Companies in Somalia"/>
      <meta name="twitter:image" content=""/>

      {/* <!-- Meta Tags Generated via http://heymeta.com --> */}


        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
