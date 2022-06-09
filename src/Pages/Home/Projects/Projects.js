import React, { useEffect, useState } from 'react';
import ButtonOutline from '../../../Components/ButtonOutline';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch('projects.json')
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <section className='container my-20'>
      {/* Title */}
      <h2 className='text-center text-4xl uppercase'>Featured Projects</h2>
      <div className='flex gap-2 justify-center items-center mb-8'>
        <div className='w-8 h-[2px] bg-secondary'></div>
        <p className='text-sm uppercase'>My projects</p>
        <div className='w-8 h-[2px] bg-secondary'></div>
      </div>

      {/* Main Part */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10'>
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      <div className='flex justify-center my-5'>
        <ButtonOutline>View More</ButtonOutline>
      </div>
    </section>
  );
};

export default Projects;
