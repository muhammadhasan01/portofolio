import { FunctionComponent } from 'react';
import { IProject } from '../utils/type';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';

import Image from 'next/image';
import { fadeInUp, stagger } from '../utils/animations';

const ProjectCard: FunctionComponent<{
  project: IProject,
  showDetail: number | null,
  setShowDetail: (id: number | null) => void
}> = ({
        project: {
          id, name, deployedUrl,
          githubUrl, imagePath, description, keyTechs,
        },
        showDetail,
        setShowDetail,
      }) => {

  return (
    <div>
      <div className='border-4 border-orange-800 dark:border-cnc-yellow rounded-xl'>
        <Image
          src={imagePath}
          alt={name}
          className='cursor-pointer rounded-lg'
          onClick={() => setShowDetail(id)}
          width='300'
          height='200'
          layout='responsive'
          quality='100'
        />
      </div>
      <div className='my-2 font-semibold text-center cursor-pointer
        text-cnc-yellow bg-orange-800 dark:bg-dark-800 p-2 rounded-xl'
              onClick={() => setShowDetail(id)}
      >
        {name}
      </div>
      {
        showDetail === id &&
        <div className='grid md:grid-cols-2 absolute top-5 lg:top-20 left-0 w-full lg:left-10 lg:w-11/12 drop-shadow-2xl z-10
          h-auto gap-x-12 text-black bg-gray-800 dark:text-white dark:bg-dark-100 p-3 border-2 border-gray-900 dark:border-cnc-yellow p-5
          md:p-10 rounded-xl'>
          <motion.div variants={stagger} initial='initial' animate='animate'>
            <motion.div variants={fadeInUp} className='border-4 border-gray-900 dark:border-cnc-yellow'>
              <Image
                src={imagePath}
                alt={name}
                layout='responsive'
                height='300'
                width='400'
                quality='100'
              />
            </motion.div>
            <motion.div variants={fadeInUp} className='flex justify-center my-4 space-x-3'>
              <a href={githubUrl} target='_blank'
                 className='flex items-center font-semibold
                 px-4 py-2 space-x-3 bg-gray-200 rounded-xl dark:bg-dark-800'>
                <AiFillGithub size={20} /> <span>Github</span>
              </a>
              {deployedUrl &&
              (
                <a href={deployedUrl} target='_blank'
                   className='flex items-center font-semibold
                   px-4 py-2 space-x-3 bg-gray-100 rounded-xl dark:bg-dark-800'>
                  <AiFillProject size={20} />
                  <span>Project</span>
                </a>
              )
              }
            </motion.div>
          </motion.div>
          <motion.div variants={stagger} animate='animate' initial='initial'>
            <motion.h2 variants={fadeInUp}
                       className='mb-3 text-xl font-montserrat text-orange-300 dark:text-cnc-yellow
                       font-semibold md:text-2xl'>{name}</motion.h2>
            <motion.h3 variants={fadeInUp}
                       className='mb-3 text-white font-medium overflow-auto pr-3 h-36 lg:h-56'>{description}</motion.h3>
            <motion.div variants={fadeInUp} className='lg:flex overflow-auto items-center items-center hidden
            mt-3 space-x-2 text-sm font-semibold text-center'>
              {keyTechs.map(tech => (
                <span key={tech} className='px-2 py-2 my-2 bg-gray-200 dark:bg-dark-800 rounded-lg'>
                {tech}
              </span>
              ))}
            </motion.div>
          </motion.div>
          <button onClick={() => setShowDetail(null)}
                  className='absolute top-3 right-3 rounded-full focus:outline-none bg-red-500'
          >
            <MdClose className='dark:text-dark' size={30} />
          </button>
        </div>
      }
    </div>
  );
};

export default ProjectCard;
