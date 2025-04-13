"use client";
import React, { useEffect, useState } from "react";

function page() {
  const [adet, setAdet] = useState(0); // değişken tanımladık
  const [userS, setUserS] = useState([]); // değişken tanımladık
  useEffect(() => {
    adet > 0 && userList(); //adet değiştiyse ve adet 0dan büyükse userList fonk tetikle 
  }, [adet]); //yazdığımız useeffectin ne zaman çalışıcağını belirledik

  const userList = async () => {
    const data = await fetch("https://fakestoreapi.com/users"); //users apı tetikle cevabını beklemesi için await ekledik
    const datajson = await data.json();  //elde ettiğimiz datayı json formatına çevirdik cevabını beklemesi için await ekledik
    setUserS(datajson); //elde ettiğimiz datayı her yerde kullanabilmek için users değişkenine attık
    console.log(userS); //bu adımı sadece ekranda kontrol için yazdık
  };

  return (
    <div className=" flex flex-col justify-center items-center">
      sepet sayfası
      <div className=" flex justify-center items-center w-20 h-20 bg-red-400">
        sepet
        <br></br>
        {adet}
      </div>
      <div className=" flex mt-8 gap-7">
        <button
          onClick={() => {
            adet > 0 && setAdet(adet - 1); //adet 0dan bğyükse adeti 1 eksilt .sepet 0dan küçük olamadığı için 0dan büyük kontrol yaptık
          }}
          className=" w-8 h-8 bg-slate-400"
        ></button>
        {adet /* iki buton arasına adet yzdırdık*/} 
        <button
          onClick={() => {
            setAdet(adet + 1); //butona basınca 1 arttırdık
          }}
          className=" w-8 h-8 bg-slate-400"
        ></button>
      </div>
      <div>
        kullanıcı listesini
        <div>
          { //veriyi ekrana yazdırmak için map döngüsü eklendi, veri eğer boşsa kpntrol yapılıp loading ekrana yazdırıldı. verinin boş olması uzunluğundan anlaşıldı
          userS.length < 1 ? (
    
            <div>Loading...</div>
          ) : (
            userS.map((user) => (
              <div>
                {user.email},{user.password}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default page;
