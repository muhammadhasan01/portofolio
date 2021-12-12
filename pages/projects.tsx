import React, { useState } from 'react';
import { projectData } from '../data';
import ProjectCard from '../components/ProjectCard';
import ProjectsNavbar from '../components/ProjectsNavbar';
import { Category, IProject } from '../type';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation, stagger } from '../animations';

const projects = () => {
  const [projectState, setProjectState] = useState<IProject[]>(projectData);
  const [active, setActive] = useState<Category | 'all'>('all');
  const handlerFilterCategory = (category: Category | 'all') => {
    setActive(category);
    if (category === 'all') {
      setProjectState(projectData);
      return;
    }
    const filteredProject = projectData.filter(p => p.category.includes(category));
    setProjectState(filteredProject);
  };
  return (
    <motion.div
      className='px-5 py-2 overflow-y-scroll'
      style={{ height: '65vh' }}
      variants={routeAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <ProjectsNavbar handlerFilterCategory={handlerFilterCategory} active={active} />
      <motion.div
        className='grid grid-cols-12 gap-4 my-3 relative'
        variants={stagger}
        initial='initial'
        animate='animate'
      >
        {
          projectState.map(project => (
            <motion.div
              className='col-span-12 sm:col-span-6 lg:col-span-4 p-2 bg-gray-200 dark:bg-dark-300 rounded-lg'
              variants={fadeInUp}
            >
              <ProjectCard project={project} key={project.name} />
            </motion.div>
          ))
        }
      </motion.div>
    </motion.div>
  );
};

export default projects;
