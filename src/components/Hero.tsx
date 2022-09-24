import cerritusCodersLogo from "../assets/images/cerritus-coders-logo.png";
import { FC, useState } from "react";
import cerrituscollage from "../assets/images/cerritus_collage.png";
import Image from "next/image";

export const Hero: FC = () => {
  return (
    <div className="bg-white p-4">
      <div className="bg-hero h-screen">
        {/* <div className="bg-black">
          {" "}
          <div className="divider lg:divider-horizontal"></div>
        </div> */}
        <div className="absolute ml-[250px] w-1.5 h-[150px] bg-line"></div>

        {/* <div className="border-l-4 border-indigo-500 h-screen"></div> */}
        {/* <h1 className="text-4xl font-bold text-center text-black">Cerritus Coders</h1> */}
        {/* <div className="flex flex-col justify-center"> */}
        <div className="p-10 flex">
          <Image src={cerrituscollage} height={430} width={558} />

          <div className="ml-[200px]">
            <Image src={cerritusCodersLogo} height={350} width={700} />
          </div>
        </div>
        {/* </div> */}
        <div className="max-w-3xl mx-auto text-3xl tracking-wide leading-relaxed font-satoshi text-center text-black justify-center mb-4">
          This community is run solely by students, for students, to encourage
          development, open-source, and help the community unlock their full
          potential, one step at a time.
        </div>
      </div>
    </div>
  );
};
