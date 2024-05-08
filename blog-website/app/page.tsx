import React from "react";
import Image from "next/image";
import Hero from "@/public/hero.avif"

export default function Home() {
  return (
    <div className="home flex flex-col h-full">
      <div className=" flex flex-col justify-center h-[50%]">
        <h1 className="text-2xl">Welcome to My Blog Website</h1>
        <p>This is where I write my journey</p>
      </div>
      <div className="flex justify-center flex-1 gap-5">
      {
        [1,2,3].map(()=>{
          return(

                <div className="flex-auto flex flex-col items-center">
                  <div className="rotate-90">
                    <Image src={Hero} alt="Hero image" width={200} ></Image>
                  </div>
                  <p>Title</p>
                </div>    
          )
      })
      }
      </div>
    </div>

  );
}
