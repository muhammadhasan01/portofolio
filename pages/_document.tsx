import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta name='description' content="Hasan's Personal Website" />
          <meta name='keywords' content='NextJS, Personal Website, Portofolio, React' />
          <meta property='og:title' content="Hasan's Personal Website" />
          <meta property='og:image'
                content='https://ik.imagekit.io/2louui6ojn7/portofolio/profile-picture-hasan_P1ExkjSgN?updatedAt=1630422826587' />
          <meta property='og:description' content="Hasan's Personal Website made with NextJs and Tailwind CSS" />
          <meta property='og:url' content='www.mhasan01.com' />
        </Head>
        <body
          className='bg-red-900 dark:bg-gradient-to-r dark:from-dark-500 dark:to-dark-700 dark:text-white'>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
