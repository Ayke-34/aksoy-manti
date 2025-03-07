"use client";

import React, { useEffect, useState } from "react";
import Card from "@/app/components/Card";

function Home() {
  const [urunler, setUrunler] = useState([]); //ürünler değişkeni tanımlanır
  useEffect(() => {
  servistetikleme(); //useeffectte async await çalışmadığı için bir fonksiyon tanımlanır ve useeffectte çağırılır
   
  }, []); //köşeli parantezin içi boşsa sadece sayfa ilk oluştuğunda çalışır,
  const servistetikleme = async () => {
    const urunlerfetch = await fetch("https://fakestoreapi.com/products"); //api tetikleyen fonksiyon, çıktı urunler değişkenine atanır
    setUrunler(await urunlerfetch.json()); //urunler stateine de urunlerfetch atılır
  };
  return (
    <div>
      Aksoy Mantı
      {urunler.length < 1 ? ( //urunler listesinin boş olup olmadığı kontrol edilip boşsa şu anda yükleniyor... divi gösterilir
        <div>şu anda yükleniyor...</div>
      ) : (
        urunler?.map((urun, index) => ( //ürünler listesinin içindeki tüm ürünleri ekrana yazdırmak için map döngüsü ile dönülür
          <Card // card componenti çağırılıp ürünün bilgisi props olarak geçilir
            key={index}
            img={urun?.image}
            price={urun?.price}
            title={urun?.title}
            category={urun?.category}
          />
        ))
      )}
    </div>
  );
}

export default Home;
