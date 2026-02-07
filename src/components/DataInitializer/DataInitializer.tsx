'use client'

import { useProjectsStore } from '@/store'
import { useAppStore } from '@/store/app'
import { Project } from '@/types'
import { useEffect } from 'react'

export function DataInitializer({ data }: { data: Project[] }) {
  const setAllProjects = useProjectsStore(store => store.setAllProjects)
  const setLoading = useAppStore((store) => store.setLoading)
  
  useEffect(() => {
    setAllProjects(data)
    setLoading(false)
  }, [data, setAllProjects, setLoading])
  return null
}
