import ICourse from '@/interfaces/ICourse'
import Card from './ui/Card'
import Image from 'next/image'
import Link from 'next/link'

export default function Course({imageSrc, title, description, width = 50}: ICourse) {
  return (
    <Card>
      <div className="grid grid-rows-3 h-full">
        <Image className='place-self-center' src={imageSrc} alt={`${title} Course`} width={width} height={width}/>
          <h2 className='text-center text-3xl font-bold text-white place-self-center'>{title}</h2>
          <p className='font-semibold text-lg text-center text-slate-800'>{description}</p>
        <Link className='border rounded-lg text-center px-3 py-1 text-lg text-sky-100 text-opacity-75 hover:text-opacity-100 font-semibold transition-colors bg-opacity-50 hover:bg-opacity-100 border-sky-100 bg-sky-700 place-self-center cursor-pointer' href={`training/${title.toLowerCase()}`}>Go to {title} Training</Link>
      </div>
    </Card>
  )
}