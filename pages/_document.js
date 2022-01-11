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

          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='theme-color' content='#000000' />
          <link rel='canonical' href='https://websom.dev/' />

          <title>
            Web Design and Development Solutions In Somalia | websom
          </title>
          <meta
            name='title'
            content='Web Design and Development Solutions In Somalia | websom'
          />
          <meta
            name='description'
            content='We are one of the most effective Web Design and Web Development Companies in Somalia'
          />

          <meta
            name='keywords'
            content='Web, Mobile, Web Mobile, App, Development Company, App Development, Web Development, Mobile Application Development Company, Mobile Application Development, agency, Design Agency, Digital Age, Digital Agency, Web Design Development Agency, Web Design, eCommerce, Websites, Website, Websom, Web Som, websom, websom.dev, websomdev, dev, Design, Web Solutions, Empowering Business Growth With The Power Of Web Development, Business Growth, Business, Growth, Software Development Company, Web Development Company, Custom Software Development, custom software development company, Custom Web, Custom Design, Somalia, Web Design Company in Somalia, Somali Web Design, Somali Web Development'
          />
          <meta name='robots' content='index, follow' />
          <link rel='icon' href='/favicon.png' />

          {/* <!-- Google / Search Engine Tags --> */}
          <meta
            itemProp='name'
            content='Web Design and Development Solutions In Somalia | websom'
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
            content='Web Design and Development Solutions In Somalia | websom'
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
            content='Web Design and Development Solutions In Somalia | websom'
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
