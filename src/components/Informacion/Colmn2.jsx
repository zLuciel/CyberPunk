"use client";
import { useRef } from "react";
import "./css/Column2.css";
import Image from "next/legacy/image";
import amiga from "@/assets/amiga.png";
import amiga2 from "@/assets/vr2.png";
import EtiquetaSvg from "../EtiquetSvg/EtiquetaSvg";
import { Carousel } from '@mantine/carousel';
import Autoplay from "embla-carousel-autoplay";

const Colmn2 = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <div className="container-col2 ">
      <h1 className="title-abs">Vr Coggles</h1>

      <div className="flex">
        <Carousel
         plugins={[autoplay.current]}
         onMouseEnter={autoplay.current.stop}
         onMouseLeave={autoplay.current.reset}
          slideSize="100%"
          align="center"
          loop
          slidesToScroll={1}
          mx="auto"
          withControls={false}
        >
          <Carousel.Slide className="flex-img-swiper">
            <div className="ContainerImg custom-cursor">
              <div className="img-absolute">
                <span>
                  <EtiquetaSvg texto="80-A45" size={16} />
                </span>
                <div className="linea"></div>
                <span>
                  <EtiquetaSvg texto="407" size={16} />
                </span>
              </div>

              <Image width={466} height={725} alt="nose" src={amiga} />
            </div>
          </Carousel.Slide>
          <Carousel.Slide className="flex-img-swiper">
            <div className="ContainerImg custom-cursor">
              <div className="img-absolute">
                <span>
                  <EtiquetaSvg texto="80-A45" size={16} />
                </span>
                <div className="linea"></div>
                <span>
                  <EtiquetaSvg texto="407" size={16} />
                </span>
              </div>

              <Image width={466} height={725} alt="nose" src={amiga2} />
            </div>
          </Carousel.Slide>
        </Carousel>


        <div className="ContainerFlex">
          <div className="flex-span-col2">
            <span>c.Future[1] </span>
            <span className="yellow">[ドセット]</span>
          </div>

          <div className="flex-skew">
            <span className="skew active"></span>
            <span className="skew desactive"></span>
            <span className="skew desactive"></span>
            <span className="skew desactive"></span>
            <span className="skew desactive"></span>
            <span className="skew desactive"></span>
            <span className="skew desactive"></span>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Colmn2;
