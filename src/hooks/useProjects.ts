import { getProjects } from '@/services'
import { Project, SearchParamsType } from '@/types'
import { useEffect, useState } from 'react'
import { useProjectsStore } from '@/store'

type useProjectsReturns = {
  data: Project[]
  loading: boolean
  error: boolean
}

export function useProjects({
  page,
  limit,
}: SearchParamsType): useProjectsReturns {
  const [data, setData] = useState<Project[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const setAllProjects = useProjectsStore(store => store.setAllProjects)

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      getProjects({ page, limit })
        .then((projects) => {
          setData(projects)
          setAllProjects(projects)
        })
        .catch(() => setError(true))
        .finally(() => setLoading(false))
    }

    loadData()
  }, [page, limit, setAllProjects])

  return {
    data,
    loading,
    error,
  }
}
