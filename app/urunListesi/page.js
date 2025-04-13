"use client";
import React, { useEffect, useState } from "react";

export default function page() {
  useEffect(() => {
    urunlerFonksiyonu();
  }, []);
  const [fiyat, setFiyat] = useState(0);

  const [urunlerkatalogu, setUrunlerkatalogu] = useState([]);
  const urunlerFonksiyonu = async () => {
    const urunlerListesi = await fetch("https://fakestoreapi.com/products");
    const urunlerjson = await urunlerListesi.json();
    console.log(urunlerjson);
    setUrunlerkatalogu(urunlerjson);
  };

  return (
    <div>
      elbise
      {urunlerkatalogu.map((urunler) => (
        <div>
          {urunler.title}
          <button
            onClick={() => {
              setFiyat(urunler.price);
            }}
            className="w-20 h-20 bg-red-300"
          >
            {" "}
            {urunler.price}
          </button>
        </div>
      ))}
    </div>
  );
}
