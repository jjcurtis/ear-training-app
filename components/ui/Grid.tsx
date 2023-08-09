import React from 'react'

type Props = {
  children: React.ReactNode,
}

export default function Grid({children}: Props) {
  return (
    <main className={`grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 p-8`}>
      {children}
    </main>
  )
}