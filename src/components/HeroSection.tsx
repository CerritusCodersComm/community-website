import cerritusCodersLogo from "../assets/images/cerritus-coders-logo.png";
import {FC} from "react";
import cerrituscollage from "../assets/images/cerritus_collage.png";
import Image from "next/image";

export const HeroSection: FC = () => {
    return (
        <div className="bg-white md:px-4 py-4">
            <div className="bg-hero md:h-screen">
                <div className="absolute ml-[250px] w-1.5 h-[150px] bg-line hidden md:block"></div>

                <div className="p-5 md:p-10 flex justify-between">
                    <div className="hidden md:block">
                        <Image src={cerrituscollage} height={430} width={558}/>
                    </div>

                    <div className="md:m-0 mx-auto">
                        <Image src={cerritusCodersLogo} alt="Cerritus Coders Logo" height={350} width={700}/>
                    </div>
                </div>
                {/* </div> */}
                <p className="max-w-4xl  md:p-0 mx-auto md:px-0 text-xl md:text-4xl tracking-tight md:tracking-widest leading-relaxed
                font-satoshi text-black text-center justify-center pb-4 md:pb-0">
                    This community is run solely by students, for students, to encourage development, open-source, and
                    help the community unlock their full potential, one step at a time.
                </p>
            </div>
        </div>
    );
};
