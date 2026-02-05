import type { Project, SearchParamsType } from '@/types'

const URL_DATA = 'http://localhost:3000/mock_data.json'

type GetProjects = {
  projects: Project[]
  total: number
  page: number
  limit: number
}

export async function getProjects(
  params: SearchParamsType,
): Promise<GetProjects> {
  const data = await fetch(URL_DATA)
  const projects: Project[] = await data.json()

  // const PROJECTS_COUNT = projects.length

  const { page, limit } = params
  const start = (Number(page) - 1) * Number(limit)
  const end = start + Number(limit)
  const newListProjects = projects.slice(start, end)

  return {
    projects: newListProjects,
    total: projects.length,
    page: Number(page),
    limit: Number(limit)
  }
}
