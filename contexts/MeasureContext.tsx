'use client'

import { ReactNode, SetStateAction, createContext, useContext, useState } from 'react'
import Measure from '@/classes/Measure'
import TimeSignature from '@/enums/TimeSignature'

type Props = {
  children: ReactNode
}

export const MeasureContext = createContext<{measures: Measure[], setMeasures: React.Dispatch<SetStateAction<Measure[]>>} | null>(null)

export default function MeasureContextProvider({ children }: Props) {
  const [measures, setMeasures] = useState<Measure[]>([new Measure(TimeSignature.FourFour)])
  return (
    <MeasureContext.Provider value={{
      measures,
      setMeasures
    }}>
      {children}
    </MeasureContext.Provider>
  )
}

export function useMeasureContext() {
  const measureContext = useContext(MeasureContext);
  if (!measureContext) {
    throw new Error('This hook must be used within the MeasureContextProvider')
  }

  return measureContext;
}