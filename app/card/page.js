"use client";
import React, { useEffect, useState } from "react";

function page() {
  //js kodları function ile return arasına yani buraya yazılır,
  // eğer returnün içinde js kodu yazılmak istenirse süslü parantez açılarak yazılması mümkündür
  const [cardList, setCardList] = useState([]);
  useEffect(() => {
    cardServisTetikleme();
  }, []);
  const cardServisTetikleme = async () => {
    const cards = await fetch("https://fakestoreapi.com/carts");
    const cardJson = await cards.json(); //card değişkeni okunabilir değildir bunu okunabilir olan json formatına çevirdik
    setCardList(cardJson);
  };
  return (
    <div>
      {/*
      kartlar listesini listeleyen servis entegre edilip 
      bu servisin datası ekranda gösterilecektir 
      gösterilen data kart tasarımına uygun bir tasarımlşa gösterilmelidir */}
      {cardList.map((card) => (
        <div>
          
          <div className=" w-64 h-32 border bg-red-800 text-white flex flex-col justify-between">
            <div className=" flex justify-between ">
              <div>{card.userId}</div>
              <div>{card.id}</div>
            </div>
           <div className=" text-center ">
            {card.date}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default page;
