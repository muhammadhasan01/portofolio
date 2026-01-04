import { services } from '../utils/data';
import ServiceCard from '../components/ServiceCard';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation } from '../utils/animations';

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
          About | Hasan's Personal Website
        </title>
      </Head>
      <div className='mb-3 font-medium text-large' id='about'>
        I am on a journey of constantly improving myself by developing skills and pursuing opportunities. <br />
        I excel in problem solving and have a deep understanding of algorithms and data structures,
        as evidenced by my past competitive programming awards. <br />
        I have gained diverse experience through work on various tools and projects for multiple companies,
        as well as personal side projects which have sharpened my skills.
      </div>
      <div className='p-4 mt-5 bg-cnc-yellow dark:bg-dark-500 flex-grow border-t-4 border-cnc-yellow'
           style={{ 'marginLeft': '-1.5rem', 'marginRight': '-1.5rem' }}
      >
        <div
          className='my-5 text-2xl lg:text-3xl font-black text-orange-800 dark:text-cnc-yellow font-montserrat text-center tracking-wide'>
          My Activities
        </div>
        <div className='grid lg:grid-cols-2 gap-6'>
          {
            services.map(service => (
              <motion.div variants={fadeInUp} initial='initial' animate='animate' key={service.title}
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
