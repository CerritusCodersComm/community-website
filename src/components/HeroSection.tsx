import cerritusCodersLogo from "../assets/images/cerritus-coders-logo.png";
import { FC, useState } from "react";
import cerrituscollage from "../assets/images/cerritus_collage.png";
import Image from "next/image";

export const HeroSection: FC = () => {
  return (
    <div className="bg-white p-4 md:w-screen">
      <div className="bg-hero h-screen">
        <div className="absolute ml-[250px] w-1.5 h-[150px] bg-line hidden md:block"></div>

        {/* <div className="border-l-4 border-indigo-500 h-screen"></div> */}
        {/* <h1 className="text-4xl font-bold text-center text-black">Cerritus Coders</h1> */}
        {/* <div className="flex flex-col justify-center"> */}
        <div className="p-10 flex justify-between">
          <div className="hidden md:block">
            <Image src={cerrituscollage} height={430} width={558} />
          </div>

          <div className="ml-0 md:ml-[200px] ">
            <Image src={cerritusCodersLogo} height={350} width={700} className="md:w-[700px] md:h-[350px]" />
          </div>
        </div>
        {/* </div> */}
        <div className="max-w-3xl mx-auto text-3xl tracking-wide leading-relaxed font-satoshi text-center text-black justify-center mb-4">
          This community is run solely by students, for students, to encourage development, open-source, and help the
          community unlock their full potential, one step at a time.
        </div>
      </div>
    </div>
  );
};
