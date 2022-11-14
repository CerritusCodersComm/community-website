import Image from "next/image";
import { FC } from "react";
import AboutsectionImg from "../assets/images/AboutSectionImg.svg";

export const AboutSection: FC = () => {
  return (
    <div className="bg-white text-black p-4 pt-0">
      <div className="bg-aboutSectionBg h-3/4 pb-[100px] font-satoshi">
        <div className="pl-10 pt-4">
          <div className="text-5xl font-bold tracking-widest text-center md:text-left">About Us</div>
          <div className="w-[235px] h-6 border-underLine border-b-6 rounded-smileUnderLine items-center hidden md:block"></div>
        </div>
        <div className="flex justify-between p-10">
          <div className="text-2xl tracking-wider font-normal pt-10">
            <div>
              <span className="text-primary font-bold">Cerritus Coders</span>{" "}
              is a student-run community focusing on open-source, project-based
              learning. It aims to help folks to get opportunities by
              encouraging them to learn, build and share in public.
            </div>
            <br />
            <div>
              We encourage folks to get started with open-source and conduct multiple events around the same. We are a
              community of more than 350+ members and growing every day.
            </div>
          </div>
          <div className="hidden md:block">
            <Image src={AboutsectionImg} height={900} width={1800} />
          </div>
        </div>
      </div>
    </div>
  );
};
