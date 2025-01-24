'use client';
import { useState } from 'react';
import styles from './style.module.scss';
import Titles from './titles';
import Descriptions from './descriptions';

const data = [
  {
    title: 'Tired',
    description:
      'Working on the Next-Generation Software experience.',
    speed: 0.5,
  },
  {
    title: 'Of',
    description:
      'Designed, developed, and completed more than 50 projects in three years.',
    speed: 0.5,
  },
  {
    title: 'Boring',
    description:
      'In my third year, and the passion remains just as strong as on day one.',
    speed: 0.67,
  },
  {
    title: 'Logins?',
    description:
      'Working as one individual, accomplishing the work of an entire team.',
    speed: 0.8,
  },
  {
    title: 'Wake up...',
    description:
      'Never stop learning, never stop coding, never surrender.',
    speed: 0.8,
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState(null);
  return (
    <div className={styles.container}>
      <Titles
        data={data}
        setSelectedProject={setSelectedProject}
      />
      <Descriptions
        data={data}
        selectedProject={selectedProject}
      />
    </div>
  );
}
