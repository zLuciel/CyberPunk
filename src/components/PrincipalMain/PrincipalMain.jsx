//"use client"
//import  { useRef, useEffect } from 'react';

//import hoverEffect from 'hover-effect'

import Image from "next/legacy/image";
import Vr from "/public/vr2.jpg"

import Vr2 from "/public/vr1.jpg"


import Vr4 from "@/assets/diss.png"
import Robot from "public/robot.jpg"
import "./css/PrincipalMain.css"

const PrincipalMain = () => {


  
  /*useEffect(() => {
      const Efectohover = async ()=>{
         const Effect = new hoverEffect({
        parent: document.querySelector('.img-1-main'),
        intensity: 0.2, // ajusta los valores según tus necesidades
        image1: "/vr1.jpg", // ruta a la primera imagen
        image2: "/vr2.jpg" , // ruta a la segunda imagen
        displacementImage: "/diss.png",
       imagesRatio: 1080 / 1920,
      });
      }
      Efectohover()
  }, []);*/

  
  return (
    <div className=" grid-main">
      <div className="title-main">
      <h1>Vr Coggles</h1>
      </div>

      <div className="text-info-main">
        <h3>
          IN AN INDUSTRY WHERE SEEMINGLY <p>EVERYTHING HAS</p> ALREADY BEEN SAID
          <span className="chine">ドセット</span>  <br /> SEEKS TO COMMENT MORE THAN STATE.
        </h3>
      </div>

      <div className="img-1-main" >
      {<Image
       width={689}
       height={408}
       objectFit="cover"
       alt='imagenrv'
       src={Vr2}
  />}
      </div>

      <div className="img-2-main">
      <Image
       width={438}
       height={658}
       objectFit="cover"
       alt='imagenrv'
       src={Vr}
      />
      </div>
    </div>
  );
};

export default PrincipalMain;
