import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-sky-700 flex items-center justify-between uppercase border-t-2 border-t-emerald-500'>
      <Link href={"/"} className='font-bold text-xl'>The Restaurant</Link>
      <p>©ALL RIGHTS RESERVED.</p>
    </div>
  )
}

export default Footer