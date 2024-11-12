"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const LoadingPage = () => {
  const tl1 = useRef();
  const tl2 = useRef();

  useGSAP(() => {
    var tl1 = gsap.timeline().to(".bar", {
      width: "100%",
      duration: 6.3,
      transformOrigin: "left",
    });

    var tl2 = gsap
      .timeline()
      .to(".a", {
        opacity: 0,
        duration: 0.7,
      })
      .to(".b", {
        opacity: 1,
        duration: 0.7,
      })
      .to(".b", {
        opacity: 0,
        duration: 0.7,
      })
      .to(".c", {
        opacity: 1,
        duration: 0.7,
      })
      .to(".c", {
        opacity: 0,
        duration: 0.7,
      })
      .to(".d", {
        opacity: 1,
        duration: 0.7,
      })
      .to(".d", {
        opacity: 0,
        delay: 0.2,
        duration: 0.7,
      })
      .to(".e", {
        opacity: 1,
        duration: 0.7,
      })

      .to(".loading", {
        transform: "translatey(-100%)",
        duration: 1,
        borderRadius: "100%",
        opacity: 0,
      });
  });
  return (
    <div
      className="loading h-screen w-full flex items-center justify-center absolute z-50 "
      style={{
        background: `radial-gradient(circle at 50% 50%, #2a2e36, #272a32, #24272d, #202329, #1d2024, #1a1c20, #17191c, #141518, #101114, #0b0c0e, #060608, #000000)`,
      }}
    >
      <div className="gap-[5vw] laptop:gap-[2vw] flex-col w-[60vw] lg:w-[40vw] relative flex text-white">
        <div className="flex items-center justify-center relative w-full">
          <h1 className="a absolute font-iskry text-[4vw] laptop:text-[2vw] ">
            Psychologist
          </h1>
          <h1 className="b absolute font-iskry text-[4vw] laptop:text-[2vw] opacity-0 ">
            Therapist
          </h1>
          <h1 className="c absolute font-iskry text-[4vw] laptop:text-[2vw] opacity-0 ">
            Consultant
          </h1>
          <h1 className="d absolute font-stratos text-[6vw] laptop:text-[3vw] opacity-0 ">
            Dr. Manpreet Kaur
          </h1>
          <h1 className="e absolute font-iskry text-[4vw] laptop:text-[2vw] opacity-0 ">
            Presents you
          </h1>
        </div>
        <div className="bar h-[0.2vw] w-0 bg-[#7db6dc] rounded-full "></div>
      </div>
    </div>
  );
};

export default LoadingPage;
