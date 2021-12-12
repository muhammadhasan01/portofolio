import { services } from '../data';
import ServiceCard from '../components/ServiceCard';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation } from '../animations';

const index = () => {
  return (
    <motion.div className='flex flex-col px-6 pt-1 flex-grow'
                variants={routeAnimation}
                initial='initial'
                animate='animate'
                exit='exit'
    >
      <h5 className='my-3 font-medium text-base'>
        I am Hasan, a Final Year Informatics Student at Institut Teknologi Bandung. I like doing programming and
        learning Software Engineering.
      </h5>
      <div className='p-4 mt-5 bg-gray-400 dark:bg-dark-700 flex-grow'
           style={{ 'marginLeft': '-1.5rem', 'marginRight': '-1.5rem' }}>
        <h6 className='my-3 font-bold text-xl text-center tracking-wide'>
          What I Offer
        </h6>
        <div className='grid lg:grid-cols-2 gap-6'>
          {
            services.map(service => (
              <motion.div variants={fadeInUp} initial='initial' animate='animate'
                          className='lg:col-span-1 bg-gray-200 dark:bg-dark-900 rounded-lg'>
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
