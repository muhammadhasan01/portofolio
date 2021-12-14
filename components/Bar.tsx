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
                className='text-cnc-yellow dark:text-orange-800 font-semibold my-2 bg-yellow-200 dark:bg-gray-800 rounded-full'>
      <motion.div
        className='px-4 py-1 flex items-center rounded-full
        bg-gradient-to-r from-red-700 to-orange-600 dark:from-yellow-500 dark:to-cnc-yellow'
        style={{ width: level }}
        variants={variants}
      >
        <Icon className='mr-3' />{name}
      </motion.div>
    </motion.div>
  );
};

export default Bar;
