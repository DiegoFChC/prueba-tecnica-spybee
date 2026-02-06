import { create } from 'zustand'

type AppStore = {
  showMap: boolean
  setShowMap: () => void
}

export const useAppStore = create<AppStore>((set, get) => {
  return {
    showMap: true,

    setShowMap: () => {
      const { showMap } = get()
      set({ showMap: !showMap })
    }
  }
})