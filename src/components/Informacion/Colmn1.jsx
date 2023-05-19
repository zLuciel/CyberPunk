import React from "react";
import "./css/Column1.css";

const Colmn1 = () => {
  return (
    <div className="container-col1">
      <div className="video-youtube">
        <video src="/videos.mp4" controls  poster="/videoImg.jpg"  ></video>
      </div>

      <h2>Vr Coggles</h2>

      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
    </div>
  );
};

export default Colmn1;
