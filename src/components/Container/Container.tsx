'use client'

import { useProjectsStore } from '@/store'
import styles from './Container.module.css'
import { Pagination } from '../Pagination/Pagination'

export function Contianer() {
  const projects = useProjectsStore((store) => store.projectsToShow)

  return (
    <section className={styles.Container}>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>{project.title}</li>
        ))}
      </ul>
      <Pagination />
    </section>
  )
}
