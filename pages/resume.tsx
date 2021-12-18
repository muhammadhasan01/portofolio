import { achievements, educations, experiences, languages } from '../utils/data';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation } from '../utils/animations';
import { FaBookReader, FaReact } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { BsAwardFill } from 'react-icons/bs';
import { SiReactos } from 'react-icons/si';

import Bar from '../components/Bar';
import Head from 'next/head';
import ExperienceCard from '../components/ExperienceCard';
import AchievementCard from '../components/AchievementCard';

const resume = () => {
  return (
    <motion.div
      className='lg:px-6 lg:py-2'
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
      <div className='grid lg:gap-6 lg:grid-cols-2'>
        <div>
          <motion.div variants={fadeInUp} initial='initial' animate='animate'
                      className='bg-cnc-yellow dark:bg-dark-500 -mx-1 p-5 lg:mx-0 lg:py-3 lg:px-4 border-2 border-orange-800 dark:border-cnc-yellow
                      lg:rounded-2xl text-orange-800 dark:text-cnc-yellow'
          >
            <div className='py-2 text-2xl font-bold flex justify-left items-center'>
              <FaBookReader className='mr-3' size={30} />
              <span className='font-montserrat'>Education</span>
            </div>
            <div className='overflow-y-auto mt-2 border-orange-800 lg:h-48'>
              {educations.map(education => (
                <ExperienceCard education={education} />
              ))}
            </div>
          </motion.div>
          <div className='lg:rounded-2xl border-orange-800 dark:border-cnc-yellow bg-cnc-yellow dark:bg-dark-500 border-2 -mx-1 lg:mx-0
            pb-3 pt-1 text-orange-800 dark:text-cnc-yellow py-3 px-4 lg:my-4'
          >
            <div className='my-5 text-medium lg:text-2xl font-bold font-montserrat flex justify-left items-center'>
              <SiReactos className='mr-2' size={25} />
              <span>Languages & Framework</span>
            </div>
            <div className='my-1 overflow-y-auto pr-3 h-60 lg:h-40'>
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
                      className='bg-cnc-yellow dark:bg-dark-500 py-3 px-4 border-2 border-orange-800 dark:border-cnc-yellow -mx-1 lg:mx-0
                      lg:rounded-2xl text-orange-800 dark:text-cnc-yellow mb-3 lg:my-1'
          >
            <div className='py-2 text-2xl font-bold flex justify-left items-center'>
              <MdWork className='mr-2' size={27} />
              <span className='font-montserrat'>Experience</span>
            </div>
            <div className='overflow-y-auto mt-2 border-orange-800 lg:h-48'>
              {experiences.map(education => (
                <ExperienceCard education={education} />
              ))}
            </div>
          </motion.div>
          <div className='lg:rounded-2xl border-orange-800 dark:border-cnc-yellow bg-cnc-yellow dark:bg-dark-500 border-2 -mx-1 mb-6 lg:mx-0 -mt-3
            pb-3 pt-1 py-3 px-4 text-orange-800 dark:text-cnc-yellow lg:my-4'
          >
            <div className='my-5 text-xl lg:text-2xl font-bold font-montserrat flex justify-left items-center'>
              <BsAwardFill className='mr-2' size={25} />
              <span>Achievements</span>
            </div>
            <div className='my-1 overflow-y-auto pr-3 h-80 lg:h-48'>
              {
                achievements.map(achievement => (
                  <AchievementCard achievement={achievement} />
                ))
              }
            </div>
          </div>
        </div>
      </div>

    </motion.div>
  );
};

export default resume;
