import { initialProject, Item, Project } from '@/types'
import { create } from 'zustand'

type ProjectsStore = {
  allProjects: Project[]
  filteredProjects: Project[]
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
  updateFilteredProjects: (value: string) => void
  sortBy: (filter: 'alphabetical' | Item) => void
}

export const useProjectsStore = create<ProjectsStore>((set, get) => {
  return {
    allProjects: [],
    filteredProjects: [],
    projectsToShow: [],
    currentProject: initialProject,
    page: 1,
    limit: 10,
    totalData: 0,
    search: '',

    nextPage: () => {
      const { page, filteredProjects, changeProjectsToShow } = get()
      const nextPage = page + 1

      if (nextPage < filteredProjects.length) {
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
        filteredProjects: data,
      })
      changeProjectsToShow()
    },

    changeProjectsToShow: () => {
      const { filteredProjects, page, limit } = get()
      const start = (page - 1) * limit
      const end = start + limit
      const projects = filteredProjects.slice(start, end)

      set({
        projectsToShow: projects,
        currentProject: projects.length > 0 ? projects[0] : initialProject,
        totalData: filteredProjects.length,
      })
    },

    selectProject: (id: string) => {
      const { projectsToShow, allProjects } = get()
      let selectedProject = projectsToShow.find(
        (project) => project._id === id,
      )

      if (!selectedProject) {
        selectedProject = allProjects.find(
          (project) => project._id === id,
        )
      }

      set({ currentProject: selectedProject })
    },

    updateFilteredProjects: (value) => {
      const { allProjects, changeProjectsToShow } = get()
      const text = value.toLocaleLowerCase().trim()

      if (!text) {
        set({ filteredProjects: allProjects })
        changeProjectsToShow()
        return
      }

      const result = allProjects.filter((project) => {
        return (
          project.title.toLowerCase().includes(text) ||
          project.city.toLowerCase().includes(text) ||
          project.status.toLowerCase().includes(text) ||
          project.projectPlanData.plan.toLowerCase().includes(text) ||
          project.clientData.title.toLowerCase().includes(text)
        )
      })

      set({ filteredProjects: result })
      changeProjectsToShow()
    },

    sortBy: (filter) => {
      const { filteredProjects, changeProjectsToShow } = get()
      const sorted = [...filteredProjects]

      sorted.sort((a, b) => {
        if (filter === 'alphabetical') {
          return a.title.localeCompare(b.title)
        }

        const countA = a.incidents.filter((i) => i.item === filter).length
        const countB = b.incidents.filter((i) => i.item === filter).length

        return countB - countA
      })

      set({ filteredProjects: sorted, page: 1 })
      changeProjectsToShow()
    },
  }
})
