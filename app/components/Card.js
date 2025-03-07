
import React from 'react'
import Image from 'next/image'
import aksoymanti from '@/app/assets/aksoymanti.webp'

function Card() {
  return (
    <div className=' border-2 border-black w-git36 h-72'>
      <Image src={aksoymanti} alt='bi' width={144} 
        height={188}/>
        <div>Bileklik bileklik bileklikl</div>
        <div>125.777 tltl</div>
        <button>shdh</button>
        <div>asaasa</div>
       
    </div>
  )
}

export default Card
