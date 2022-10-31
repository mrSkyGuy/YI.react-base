import React, { createContext, useState } from 'react'
import mock from '../constants/mock'

export const CurrentSectionContext = createContext(mock[0])

export function CurrentSectionState({ children }) {
  const [currentSection, setCurrentSection] = useState(mock[0])

  return <CurrentSectionContext.Provider value={{ currentSection, setCurrentSection }}>
    {children}
  </CurrentSectionContext.Provider>
}
