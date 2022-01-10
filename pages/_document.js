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
          <meta name='language' content='English' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='theme-color' content='#000000' />
          <link rel='canonical' href='https://websom.dev' />

          <title>
            Web Design Agency & Web Development Solutions In Somalia | websom
          </title>
          <meta
            name='title'
            content='Web Design Agency & Web Development Solutions In Somalia | websom'
          />
          <meta
            name='description'
            content='We are one of the most effective Web Development Companies in Somalia'
          />

          <meta
            name='keywords'
            content='software development, web development, web design, seo optimization, marketing branding, e-commerce, geel tech, geeltech, websom, web som, web designing, web, web development company, somali, web development company in somalia'
          />
          <meta name='robots' content='index, follow' />
          <link rel='icon' href='/favicon.png' />

          {/* <!-- Google / Search Engine Tags --> */}
          <meta
            itemProp='name'
            content='Web Design Agency & Web Development Solutions In Somalia | websom'
          />
          <meta
            itemProp='description'
            content='We are one of the most effective Web Development Companies in Somalia'
          />
          <meta itemProp='image' content='https://www.websom.dev/favicon.png' />

          {/* <!-- Facebook Meta Tags --> */}
          <meta property='og:url' content='https://www.websom.dev' />
          <meta property='og:type' content='website' />
          <meta
            property='og:title'
            content='Web Design Agency & Web Development Solutions In Somalia | websom'
          />
          <meta
            property='og:description'
            content='We are one of the most effective Web Development Companies in Somalia'
          />
          <meta
            property='og:image'
            content='https://www.websom.dev/favicon.png'
          />

          {/* <!-- Twitter Meta Tags --> */}
          <meta name='twitter:card' content='summary_large_image' />
          <meta
            name='twitter:title'
            content='Web Design Agency & Web Development Solutions In Somalia | websom'
          />
          <meta
            name='twitter:description'
            content='We are one of the most effective Web Development Companies in Somalia'
          />
          <meta
            name='twitter:image'
            content='https://www.websom.dev/favicon.png'
          />
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
