import React, { useState } from 'react';
import { projectData } from '../utils/data';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation, stagger } from '../utils/animations';
import Head from 'next/head';

const projects = () => {
  const [showDetail, setShowDetail] = useState<number | null>(null);
  return (
    <motion.div
      className='px-5 py-2 overflow-y-auto max-h-[90vh] lg:max-h-[80vh]'
      variants={routeAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <Head>
        <title>
          Projects | Hasan's Personal Website
        </title>
      </Head>
      <motion.div
        className='grid grid-cols-12 gap-4 my-3'
        variants={stagger}
        initial='initial'
        animate='animate'
      >
        {
          projectData.map((project, id) => (
            <motion.div
              className='col-span-12 sm:col-span-6 border-2 border-cnc-yellow
              lg:col-span-4 p-2 bg-cnc-yellow dark:bg-dark rounded-2xl'
              variants={fadeInUp}
              key={id}
            >
              <ProjectCard project={project} key={project.name} showDetail={showDetail} setShowDetail={setShowDetail} />
            </motion.div>
          ))
        }
      </motion.div>
    </motion.div>
  );
};

export default projects;
