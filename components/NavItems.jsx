import Link from "next/link";
import React from "react";

const NavItems = ({ content, link = "", target }) => {
  return (
    <>
      <Link href={link} target={target}>
        <div className="overflow-hidden font-iskry text-[4.3vw] laptop:text-[1.5vw] cursor-pointer font-semibold  z-50 ">
          <div className="navcontent relative flex group ">
            <h4 className="navcontent">{content}</h4>
            <div className="h-[0.3vw] laptop:h-[0.15vw] w-0 group-hover:w-full duration-500 bg-[#7db6dc] absolute bottom-0 "></div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default NavItems;
