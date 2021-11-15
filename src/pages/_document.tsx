import React from "react";
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    // let path = ctx.asPath;
    //     if (path?.includes("/signin-callback.html")) {
    //       console.log(path);
    //         if (typeof window === "undefined" && ctx.res?.writeHead)
    //             ctx.res?.writeHead(302, { Location: path.replace("signin-callback.html", "api/auth/callback/identity-server4") }).end()
    //     }
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps }
  }

  render() {
    const { locale } = this.props.__NEXT_DATA__;
    return (
      <Html lang="en" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <link rel="shortcut icon" href="/img/brand/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/img/brand/apple-icon.png"
          />
        </Head>
        <body className="text-blueGray-700 antialiased">
          <div id="page-transition"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
