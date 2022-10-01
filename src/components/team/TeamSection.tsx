import React, { FC } from "react";
import { TeamProps } from "./TeamProps";
import { FaCalendarAlt, FaLaptopCode } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { team } from "./team";
import { TeamCard } from "./TeamCard";

export const TeamSection: FC = () => {
  return (
    <div className="bg-white p-4 ">
      <div className="bg-[#F1F6F0] text-black font-satoshi ">
        <div className="pl-4">
          <div className="text-5xl font-bold tracking-widest pl-8 pt-4">Meet Our Team</div>
          <div className="w-[320px] h-8 border-underLine border-b-6 rounded-smileUnderLine ml-12 "></div>
        </div>
        <div className="text-[20px] tracking-wide leading-relaxed text-center text-[#7D7D7D] px-20 py-10">
          <div className="flex flex-wrap justify-center gap-20">
            {team.map((props, idx) => (
              <TeamCard {...props} key={idx} idx={props.idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
