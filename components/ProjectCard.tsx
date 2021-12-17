import { FunctionComponent, useState } from 'react';
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
          id, name, category, deployedUrl,
          githubUrl, imagePath, description, keyTechs,
        },
        showDetail,
        setShowDetail,
      }) => {

  return (
    <div>
      <Image
        src={imagePath}
        alt={name}
        className='cursor-pointer'
        onClick={() => setShowDetail(id)}
        width='300'
        height='200'
        layout='responsive'
        quality='100'
      />
      <p className='my-2 text-center'>{name}</p>
      {
        showDetail === id &&
        <div className='grid md:grid-cols-2 absolute top-0 left-0 z-10
          h-auto w-full gap-x-12 text-black bg-gray-200 dark:text-white dark:bg-dark-100 p-3
          md:p-10 rounded-lg'>
          <motion.div variants={stagger} initial='initial' animate='animate'>
            <motion.div variants={fadeInUp} className='border-4 border-gray-700'>
              <Image
                src={imagePath}
                alt={name}
                layout='responsive'
                height='300'
                width='400'
                quality='90'
              />
            </motion.div>
            <motion.div variants={fadeInUp} className='flex justify-center my-4 space-x-3'>
              <a href={githubUrl} target='_blank'
                 className='flex items-center px-4 py-2 space-x-3 bg-gray-200 dark:bg-dark-300'>
                <AiFillGithub /> <span>Github</span>
              </a>
              {deployedUrl &&
              (
                <a href={deployedUrl} target='_blank'
                   className='flex items-center px-4 py-2 space-x-3 bg-gray-200 dark:bg-dark-300'>
                  <AiFillProject />
                  <span>Project</span>
                </a>
              )
              }
            </motion.div>
          </motion.div>
          <motion.div variants={stagger} animate='animate' initial='initial'>
            <motion.h2 variants={fadeInUp} className='mb-3 text-xl font-medium md:text-2xl'>{name}</motion.h2>
            <motion.h3 variants={fadeInUp} className='mb-3 font-medium'>{description}</motion.h3>
            <motion.div variants={fadeInUp} className='flex flex-wrap mt-5 space-x-2 text-sm tracking-wider'>
              {keyTechs.map(tech => (
                <span key={tech} className='px-2 py-1 my-1 bg-gray-200 dark:bg-dark-300'>
                {tech}
              </span>
              ))}
            </motion.div>
          </motion.div>
          <button onClick={() => setShowDetail(null)}
                  className='absolute top-3 right-3 rounded-full focus:outline-none bg-gray-200 dark:bg-dark-300'
          >
            <MdClose size={30} />
          </button>
        </div>
      }
    </div>
  );
};

export default ProjectCard;
