import React from "react";
import Image from "next/image";
import { TeamProps } from "./TeamProps";

export const TeamCard = ({ name, imagePath }: TeamProps) => {
  return (
    <div className="card w-60 bg-aboutSectionBg shadow-xl">
      <figure>
        <Image src={imagePath} alt="Shoes" width={300} height={300} className="rounded-xl" />
      </figure>
      <div className="items-center text-center text-black">
        <h2 className="font-bold p-5 text-commColor">{name}</h2>
      </div>
    </div>
  );
};
