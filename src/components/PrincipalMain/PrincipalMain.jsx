"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import hoverEffect from 'hover-effect'
import { Power3 } from "gsap/dist/gsap";
import Image from "next/legacy/image";
import svgAr from "/public/AR.svg"
import Vr from "/public/vr2.jpg";

import Vr2 from "/public/vr1.jpg";

import Vr4 from "@/assets/diss.png";
import Robot from "public/robot.jpg";
import "./css/PrincipalMain.css";
import EtiquetaSvg from "../EtiquetSvg/EtiquetaSvg";
import Marquees from "../marquee/Marquee";

const PrincipalMain = () => {
  const imgRef = useRef(null);
  const imgRef2 = useRef(null);
  const imgRef3 = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    // Animación con GSAP
    const animation = gsap.from(imgRef.current, {
      opacity: 0,
      duration: 1.8,
      y: 250,
      ease: Power3.easeOut,
      delay: 0.2,
      onComplete: () => {
        // Eliminar estilos en línea
        imgRef.current.removeAttribute("style");
      },
    });
  
    gsap.from(imgRef2.current, {
      opacity: 0,
      duration: 1.8,
      y: 250,
      ease: Power3.easeOut,
      delay: 0.8,
    });
    gsap.from(titleRef.current, {
      opacity: 0,
      duration: 1.8,
      x: -250,
      ease: Power3.easeOut,
    });
    gsap.from(descriptionRef.current, {
      opacity: 0,
      duration: 1.8,
      x: -250,
      ease: Power3.easeOut,
      delay: 0.2,
    });
  
   /* return () => {
      animation.kill();
    };*/
  }, []);
  

  useEffect(() => {
         const effect = new hoverEffect({
        parent: imgRef2.current,
        intensity: 0.3, // ajusta los valores según tus necesidades
        image1: "/vr2.jpg", // ruta a la primera imagen
        image2: "/disparo.jfif" , // ruta a la segunda imagen
        displacementImage: "/diss.png",
        imagesRatio: 658/438,
      });
      const effect2 = new hoverEffect({
        parent: imgRef.current,
        intensity: 0.3, // ajusta los valores según tus necesidades
        image1: "/vr1.jpg", // ruta a la primera imagen
        image2: "/cascovr.jfif" , // ruta a la segunda imagen
        displacementImage: "/diss.png",
        imagesRatio: 408/689,
        
      });
    return () => {
    effect.remove();
    effect2.remove();
  };

  }, []);


  
  return (
    <div className=" grid-main">
      <Marquees/>
      <div className="title-main" ref={titleRef}>
        <h1>Vr Coggles</h1>
      </div>

      <div className="text-info-main" ref={descriptionRef}>
        <h2>
          IN AN INDUSTRY WHERE SEEMINGLY <p>EVERYTHING HAS</p> ALREADY BEEN SAID
          <span className="chine">ドセット</span> <br /> SEEKS TO COMMENT MORE
          THAN STATE.
        </h2>
        <div className="circle">
         <Image
         alt="AR"
         width={100}
         height={100}
         src={svgAr}
         />
        </div>
      </div>

      <div className="img-1-main glitch" ref={imgRef} >
      <div className="etiqueta"><EtiquetaSvg  texto="407" size={18} /></div>
        
          <Image
          ref={imgRef3}
          className="glitch-image no-animation"
            width={689}
            height={408}
            alt="imagenrv"
            src={Vr2} 
          />
      </div>

      <div className="img-2-main" ref={imgRef2}>
      <div className="etiqueta2"><EtiquetaSvg  texto="80-A45" size={15} /></div>
        {/*<Image
          width={438}
          height={658}
          alt="imagenrv"
          layout="responsive"
          src={Vr}
        />*/}
      </div>
    </div>
  );
};

export default PrincipalMain;
