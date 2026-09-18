import { createContext, useContext, useState, type ReactNode } from 'react'

type SectionId = 'hero' | 'how-it-works' | 'chat' | 'download' | 'none'

interface ActivePhoneContextType {
  activePhoneSection: SectionId
  setActivePhoneSection: (id: SectionId) => void
}

const ActivePhoneContext = createContext<ActivePhoneContextType | undefined>(undefined)

export function ActivePhoneProvider({ children }: { children: ReactNode }) {
  const [activePhoneSection, setActivePhoneSection] = useState<SectionId>('hero')

  // Debug log
  console.log('Current Active Phone Section:', activePhoneSection)

  return (
    <ActivePhoneContext.Provider value={{ activePhoneSection, setActivePhoneSection }}>
      {children}
    </ActivePhoneContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useActivePhone() {
  const context = useContext(ActivePhoneContext)
  if (!context) {
    throw new Error('useActivePhone must be used within an ActivePhoneProvider')
  }
  return context
}
