import React from "react";
import NavItems from "./NavItems";

const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  return (
    <>
      <div className="h-[100vh] w-full flex absolute justify-center z-50 ">
        <div
          className={`navbar flex items-center h-[8vh] laptop:h-[12vh] w-[95%] border-b ${
            menuIsOpen ? "border-black" : "border-white"
          }   px-[2vw] justify-between z-50`}
        >
          <div
            onClick={() => window.location.reload()}
            className={`${menuIsOpen ? "text-black" : "text-white]"}`}
          >
            <NavItems
              content={"Powered By Sidelabs"}
              link="/"
              target={"_self"}
            />
          </div>
          <div className="hidden laptop:flex gap-[2vw]">
            <NavItems
              content={"About Dr. Manpreet"}
              link="https://www.linkedin.com/in/withlovemissmp/"
              target={"_blank"}
            />
            <NavItems content={"Assessments"} link="#forthPage" />
            <NavItems
              content={"Care Platform"}
              link="https://care.talktomissmp.com/"
              target={"_blank"}
            />
          </div>
          <div
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            className="h-full flex laptop:hidden items-center z-50 overflow-hidden "
          >
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="navcontent"
            >
              <path
                d="M5 8H13.75M5 12H19M10.25 16L19 16"
                stroke={menuIsOpen ? "#000" : "#ffff"}
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div
          className={`h-[100vh]  absolute  ${
            menuIsOpen ? "-top-[0%]" : "-top-[100%]"
          } ${
            menuIsOpen
              ? "rounded-br-0 rounded-bl-0"
              : "rounded-br-full rounded-bl-full"
          }   w-full bg-white flex items-center justify-center  text-black duration-500 transition-all ease-linear `}
        >
          <div className="flex flex-col items-center justify-center laptop:hidden gap-[4vw]">
            <NavItems content={"About Dr. Manpreet"} />
            <NavItems content={"Assessments"} />
            <NavItems content={"Care Platform"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
