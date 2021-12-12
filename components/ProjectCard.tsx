import { FunctionComponent, useState } from 'react';
import { IProject } from '../type';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';

import Image from 'next/image';
import { fadeInUp, stagger } from '../animations';

const ProjectCard: FunctionComponent<{
  project: IProject
}> = ({
        project: {
          name, category, deployedUrl,
          githubUrl, imagePath, description, keyTechs,
        },
      }) => {
  const [showDetail, setShowDetail] = useState<boolean>(false);

  return (
    <div>
      <Image
        src={imagePath}
        alt={name}
        className='cursor-pointer'
        onClick={() => setShowDetail(true)}
        width='300'
        height='200'
        layout='responsive'
        quality='100'
      />
      <p className='my-2 text-center'>{name}</p>
      {
        showDetail &&
        <div className='grid md:grid-cols-2 absolute top-0 left-0 z-10
          h-auto w-full gap-x-12 text-black bg-gray-100 dark:text-white dark:bg-dark-100 p-3'>
          <motion.div variants={stagger} initial='initial' animate='animate'>
            {/*<img src={imagePath} alt={name} />*/}
            <motion.div variants={fadeInUp}>
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
          <button onClick={() => setShowDetail(false)}
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
