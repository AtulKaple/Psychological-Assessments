"use client";
import Image from "next/image";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {
  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 769px)",
        isMobile: "(max-width: 768px)",
      },
      (context) => {
        let { isDesktop, isMobile } = context.conditions;

        let t3 = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".secondPage",
              start: "top 45%",
              scrub: 1,
              end: "50% 50%",
            },
          })
          .from(".spans", {
            opacity: 0,
            y: 400,
            stagger: 0.5,
          })
          .from(".APAlogo", {
            opacity: 0,
            y: 400,
          });
      }
    );
  });
  return (
    <div className="secondPage h-[100vh] w-full flex items-center justify-center text-[6vw] leading-[10vw] laptop:text-[3vw] laptop:leading-[4vw] font-rules text-center   ">
      <div className="flex flex-col items-center justify-center gap-[6vw] laptop:gap-[2vw] text-white ">
        <h3 className="">
          <span className="spans overflow-hidden">
            Developed using one of the most
          </span>{" "}
          <br />{" "}
          <span className="spans overflow-hidden">
            {" "}
            <span className="font-iskry text-[7vw] laptop:text-[4vw] text-[#7db6dc]">
              trusted&nbsp;
            </span>{" "}
            and{" "}
            <span className="font-iskry text-[7vw] laptop:text-[4vw] text-[#7db6dc]">
              &nbsp;authentic
            </span>
          </span>{" "}
          <br />
          <span className="spans overflow-hidden">
            {" "}
            public repositories from APA’s
          </span>{" "}
          <br />
          <span className="spans overflow-hidden font-iskry text-[7vw] laptop:text-[4vw] text-[#7db6dc] underline underline-offset-8 underline-5 ">
            {" "}
            DSM-5-TR Online Assessment Measures
          </span>{" "}
          .
        </h3>
        <Image
          src="/APA-logo.svg"
          width={200}
          height={200}
          className="  APAlogo bg-white p-[1.5vw] rounded-full "
        />
      </div>
    </div>
  );
};

export default Page2;
