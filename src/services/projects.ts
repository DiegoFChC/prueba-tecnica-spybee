import type { Project, SearchParamsType } from '@/types'
import projectsMock from '@/mocks/mock_data.json'

const URL_DATA = 'http://localhost:3000/mock_data.json'

type GetProjects = {
  projects: Project[]
  total: number
  page: number
  limit: number
}

export async function getProjects(
  params?: SearchParamsType,
): Promise<GetProjects> {
  const projects: Project[] = projectsMock as unknown as Project[]
  // const data = await fetch(URL_DATA)
  // const projects: Project[] = (await import('@/../public/data/mock_data.json'))
  //   .default

  // const PROJECTS_COUNT = projects.length

  // const { page, limit } = params
  // const start = (Number(page) - 1) * Number(limit)
  // const end = start + Number(limit)
  // const newListProjects = projects.slice(start, end)

  return {
    projects: projects,
    total: projects.length,
    page: 1,
    limit: 10,
  }
}
