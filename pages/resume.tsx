import { languages, tools } from '../data';
import Bar from '../components/Bar';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation } from '../animations';

const resume = () => {
  return (
    <motion.div
      className='px-6 py-2'
      variants={routeAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      {/*  Education & Experience */}
      <div className='grid gap-6 md:grid-cols-2'>
        <motion.div variants={fadeInUp} initial='initial' animate='animate'>
          <h5 className='my-3 text-2xl font-bold'>Education</h5>
          <div>
            <h5 className='my-2 text-xl font-bold'>
              Informatics Engineering Student
            </h5>
            <p className='font-semibold'>
              Institut Teknologi Bandung (2018 - 2022)
            </p>
            <p className='my-3'>
              I am currently pursuing Bachelor of Engineering in Informatics Engineering Institut Teknologi Bandung
            </p>
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
        <div>
          <h5 className='my-5 text-2xl font-bold'>
            Tools & Software
          </h5>
          <div className='my-2'>
            {
              tools.map(tool => (
                <Bar data={tool} />
              ))
            }
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
