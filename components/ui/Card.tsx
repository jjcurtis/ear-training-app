import React from 'react'

type Props = {
  children: React.ReactNode
}

export default function Card({children}: Props) {
  return (
    <article className='rounded-lg border-4 border-opacity-50 border-sky-800 bg-sky-400 shadow-2xl p-3'>
      {children}
    </article>
  )
}