import '../styles/globals.css';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute='class'>
      <div className='grid grid-cols-12 gap-9 my-14 lg:px-48 px-5 sm:px-20 md:px-32'>
        <div className='lg:col-span-3 bg-orange-800 dark:bg-dark-900 rounded-2xl
          col-span-12 p-4 text-center border border-yellow-700 dark:border-cnc-yellow drop-shadow-2xl dark:shadow-custom-dark'>
          <Sidebar />
        </div>
        <div
          className='lg:col-span-9 bg-orange-800 text-white rounded-2xl col-span-12 dark:bg-dark-900 flex
          flex-col overflow-hidden border border-yellow-700 dark:border-cnc-yellow'>
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
