import { FunctionComponent } from 'react';
import { ISkill } from '../type';
import { motion } from 'framer-motion';
import { stagger } from '../animations';

const Bar: FunctionComponent<{
  data: ISkill
}> = ({ data: { name, level, Icon } }) => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: level,
      transition: {
        duration: 0.4,
        type: 'spring',
        damping: 16,
        stiffness: 100
      },
    },
  };
  return (
    <motion.div variants={stagger}
                initial='initial'
                animate='animate'
                className='text-white my-2 bg-gray-300 dark:bg-dark-800 rounded-full'>
      <motion.div
        className='px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green to-blue-600'
        style={{ width: level }}
        variants={variants}
      >
        <Icon className='mr-3' />{name}
      </motion.div>
    </motion.div>
  );
};

export default Bar;
