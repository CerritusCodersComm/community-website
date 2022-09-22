import Image from "next/image";
import { FC } from "react";
import AboutsectionImg from "../assets/images/AboutSectionImg.svg";

export const AboutSection: FC = () => {
  return (
    <div className="bg-white text-black p-4">
      <div className="bg-hero h-screen">
        <div className="pl-10 pt-4">
          <div className="text-5xl tracking-widest">About Us</div>
          <div className="flex">
            {/* <div className="w-[235px] h-10 broder-8 border-line border-b-2 border-x-0 rounded-full"></div> */}
            <div className="w-[235px] h-8 border-underLine border-b-6 border-x-0 rounded-smileUnderLine"></div>
          </div>
        </div>
        <div className="flex justify-between p-10">
          <div className="text-2xl tracking-wider font-normal">
            <div>
              <span className="text-commColor">Cerritus Coders</span> is a
              student-run community focusing on open-source, project-based
              learning. It aim to help folks to get opportunities by encouraging
              them to learn, build and share in public.
            </div>
            <br />
            <div>
              We encourage folks to get started with open-source and conduct
              multiple events around the same to
            </div>
          </div>
          <div>
            <Image src={AboutsectionImg} height={900} width={1800} />
          </div>
        </div>
      </div>
    </div>
  );
};
