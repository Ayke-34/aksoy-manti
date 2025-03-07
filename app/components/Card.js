"use client"
import React from 'react'
import Image from 'next/image'


function Card({img="",price="",title="",category=""}) { //card componentine gelen propsları buradan karşılıyoeruz ve eğer içi boş ise boş olma durumlarına karşı önlem alıyoruz
  return (
    <div className=' border-2 border-black w-36 '>
      <Image src={img} alt='bi' width={144} 
        height={188}/>
        <div>{title}</div> {/*burada değişkenleri süslü parantez içerisinde yazma sebebimiz birer değişken olmaları*/}
        <div>{category}</div>
        <div>{price}</div>
        <div className=' flex justify-center'>
        <button className=' border border-pink-500 bg-pink-500 text-white  rounded-lg px-2 py-1 '>sepete ekle</button>
        </div>
    </div>
  )
}

export default Card
