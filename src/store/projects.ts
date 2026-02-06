import { initialProject, Project } from '@/types'
import { create } from 'zustand'

type ProjectsStore = {
  allProjects: Project[]
  projectsToShow: Project[]
  currentProject: Project
  page: number
  limit: number
  totalData: number
  search: string
  nextPage: () => void
  prevPage: () => void
  changeLimit: (value: number) => void
  setAllProjects: (data: Project[]) => void
  changeProjectsToShow: () => void
  selectProject: (id: string) => void
}

export const useProjectsStore = create<ProjectsStore>((set, get) => {
  return {
    allProjects: [],
    projectsToShow: [],
    currentProject: initialProject,
    page: 1,
    limit: 10,
    totalData: 0,
    search: '',

    nextPage: () => {
      const { page, allProjects, changeProjectsToShow } = get()
      const nextPage = page + 1

      if (nextPage < allProjects.length) {
        set({ page: nextPage })
        changeProjectsToShow()
      }
    },

    prevPage: () => {
      const { page, changeProjectsToShow } = get()
      const prevPage = page - 1

      if (prevPage >= 1) {
        set({ page: prevPage })
        changeProjectsToShow()
      }
    },

    changeLimit: (value: number) => {
      const { changeProjectsToShow } = get()
      set({ limit: value })
      changeProjectsToShow()
    },

    setAllProjects: (data: Project[]) => {
      const { changeProjectsToShow } = get()
      set({
        allProjects: data,
        totalData: data.length,
        currentProject: data[0],
      })
      changeProjectsToShow()
    },

    changeProjectsToShow: () => {
      const { allProjects, page, limit } = get()
      const start = (page - 1) * limit
      const end = start + limit
      const projects = allProjects.slice(start, end)

      set({ projectsToShow: projects, currentProject: projects[0] })
    },

    selectProject: (id: string) => {
      const { projectsToShow } = get()
      const selectedProject = projectsToShow.find(project => project._id === id)

      set({ currentProject: selectedProject })
    }
  }
})
