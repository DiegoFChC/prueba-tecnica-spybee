'use client'

import { ReactNode } from 'react'
import { StatusField } from '../StatusField/StatusField'
import styles from './SectionTitle.module.css'
import { useProjectsStore } from '@/store'

type SectionTittleType = {
  title: string
  info?: string
  children?: ReactNode
}

export function SectionTitle({ children, title, info }: SectionTittleType) {
  const allProjects = useProjectsStore(store => store.allProjects).length

  return (
    <div className={styles.SectionTitle}>
      <div className={styles.title}>
        <h1>{title}</h1>
        <StatusField type='general'>{info ? info : `${allProjects} Proyectos`}</StatusField>
      </div>
      {children && <div className={styles.content}>{children}</div>}
    </div>
  )
}
