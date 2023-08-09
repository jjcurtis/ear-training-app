import React from 'react'
import Image from 'next/image'
import TrebleClef from '@/public/music-images/treble-clef.svg'

type Props = {}

export default function ClefUI({}: Props) {
  return (
    <div className='absolute left-3 -top-10'>
      <Image src={TrebleClef} alt='' />
    </div>
  )
}