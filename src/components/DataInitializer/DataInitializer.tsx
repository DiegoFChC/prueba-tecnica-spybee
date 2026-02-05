'use client'

import { useProjectsStore } from '@/store'
import { Project } from '@/types'
import { useEffect } from 'react'

export function DataInitializer({ data }: { data: Project[] }) {
  const setAllProjects = useProjectsStore(store => store.setAllProjects)
  
  useEffect(() => {
    setAllProjects(data)
  }, [data, setAllProjects])
  return null
}
