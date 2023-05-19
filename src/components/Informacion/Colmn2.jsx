"use client";

import "./css/Column2.css";
import { useState,useRef,useEffect} from "react";
import Image from "next/legacy/image";
import EtiquetaSvg from "../EtiquetSvg/EtiquetaSvg";
import { Carousel } from "@mantine/carousel";
import Data from "./data.js"; 
import { gsap } from "gsap";

const Colmn2 = () => {

  const cursorRef = useRef(null);
  const [mouseX,setMouseX] = useState(0)
  const [mouseY,setMouseY] = useState(0)

  useEffect(() => {
    const updateCursor = () => {
      gsap.set(cursorRef.current, {
        left: mouseX,
        top: mouseY,
      });
    };

    const animation = gsap.to({}, {
      repeat: -1,
      onRepeat: updateCursor,
      duration: 0.016,
    });

    return () => {
      animation.kill();
    };
  }, [mouseX, mouseY]);
  
  const handleMouseEnter = (e) => {
    cursorRef.current.style.display = 'block';
    setMouseX(e.clientX)
    setMouseY(e.clientY)
    if (e.target.closest('.ContainerImg')) {
      // Mostrar el cursorRef
      cursorRef.current.style.display = 'block';
    } else {
      // Ocultar el cursorRef
      cursorRef.current.style.display = 'none';
    }
  };

  const handleMouseLeave = () => {
    cursorRef.current.style.display = 'none';
  };

  return (
    <div className="container-col2 ">
      <h1 className="title-abs">Vr Coggles</h1>

      <div className="flex" >

        <div
         ref={cursorRef}
          className="custom-cursor"
        ></div>

        <Carousel
          className="Container-carusel"
          //onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseEnter}
          slideSize="100%"
          slideGap="xl"
          //maw={600}
          align="center"
          loop
          slidesToScroll={1}
          withControls={false}
          withIndicators
        >
          {Data.map((product, i) => (
            <Carousel.Slide key={i} className="flex-img-swiper">
              <div className="ContainerImg">
                <div className="img-absolute">
                  <span>
                    <EtiquetaSvg texto={product.serie} size={16} />
                  </span>
                  <div className="linea"></div>
                  <span>
                    <EtiquetaSvg texto={product.number} size={16} />
                  </span>
                </div>

                <Image width={466} height={725} alt="nose" src={product.image} />
              </div>
            </Carousel.Slide>
          ))}

        </Carousel>

      { <div className="ContainerFlex">
          <div className="flex-span-col2">
            <span>c.Future[1] </span>
            <span className="yellow">[ドセット]</span>
          </div>

          </div>}
        
      </div>
    </div>
  );
};

export default Colmn2;
