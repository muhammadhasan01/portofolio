import { educations, languages, tools } from '../data';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation } from '../animations';
import { FaBookReader } from 'react-icons/fa';

import Bar from '../components/Bar';
import Head from 'next/head';
import EducationCard from '../components/EducationCard';

const resume = () => {
  return (
    <motion.div
      className='px-6 py-2'
      variants={routeAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <Head>
        <title>
          Hasan's Personal Website | Resume
        </title>
      </Head>
      {/*  Education & Experience */}
      <div className='grid gap-6 md:grid-cols-2'>
        <motion.div variants={fadeInUp} initial='initial' animate='animate'
                    className='bg-cnc-yellow dark:bg-dark-500 p-5 border-2 border-cnc-yellow
                    rounded-2xl text-orange-800 dark:text-cnc-yellow'>
          <div className='my-3 text-2xl font-bold flex justify-left items-center'>
            <FaBookReader className='mr-2' size={30} />
            <span className='font-montserrat'>Education</span>
          </div>
          <div>
            {educations.map(education => (
              <EducationCard education={education} />
            ))}
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial='initial' animate='animate'>
          <h5 className='my-3 text-2xl font-bold'>Experience</h5>
          <div>
            <h5 className='my-2 text-xl font-bold'>
              Backend Engineer Intern
            </h5>
            <p className='font-semibold'>
              Traveloka
            </p>
            <p className='my-3'>
              Something about this...
            </p>
          </div>
        </motion.div>
      </div>
      {/*  Languages & Tools */}
      <div className='grid gap-6 md:grid-cols-2'>
        <div>
          <h5 className='my-5 text-2xl font-bold'>
            Languages & Framework
          </h5>
          <div className='my-2'>
            {
              languages.map(language => (
                <Bar data={language} />
              ))
            }
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
