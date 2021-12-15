import { services } from '../data';
import ServiceCard from '../components/ServiceCard';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation } from '../animations';

import Head from 'next/head';

const index = () => {
  return (
    <motion.div className='flex flex-col px-6 pt-1 flex-grow'
                variants={routeAnimation}
                initial='initial'
                animate='animate'
                exit='exit'
    >
      <Head>
        <title>
          Hasan's Personal Website | About
        </title>
      </Head>
      <div className='mb-3 font-medium lg:text-lg'>
        Hello! My name is Hasan, I am very passionate in learning programming and software
        engineering <br />

        I like doing programming competitions because it hones my programming skill and problem solving
        skills <br />

        In my free time, I like to explore all sort of stuff about software engineering. It's a never
        ending journey and
        I hope to become better every day, bit by bit <br />
      </div>
      <div className='p-4 mt-5 bg-yellow-500 dark:bg-dark-500 flex-grow border-t-4 border-cnc-yellow'
           style={{ 'marginLeft': '-1.5rem', 'marginRight': '-1.5rem' }}
      >
        <h6 className='my-5 text-2xl lg:text-3xl font-black text-orange-800 dark:text-cnc-yellow font-montserrat text-center tracking-wide'>
          My Activities
        </h6>
        <div className='grid lg:grid-cols-2 gap-6'>
          {
            services.map(service => (
              <motion.div variants={fadeInUp} initial='initial' animate='animate'
                          className='lg:col-span-1 bg-orange-800 dark:bg-dark-700 text-white
                          border-2 border-cnc-yellow rounded-lg'>
                <ServiceCard service={service} key={service.title} />
              </motion.div>
            ))
          }
        </div>
      </div>
    </motion.div>
  );
};

export default index;
