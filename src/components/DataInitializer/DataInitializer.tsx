'use client'

import { useProjectsStore } from '@/store'
import { SearchParamsType } from '@/types'
import { useEffect } from 'react'

export function DataInitializer({ params }: { params: SearchParamsType }) {
  const setPage = useProjectsStore((store) => store.setPage)
  const changeLimit = useProjectsStore((store) => store.changeLimit)

  useEffect(() => {
    setPage(Number(params.page))
    changeLimit(Number(params.limit))
  }, [])

  return null
}
