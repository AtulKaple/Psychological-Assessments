import Image from "next/image";
import React from "react";

const SearchBar = () => {
  return (
    <div className="searchbar h-[7.5vw] w-[7.5vw] laptop:h-[4vw] laptop:w-[4.1vw] border rounded-full relative flex items-center  ">
      <input
        type="text"
        className="w-full h-full bg-transparent rounded-full p-[3vw] laptop:p-[2vw] outline-none font-rules text-[3vw] laptop:text-[1.25vw] text-[#7db6dc] "
        placeholder="Search assessments"
      />
      <div className="search h-[6.4vw] w-[6.4vw] laptop:h-[3.2vw] laptop:w-[3.2vw] absolute rounded-full right-[0.4vw] bg-white flex items-center justify-center ">
        <Image
          src="/search.png"
          alt="img"
          height={24}
          width={24}
          className=" h-[60%] w-[60%] "
        />
      </div>
    </div>
  );
};

export default SearchBar;
