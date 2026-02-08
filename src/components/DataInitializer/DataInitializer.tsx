'use client'

import { useProjects } from '@/hooks/useProjects'
import { useProjectsStore } from '@/store'
import { SearchParamsType } from '@/types'
import { useEffect } from 'react'

export function DataInitializer({ params }: { params: SearchParamsType }) {
  const setPage = useProjectsStore((store) => store.setPage)
  const changeLimit = useProjectsStore((store) => store.changeLimit)
  const fetchProjects = useProjects({ page: params.page, limit: params.limit })

  useEffect(() => {
    setPage(Number(params.page))
    changeLimit(Number(params.limit))
  }, [])

  return null
}
