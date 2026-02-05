import { Project } from '@/types'
import { create } from 'zustand'

type ProjectsStore = {
  allProjects: Project[]
  setAllProjects: (data: Project[]) => void
}

export const useProjectsStore = create<ProjectsStore>((set) => {
  return {
    allProjects: [],
    setAllProjects: (data: Project[]) => {
      set({ allProjects: data })
    }
  }
})