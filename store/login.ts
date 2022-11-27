import create from 'zustand'

const useBearStore = create((set) => ({
  user: null,
  setUser: (userPassing) => {
    return set((state) => ({
      user: userPassing,
    }))
  },
}))

export default useBearStore
