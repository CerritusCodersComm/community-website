import React from "react";
import {ellipsisText, getWebURL, parseDate} from "../../utils";
import {SiGooglemaps} from "react-icons/si";
import {FaLinkedin, FaTwitter, FaGithub} from "react-icons/fa";
import Link from "next/link";

export interface EventProps {
    idx: number;
    eventID: string;
    title: string;
    description: string;
    date: Date;
    timing: string;
    speaker: string;
    speakerSocials: SpeakerSocials;
    imageLink: string;
    venue: string;
    venueLink: string;
    registrationLink?: string;
    status: EVENT_STATUS;
}

interface SpeakerSocials {
    twitter?: string;
    linkedin?: string;
    github?: string;
}


export enum EVENT_STATUS {
    LIVE = "Join Now",
    UPCOMING = "Set Reminder", // or show register button
    PAST = "Watch recording",
}


export const EventCard = ({
                              eventID,
                              title,
                              description,
                              date,
                              timing,
                              speaker,
                              speakerSocials,
                              imageLink,
                              venue,
                              venueLink,
                              registrationLink,
                              status,
                          }: EventProps) => {

    const eventStatus = () => {
        if (status === EVENT_STATUS.LIVE) return EVENT_STATUS.LIVE
        else if (status === EVENT_STATUS.UPCOMING) return EVENT_STATUS.UPCOMING
        else return EVENT_STATUS.PAST
    }

    return (
        <div className="card w-96 shadow-xl text-[#464343]">
            <figure className='relative'>
                <div className='absolute flex w-60 h-60 transition-opacity opacity-0 bg-slate-700 hover:opacity-90'>
                    <Link href={`/events/${getWebURL(eventID)}`}>
                        <button className='m-auto btn btn-secondary'>Learn More</button>
                    </Link>
                </div>
                <div
                    className='absolute flex w-full h-10 items-center text-white text-[18px] bottom-0'>
                    <div className="absolute left-0 mx-4">
                        <span>Speaker: {ellipsisText(speaker, 16)}</span>
                    </div>
                    <div className="absolute right-0 flex space-x-2 mr-4 items-center">
                        {
                            speakerSocials.github ? (
                                <FaGithub className="text-white" onClick={
                                    () => window.open(speakerSocials.github, "_blank")
                                } style={{cursor: 'pointer'}}
                                />
                            ) : null
                        }
                        {
                            speakerSocials.twitter ? (
                                <FaTwitter className="text-white" onClick={
                                    () => window.open(speakerSocials.twitter, "_blank")
                                } style={{cursor: 'pointer'}}
                                />
                            ) : null
                        }
                        {
                            speakerSocials.linkedin ? (
                                <FaLinkedin className="text-white" onClick={
                                    () => window.open(speakerSocials.linkedin, "_blank")
                                } style={{cursor: 'pointer'}}
                                />
                            ) : null
                        }
                    </div>
                </div>
                <img className='w-60 h-60' src={imageLink} alt="Event Image"/>
            </figure>
            <div className="p-6 bg-white text-left">
                <div className="-mt-4 flex space-x-2 items-center">
                    <SiGooglemaps/>
                    {
                        venueLink ? (
                            <span className="font-bold" onClick={
                                () => window.open(venueLink, "_blank")
                            } style={{cursor: 'pointer'}}
                            >{venue}</span>
                        ) : <span>{venue}</span>
                    }

                </div>
                <div className="grid grid-cols-2 mb-2">
                    <h2>{parseDate(date)}</h2>
                    <h2 className="text-right text-black">{timing}</h2>
                </div>
                <h2 className="card-title text-black">{title}</h2>
                <p className="tracking-tight">{ellipsisText(description, 112)}</p>
                <div className="relative p-10 mb-2">
                    <div className="absolute left-0">
                        <button className="btn btn-primary hover:bg-commColor">{eventStatus()}</button>
                    </div>
                    {
                        registrationLink ? (
                            <div className="absolute right-0">
                                <button className="btn btn-primary hover:bg-commColor">Register</button>
                            </div>) : null
                    }
                </div>
            </div>
        </div>
    );
};
