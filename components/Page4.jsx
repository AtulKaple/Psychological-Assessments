"use client";
import React from "react";
import AssCard from "./AssCard";
import SearchBar from "./SearchBar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Page4 = () => {
  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 1025px)",
        isMobile: "(max-width: 1024px)",
      },
      (context) => {
        let { isDesktop, isMobile } = context.conditions;

        let t5 = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".forthPage",
              start: "top 40%",
              scrub: 1,
              end: "50% 50%",
              delay: "-1",
            },
          })
          .from(".assessment", {
            y: 200,
          })
          .from(".searchbar", {
            opacity: 0,
            y: "-100",
          })
          .to(".searchbar", {
            width: isDesktop ? "30vw" : "60vw",
          })
          .from(".card", {
            scale: 0,
            stagger: 0.5,
          });
      }
    );
  });
  return (
    <div
      id="forthPage"
      className="forthPage relative h-[101vh] tablet:h-[150vh] laptop:h-screen w-full flex flex-col items-center justify-center gap-[5vw] laptop:gap-[3vw] "
    >
      <div className="overflow-hidden z-50   ">
        <h3 className="assessment font-stratos text-[10vw] leading-[10vw] laptop:text-[6vw] laptop:leading-[6vw] ">
          ASSESSMENTS
        </h3>
      </div>

      <div>
        <SearchBar />
      </div>
      <div className="w-full flex flex-col laptop:flex-row justify-between laptop:justify-between gap-[5vw] px-[10vw] ">
        <div className="card flex items-center justify-center">
          <AssCard src={"/img1.png"} />
        </div>
        <div className="card flex items-center justify-center">
          <AssCard src={"/img2.png"} />
        </div>
        <div className="card flex items-center justify-center">
          {" "}
          <AssCard src={"/img3.png"} />
        </div>
      </div>
    </div>
  );
};

export default Page4;
