import React from 'react'
import Image from 'next/image'
import aksoymanti from '@/app/assets/aksoymanti.webp'

function TopLayout() {
  return (
    <div className=' flex border-b-2 border-b-gray-300 pb-0.5' >
        <div className=" w-1/6">
      <Image src={aksoymanti} width={200} height={100}/>
      </div>
      <div className=' w-5/6 flex items-center justify-around'>
        <div>Kurumsal</div>
        <div>Ürünler</div>
        <div>Hakkımızda</div>
        <div>İletişim</div>
      </div>
    </div>
  )
}

export default TopLayout
