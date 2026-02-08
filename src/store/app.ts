import { create } from 'zustand'

type AppStore = {
  showMap: boolean
  loading: boolean
  showFilters: boolean
  showDetails: boolean
  openMap: () => void
  closeMap: () => void
  setLoading: (value: boolean) => void
  setShowFilters: () => void
  setShowDetails: (value: boolean) => void
}

export const useAppStore = create<AppStore>((set, get) => {
  return {
    showMap: false,
    loading: false,
    showFilters: false,
    showDetails: false,

    openMap: () => {
      set({ showMap: true })
    },

    closeMap: () => {
      set({ showMap: false })
    },

    setLoading: (value) => {
      set({ loading: value })
    },

    setShowFilters: () => {
      const { showFilters } = get()
      set({ showFilters: !showFilters })
    },

    setShowDetails: (value) => {
      set({ showDetails: value })
    }
  }
})