import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang={this.props.__NEXT_DATA__.props.initialLanguage}>
        <Head>
          <link rel="shortcut icon" href="../static/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <style dangerouslySetInnerHTML={{__html: `
            @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
            body {
              margin: 0;
            }
          `}} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
