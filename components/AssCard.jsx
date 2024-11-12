import React from "react";
import Button from "./Button";
import Image from "next/image";

const AssCard = ({ src }) => {
  return (
    <div
      className="relative flex flex-col items-center justify-center h-[50vw] w-[80vw] laptop:h-[25vw] laptop:w-[20vw]  rounded-[2vw] p-[2vw] gap-[2vw] laptop:p-[1vw] laptop:gap-[1vw] hover:scale-[1.03] duration-300  "
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.13)",

        boxShadow: "rgba(255, 255, 255, 0.25) 1.95px 1.95px 4.6px",
      }}
    >
      <div
        className=" h-[30%] w-full rounded-[1.5vw] flex justify-center text-[4.4vw] laptop:text-[2.2vw] font-iskry font-semibold mt- "
        style={{ backgroundColor: "rgba(255, 255, 255, 0.13)" }}
      >
        <h4 className="mt-[0.4vw]">Assessment 1</h4>
      </div>
      <div className="circle absolute h-[16vw] w-[16vw] laptop:h-[8vw] laptop:w-[8vw] rounded-full top-[16%] flex items-center justify-center  ">
        <div className="innerCircle h-[13vw] w-[13vw]  laptop:h-[6.5vw] laptop:w-[6.5vw] rounded-full bg-black flex items-center justify-center  ">
          <Image
            src={src}
            alt="img"
            height={64}
            width={64}
            className=" h-[60%] w-[60%] "
          />
        </div>
      </div>
      <div
        className=" h-[70%] w-full rounded-[1.5vw] flex flex-col gap-[1vw] px-[5vw] laptop:px-[1vw]  "
        style={{ backgroundColor: "rgba(255, 255, 255, 0.13)" }}
      >
        <div className=" mt-[12.5%] laptop:mt-[20%] ">
          <p className="text-center font-rules text-[3vw] laptop:text-[1.26vw] ">
            We can write any short info about the assessment here. Lorem ipsum
            dolor sit amet.
          </p>
        </div>
        <div className="flex justify-between px-[8vw] laptop:px-0 ">
          <Button
            content="Take Test"
            addClass={
              "p-[0.5vw] text-[3vw] laptop:text-[1vw] text-black w-[17vw] laptop:w-[7vw] "
            }
          />
          <Button
            content="Learn More"
            addClass={
              "p-[0.5vw] text-[3vw] laptop:text-[1vw] text-[#7db6dc] w-[20vw] laptop:w-[8vw] bg-transparent border border-[#7db6dc] hover:bg-slate-700 "
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AssCard;
