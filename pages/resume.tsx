import { educations, languages } from '../data';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation } from '../animations';
import { FaBookReader, FaReact } from 'react-icons/fa';
import { GrTechnology } from 'react-icons/gr';


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
        <div>
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
          {/*  Languages & Tools */}
          <div className='grid gap-6'>
            <div className='rounded-2xl border-cnc-yellow bg-cnc-yellow dark:bg-dark-500 border-2
            pb-3 pt-1 text-orange-800 dark:text-cnc-yellow px-5 my-4'>
              <div className='my-5 lg:text-2xl font-bold font-montserrat flex justify-left items-center'>
                <FaReact className='mr-2' size={25} />
                <span>Languages & Framework</span>
              </div>
              <div className='my-2'>
                {
                  languages.map(language => (
                    <Bar data={language} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
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

    </motion.div>
  );
};

export default resume;
