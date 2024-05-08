import React from "react";
import Image from "next/image";
import Hero from "@/public/hero.avif";
import HeroPic from "@/public/main-hero.png";

export default function Home() {
  return (

    <div className="home flex flex-col leading-5">

      {/* Hero section  */}
      <div className="mt-10 p-10 flex justify-center bg-stone-600 rounded-xl h-[400px]">
        <div className="flex flex-col justify-center ">
          <h1 className="text-2xl tracking-wide">Welcome to My Blog Website</h1>
          <p className="tracking-tight">This is where I write my journey</p>
        </div>
        
      </div>

      {/* Hero ends  */}


      {/* Map for my posts  */}

      <div className="flex justify-center flex-1 gap-5">
      {
        // mapping for posts 
        [1,2,3].map((a, i)=>{
          return(

                <div key={i} className="flex-auto flex flex-col items-center">
                  <div className="rotate-90">
                    <Image src={Hero} alt="Hero image" width={200} className="rounded-xl shadow-indigo-200/30 shadow-md"></Image>
                  </div>
                  {/* takes the elements */}
                  <p>{`title ${a}`}</p>
                </div>    
          )
      })
      }
      </div>
    </div>

  );
}
