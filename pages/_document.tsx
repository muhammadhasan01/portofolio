import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        </Head>
        <body className="bg-fixed bg-gradient-to-r from-green to-blue-500 dark:from-black-500 dark:to-black-700">
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
