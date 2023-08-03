import React from 'react'

type Props = {
  children: React.ReactNode,
  gap: number,
  padding: number
}

export default function Grid({children, gap, padding}: Props) {
  return (
    <main className={`grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-${gap} p-${padding}`}>
      {children}
    </main>
  )
}