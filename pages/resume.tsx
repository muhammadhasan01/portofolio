import { educations, experiences, languages } from '../data';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation } from '../animations';
import { FaBookReader, FaReact } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';

import Bar from '../components/Bar';
import Head from 'next/head';
import ExperienceCard from '../components/ExperienceCard';

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
        <div>
          <motion.div variants={fadeInUp} initial='initial' animate='animate'
                      className='bg-cnc-yellow dark:bg-dark-500 py-3 px-4 border-2 border-cnc-yellow
                      rounded-2xl text-orange-800 dark:text-cnc-yellow'
          >
            <div className='py-2 text-2xl font-bold flex justify-left items-center'>
              <FaBookReader className='mr-3' size={30} />
              <span className='font-montserrat'>Education</span>
            </div>
            <div className='overflow-y-auto mt-2 border-orange-800 lg:h-56'>
              {educations.map(education => (
                <ExperienceCard education={education} />
              ))}
            </div>
          </motion.div>
          {/*  Languages & Tools */}
          <div className='rounded-2xl border-cnc-yellow bg-cnc-yellow dark:bg-dark-500 border-2
            pb-3 pt-1 text-orange-800 dark:text-cnc-yellow py-3 px-4 my-4'
          >
            <div className='my-5 text-medium lg:text-2xl font-bold font-montserrat flex justify-left items-center'>
              <FaReact className='mr-2' size={25} />
              <span>Languages & Framework</span>
            </div>
            <div className='my-1 overflow-y-auto pr-3 h-40'>
              {
                languages.map(language => (
                  <Bar data={language} />
                ))
              }
            </div>
          </div>
        </div>
        <div>
          <motion.div variants={fadeInUp} initial='initial' animate='animate'
                      className='bg-cnc-yellow dark:bg-dark-500 py-3 px-4 border-2 border-cnc-yellow
                      rounded-2xl text-orange-800 dark:text-cnc-yellow -mt-5 mb-3 lg:my-1'
          >
            <div className='py-2 text-2xl font-bold flex justify-left items-center'>
              <MdWork className='mr-2' size={27} />
              <span className='font-montserrat'>Experience</span>
            </div>
            <div className='overflow-y-auto mt-2 border-orange-800 lg:h-56'>
              {experiences.map(education => (
                <ExperienceCard education={education} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

    </motion.div>
  );
};

export default resume;
