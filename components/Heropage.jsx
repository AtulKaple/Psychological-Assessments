"use client";
import React from "react";
import Brain from "@/components/Brain/Brain";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Heropage = () => {
  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 1024px)",
        isMobile: "(max-width: 1023px)",
      },
      (context) => {
        let { isDesktop, isMobile } = context.conditions;

        let tl = gsap
          .timeline()
          .from(
            ".brain",
            {
              opacity: 0,
              duration: 2,
              y: "100%",
            },
            "start"
          )
          .from(
            ".navbar",
            {
              width: 0,
              duration: 2,
              delay: 0.1,
            },
            "start"
          )
          .to(
            ".brain",
            {
              duration: 2,
              right: isDesktop ? "-5vw" : 0,
            },
            "brain"
          )
          .from(
            ".navcontent",
            {
              duration: 1,
              y: 100,
              stagger: 0.1,
            },
            "brain"
          )

          .from(
            ".talk",
            {
              opacity: 0,
              duration: 1,
              y: 100,
              stagger: 0.1,
            },
            "brain"
          );

        let tll = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".headone",
              start: isDesktop ? "top 45%" : "top 30%",
              scrub: 1,
              end: "bottom 10%",
            },
          })
          .to(
            ".headone",
            {
              width: "0px",
              opacity: 0,
            },
            "head"
          )
          .to(
            ".divone",
            {
              width: isDesktop ? "80vw" : "100vw",
            },
            "head"
          )
          .to(
            ".headtwo",
            {
              width: "0px",
              opacity: 0,
            },
            "head"
          )
          .to(
            ".divtwo",
            {
              width: "200vw",
            },
            "head"
          );
      }
    );
  });
  return (
    <div className="heropage flex items-center justify-center relative h-[88vh] w-full overflow-hidden mt-[8vh] laptop:mt-[12vh]  ">
      <div className="brain h-[60vh] w-full laptop:h-full laptop:w-[50%] absolute bottom-[-10vw] laptop:bottom-auto  opacity-90   ">
        <Brain />
      </div>
      <div className=" flex flex-col absolute top-[20vw] laptop:top-auto  w-[100%] gap-[5vw] laptop:gap-[2vw]  px-[5vw]  ">
        <div className="overflow-hidden">
          <h2
            className="talk font-stratos text-[10vw] leading-[9vw] laptop:text-[6vw] laptop:leading-[7vw] text-transparent  "
            style={{
              WebkitTextStroke: "1.2px #7db6dc",
            }}
          >
            # TalkToMissMp's
          </h2>
        </div>
        <div className="overflow-hidden">
          <h2 className="talk font-iskry text-[6vw] laptop:text-[3vw] text-white">
            Digital tool for,
          </h2>
        </div>
        <div className="overflow-hidden  w-full laptop:w-[68vw] peer/abc ">
          <div className=" talk flex items-center">
            <h1 className="headone  w-[92%] laptop:w-full overflow-hidden font-stratos text-[9vw] leading-[9vw] laptop:text-[7vw] laptop:leading-[7vw] uppercase   text-[#7db6dc] hover:text-white   ">
              Psychological
            </h1>
            <div className="divone h-[0.5vw] w-[7vw] laptop:w-[5vw] bg-[#7db6dc] "></div>
          </div>
        </div>
        <div className="overflow-hidden peer-hover/abc:text-[#7db6dc] w-full laptop:w-[68vw] ">
          <div className="talk flex items-center">
            {" "}
            <div className="divtwo h-[0.5vw] w-[18vw] laptop:w-[15vw] bg-white  "></div>
            <h1 className="headtwo w-[90%] laptop:w-[100%] overflow-hidden font-stratos text-white text-[9vw] leading-[9vw] laptop:text-[7vw] laptop:leading-[7vw] uppercase text-left   ">
              Assessments
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heropage;
