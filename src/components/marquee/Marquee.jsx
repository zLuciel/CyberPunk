import React from "react";
import Marquee from "react-fast-marquee";
import "./css/Marquee.css";
const Marquees = () => {
  return (
    <div className="absolute-mar">
      <Marquee className="MarqueContainer">
        <span className="title-marquee">
          <span className="span-resalt">ドセット</span>やコントローラー、
        </span>
        <span className="title-marquee">
          <span className="span-resalt">ドセット</span>やコントローラー、
        </span>
        <span className="title-marquee">
          <span className="span-resalt">ドセット</span>やコントローラー、
        </span>
        <span className="title-marquee">
          <span className="span-resalt">ドセット</span>やコントローラー、
        </span>
        <span className="title-marquee">
          <span className="span-resalt">ドセット</span>やコントローラー、
        </span>
      </Marquee>
    </div>
  );
};

export default Marquees;
