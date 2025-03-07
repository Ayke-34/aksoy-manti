"use client";

import React, { useEffect, useState } from "react";
import Card from "@/app/components/Card";

function Home() {
  const [urunlerJson, setUrunlerJson] = useState([{}]);
  useEffect(() => {
    const urunler = servistetikleme();
    setUrunlerJson(urunler);
  }, [urunlerJson]); //köşeli parantezin içi boşsa sadece sayfa ilk oluştuğunda çalışır,
  const servistetikleme = async () => {
    const urunler = await fetch("https://fakestoreapi.com/products");
    return urunler.json();
  };
  return (
    <div>
      Aksoy Mantı
      {console.log (urunlerJson)}
      {urunlerJson?.map((urun, index) => (
        <Card
        key={index}
          img={urun?.image}
          price={urun?.price}
          title={urun?.title}
          category={urun?.category}
        />
      ))}
    </div>
  );
}

export default Home;
