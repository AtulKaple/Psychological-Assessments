"use client";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {
  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 769px)",
        isMobile: "(max-width: 768px)",
      },
      (context) => {
        let { isDesktop, isMobile } = context.conditions;

        let t4 = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".thirdPage",
              start: isDesktop ? "top 30%" : "top 50%",
              scrub: 1,
              end: isDesktop ? "50% 40%" : "50% 50%",
              delay: "-1",
            },
          })
          .from(".outerdiv", {
            scale: 4,
            duration: 2,
          })
          .from(".profilephoto", {
            opacity: 0,
            y: 400,
          })
          .from(
            ".name",
            {
              opacity: 0,
              delay: "-0.1",
              y: 400,
            },
            "info"
          )
          .from(
            ".docinfo",
            {
              opacity: 0,
            },
            "info"
          )
          .from(".book", {
            opacity: 0,
          });
      }
    );
  });
  return (
    <div className="thirdPage h-[100vh] w-full  flex items-center justify-center relative overflow-hidden ">
      <div className="outerdiv h-[80%] laptop:h-[70%] w-[80%] border rounded-[2vw] absolute  "></div>
      <div className="innerdiv h-[80%] laptop:h-[70%] w-[80%]  rounded-3xl z-50 px-[2vw] flex flex-col laptop:flex-row overflow-hidden ">
        <div className="left h-[45%] laptop:h-full w-[100%] relative  gap-[8vw] flex items-center justify-center  ">
          <Image
            src="/profilePhoto.png"
            width={350}
            height={350}
            className="profilephoto absolute scale-[0.8]  tablet:top-[-4%] laptop:top-[-5%]  h-[60vw] w-[46vw] tablet:h-[45.2vw] tablet:w-[34.5vw] laptop:h-[30.2vw] laptop:w-[23.5vw] rounded-full "
          />
          <h3 className="name absolute text-[5vw] laptop:text-[2vw] font-stratos bottom-[1.5vw] text-center underline underline-offset-8 ">
            Dr. Manpreet
          </h3>
        </div>
        <div className="w-[100%] laptop:w-[160%] h-[55%] laptop:h-full right flex flex-col items-center justify-center px-[2vw] py-[15vw] laptop:py-0 gap-[7vw] tablet:gap-[4vw] laptop:gap-[2vw] ">
          <p className="docinfo w-full text-[4vw] tablet:text-[3.5vw] laptop:text-[1.8vw] font-rules text-center ">
            For further clinical evaluation and research, the APA is offering a
            number of “emerging measures” in Section III of DSM-5-TR. These
            patient assessment measures were developed to be administered at the
            initial patient interview and to monitor treatment progress...
          </p>
          <div className="book">
            <Button
              content="Book a Psychological Appointment"
              addClass={"p-[1vw] text-[4vw] laptop:text-[2vw] text-black  "}
            />
          </div>
          {/* <button className=' p-[1vw] rounded-[2vw] border text-[2vw] font-iskry ' >Book a Psychological Appointment</button> */}
        </div>
      </div>
    </div>
  );
};

export default Page3;
