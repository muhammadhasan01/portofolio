import '../styles/globals.css';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps, router }) {
  const [mounted, setMounted] = useState(false);
  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true);
  }, [])
  if (!mounted) {
    return null;
  }
  return (
    <ThemeProvider attribute='class'>
      <div className='grid grid-cols-12 gap-5 lg:gap-9 my-9 lg:px-35 px-3 sm:px-5 md:px-32'>
        <div className='lg:col-span-3 bg-orange-800 dark:bg-dark-700 rounded-2xl
          col-span-12 p-4 text-center border-2 border-red-900
          dark:border-cnc-yellow drop-shadow-3xl dark:shadow-custom-dark'>
          <Sidebar />
        </div>
        <div
          className='lg:col-span-9 bg-orange-800 text-white rounded-2xl col-span-12 dark:bg-dark-800 flex
          flex-col overflow-hidden border-2 drop-shadow-2xl border-red-900 dark:border-cnc-yellow'>
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
