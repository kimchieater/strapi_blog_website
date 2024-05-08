import React from "react";
import Image from "next/image";
import Hero from "@/public/hero.avif";
import MainHero from "@/public/main-hero.png";

export default function Home() {
  return (

    <div className="home flex flex-col">

      {/* Hero section  */}
      <div className="mt-10 p-10 flex justify-center items-center bg-stone-600 rounded-xl h-[400px] bg-no-repeat bg-right-top shadow-stone-300/30 shadow-lg" style={{backgroundImage : `url( ${MainHero.src})`}}>
        <div className="flex flex-col">
          <h4 className="text-2xl tracking-wide">Welcome to My Blog Website</h4>
          <p className="tracking-tight">This is where I write my journey</p>
          <h1 className="text-[3.5rem] home-title">JasonCodes</h1>
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
                    <Image src={Hero} alt="Hero image" width={200} className="rounded-xl shadow-stone-300/30 shadow-lg"></Image>
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
