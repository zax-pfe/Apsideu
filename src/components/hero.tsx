"use client";
import "../styles/hero.css";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { IoIosMenu } from "react-icons/io";

import { useState, useEffect } from "react";

interface HeroPorps {
  imgData: StaticImageData;
}

export default function Hero(props: HeroPorps) {
  return (
    <div className="hero-container">
      <Image src={props.imgData} alt="background" fill={true}></Image>
      <div className="hero-content">
        <div className="header">
          <div className="header-content">
            <div className="item">professional photographer</div>
            <div className="bar" />
            <div className="item"> based in brussels</div>
          </div>
          <div className="header-menu">
            <IoIosMenu size={35} />
          </div>
        </div>
        <div className="footer">MAXIME DESPIAU</div>
      </div>
    </div>
  );
}
