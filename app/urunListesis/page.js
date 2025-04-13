'use client';
import React, { useEffect, useState } from 'react'

function page() {
    useEffect(()=>{
urunTetikleme();
    },[]);

const [urunKatalogu, setUrunKatalogu]= useState([]);
    const urunTetikleme= async ()=>{
        const urun = await fetch('https://fakestoreapi.com/products');
        const urunlerjson = await urun.json();
        setUrunKatalogu(urunlerjson);
    };
  return (
    <div>
      {urunKatalogu.map((urunler)=>(
        <div>
            {urunler.title}
        </div>
      ))}
    </div>
  )
}

export default page

