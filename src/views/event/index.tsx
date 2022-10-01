import React, {FC, useState} from "react";
import {FaCalendarAlt, FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import {SiGooglemaps} from "react-icons/si";
import {Chrono} from "react-chrono";
import {subevents} from "../../components/event/events";
import {openWebLink, parseDateWithYear} from "../../utils";
import {EventProps} from "../../types/event_types";
import ReactMarkdown from "react-markdown";
import {projects} from "../../components/event/projects";
import {ProjectCard} from "../../components/ProjectCard";


export const EventView: FC<EventProps> = (props) => {
    const startingDate = props.startingDate ? parseDateWithYear(new Date(props.startingDate)) : "TBD"
    const endingDate = props.endingDate ? parseDateWithYear(new Date(props.endingDate)) : null

    return (
        <div className="bg-[#DCF7E7] text-black">
            <div className="hero p-28">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={props.imageLink} className="max-w-xlg rounded-lg shadow-2xl"
                         alt={"event image"}/>
                    <div className="ml-10 text-center">
                        <h1 className="text-4xl font-bold">{props.title}</h1>
                        <div className="text-[18px] py-6 text-left">
                            <h1 className="underline underline-offset-8 text-2xl">Event Details:</h1>
                            <div className="mt-4 flex space-x-2 items-center">
                                <SiGooglemaps/>
                                <p>Venue: </p>
                                {
                                    props.venueLink ? (
                                        <span className="font-bold" onClick={
                                            () => window.open(props.venueLink, "_blank")
                                        } style={{cursor: 'pointer'}}
                                        >{props.venue}</span>
                                    ) : <span>{props.venue}</span>
                                }

                            </div>
                            <div className="grid grid-cols-2 mt-2">
                                <div className="flex space-x-2 items-center">
                                    <FaCalendarAlt/>
                                    {
                                        endingDate ? (
                                            <h2>
                                                {startingDate} - {endingDate}
                                            </h2>
                                        ) : (
                                            <h2>{startingDate}</h2>
                                        )
                                    }
                                </div>
                                {props.timing ?
                                    <h2 className="text-right">{`Timing: ${props.timing}`}</h2> : null
                                }
                            </div>
                        </div>
                        <div className="text-[18px] mt-5 text-left">
                            <h1 className="underline underline-offset-8 text-2xl">Speaker Details:</h1>
                            <div className="mt-4 grid grid-cols-2">
                                <div className="flex space-x-3 items-center">
                                    <img
                                        className='rounded-full'
                                        width={48}
                                        height={48}
                                        src={props.speakerImage}
                                        alt='speaker image'/>
                                    <p
                                        className='col-span-5'>
                                        {props.speaker}
                                    </p>
                                </div>
                                <div className="flex space-x-3 items-center">
                                    {
                                        props.speakerSocials.github ? (
                                            <FaGithub className="text-black hover:text-commColor" onClick={
                                                () => openWebLink(props.speakerSocials.github)
                                            } style={{cursor: 'pointer'}}
                                            />
                                        ) : null
                                    }
                                    {
                                        props.speakerSocials.twitter ? (
                                            <FaTwitter className="text-black hover:text-commColor" onClick={
                                                () => openWebLink(props.speakerSocials.twitter)
                                            } style={{cursor: 'pointer'}}
                                            />
                                        ) : null
                                    }
                                    {
                                        props.speakerSocials.linkedin ? (
                                            <FaLinkedin className="text-black hover:text-commColor" onClick={
                                                () => openWebLink(props.speakerSocials.linkedin)
                                            } style={{cursor: 'pointer'}}
                                            />
                                        ) : null
                                    }
                                </div>
                                {
                                    props.registrationLink ? (
                                        <div className="mt-5">
                                            <button className="btn btn-primary bg-commColor"
                                                    onClick={() => openWebLink(props.registrationLink)}>
                                                Register
                                            </button>
                                        </div>) : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-12">
                <h1 className="underline underline-offset-8 font-bold text-4xl text-center">Event OverView</h1>
                <article className='py-6 mx-auto text-xl prose'>
                    <ReactMarkdown children={props.description}/>
                </article>

            </div>
            <div className="mx-60 p-12">
                <h1 className="underline underline-offset-8 font-bold text-4xl text-center mb-4">Event Schedule</h1>
                {/*<p className="py-6 text-xl text-center">Provident cupiditate voluptatem et in. Qasdkashidluashlidg*/}
                {/*    yuiasg d asdh oasydh iouas dghiuasduasuy dguyasgduasgyd asd asuaerat fugiat ut assumenda excepturi*/}
                {/*    exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>*/}
                <Chrono
                    items={subevents}
                    slideShow
                    mode="VERTICAL_ALTERNATING"
                >
                    <div>
                        <div>
                            <a className="text-lg font-bold text-black mt-2"
                               href="https://www.youtube.com/watch?v=hNISiClTFyU">
                                Hacking The HACKTOBERFEST: Opening Ceremony
                            </a>
                            <h3 className="text-md font-bold text-[#3C73C7] mb-2">YouTube Live Stream: 8pm</h3>
                            <p>
                                In this live stream, we will be talking about the event, its overview, schedule and
                                different projects that contributors can contribute to.
                                Along with that, we will also be talking about how interested
                                students can participate and become the part of Hacking the HACKTOBERFEST.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <a className="text-lg font-bold mt-2"
                               href="https://twitter.com/cerrituscoders">
                                How to become a better open source contributor through HACKTOBERFEST
                            </a>
                            <h3 className="text-md font-bold text-[#3C73C7] mb-2">Twitter Space Live: 8pm</h3>
                            <p>
                                This twitter space will help you get detailed understanding of open source contributions
                                and how you can become better contributor through HACKTOBERFEST.
                            </p>
                        </div>
                    </div>
                </Chrono>
            </div>

            <div className="p-12">
                <h1 className="underline underline-offset-8 font-bold text-4xl text-center">Projects</h1>

                <div
                    className="tracking-wide leading-relaxed text-center px-20 py-10">
                    <div className='flex flex-wrap justify-center gap-20'>
                        {projects.map((props, idx) => (
                            <ProjectCard {...props} key={idx} idx={props.idx}/>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};
