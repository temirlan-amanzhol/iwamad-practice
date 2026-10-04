import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

type LikesContextValue = {
  likes: number
  addLike: () => void
}

const LikesContext = createContext<LikesContextValue | null>(null)

type LikesProviderProps = {
  children: ReactNode
}

export function LikesProvider({ children }: LikesProviderProps) {
  const [likes, setLikes] = useState(0)

  function addLike() {
    setLikes((current) => current + 1)
  }

  return (
    <LikesContext.Provider value={{ likes, addLike }}>
      {children}
    </LikesContext.Provider>
  )
}

// The hook lives next to the provider, so the fast-refresh rule is turned off for it
// eslint-disable-next-line react-refresh/only-export-components
export function useLikes() {
  const context = useContext(LikesContext)
  if (context === null) {
    throw new Error('useLikes must be used inside LikesProvider')
  }
  return context
}
