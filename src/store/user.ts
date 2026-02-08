import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type UserType = { email: string; role: string; name: string }

type UserStore = {
  user: UserType | null
  setUser: (user: UserType | null) => void
  logout: () => void
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: 'user-storage',
    },
  ),
)
