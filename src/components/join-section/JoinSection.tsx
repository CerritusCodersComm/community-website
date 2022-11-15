import React, {FC} from "react";
import Button from "../common/button";
import {joinSocials} from "./join-socials";

function Icon(props: { className: string }) {
    return null;
}

export const JoinSection: FC = () => {
    return (
        <div className="bg-white md:px-4 py-4" id="join">
            <div className="h-3/4">
                <div
                    className="max-w-3xl mx-auto text-xl sm:text-2xl md:text-4xl tracking-wide leading-relaxed font-satoshi font-bold text-center text-black justify-center">
                    Join Our Community
                </div>
                <div
                    className="mx-auto text-center font-satoshi justify-center mb-4">
                    <p className="md:text-[20px] text-[#7D7D7D] leading-relaxed p-2">
                    Join the community run solely by students, for students, focused on development, open source, and
                    much more.</p>
                    <div className="hidden md:block">
                        <div className="justify-center flex text-[20px] flex-col items-center mt-8">
                            <div className="grid grid-cols-4">
                                {
                                    joinSocials.map((item, idx) => (
                                        <div key={idx}>
                                            <Button
                                                icon={item.Icon}
                                                className="text-primary mb-2"
                                                variant="join"
                                                iconSize={40}
                                                onClick={() => {
                                                    window.open(item.url, "_blank");
                                                }}
                                            />
                                            <p className="text-primary font-bold mt-2">{item.label}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className="block md:hidden">
                        <div className="justify-center flex flex-col items-center mt-8">
                            <div className="grid grid-cols-4">
                                {
                                    joinSocials.map(({Icon, url, label}, idx) => (
                                        <div key={idx}>
                                            <Button
                                                icon={Icon}
                                                className="text-primary mb-2"
                                                variant={"join-small"}
                                                iconSize={20}
                                                onClick={() => {
                                                    window.open(url, "_blank");
                                                }}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
