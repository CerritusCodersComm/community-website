import React, {FC} from "react";
import {events} from "./events";
import {EventCard} from "./EventCard";

export const EventSection: FC = () => {
    return (
        <div className="bg-[#F1F6F0] text-black p-4 pt-0">
            <div className="font-satoshi">
                <div className="pl-4">
                    <div className="text-5xl font-bold tracking-widest pl-8 pt-4">Events</div>
                    <div className="w-[235px] h-8 border-underLine border-b-6 rounded-smileUnderLine "></div>
                </div>
                <div
                    className="mx-auto text-[20px] tracking-wide leading-relaxed text-center text-[#7D7D7D] p-20">
                    <div className='flex flex-wrap justify-center gap-40'>
                        {events.map((props, idx) => (
                            <EventCard {...props} key={idx} idx={props.idx}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};