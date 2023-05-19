"use client";
import { useRef} from "react";
import "./css/Column2.css";
import Image from "next/legacy/image";
import EtiquetaSvg from "../EtiquetSvg/EtiquetaSvg";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import Data from "./data.js";
const Colmn2 = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));


  return (
    <div className="container-col2 ">
      <h1 className="title-abs">Vr Coggles</h1>

      <div className="flex">
        <Carousel
        className="Container-carusel"
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          slideSize="100%"
          slideGap="xl"
          align="center"
          loop
          slidesToScroll={1}
          
          withControls={false}
          withIndicators
        >
          {Data.map((product, i) => (
            <Carousel.Slide key={i} className="flex-img-swiper">
              <div className="ContainerImg custom-cursor">
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
