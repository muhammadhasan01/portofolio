import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta name='description' content="Hasan's Personal Portofolio Website" />
          <meta name='keywords' content='NextJS, Personal Website, Portofolio, React' />
        </Head>
        <body
          className='bg-fixed bg-gradient-to-r from-red-500 to-yellow-400 dark:from-dark-500 dark:to-dark-700 dark:text-white'>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
