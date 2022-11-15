import React, {FC} from "react";
import {openWebLink, parseDateWithYear} from "../../utils";
import {EventProps} from "../../types/event_types";
import ReactMarkdown from "react-markdown";
import {FaCalendarAlt, FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import {SiGooglemaps} from "react-icons/si";
import {SubEvents} from "../../components/event/SubEvents";


export const EventView: FC<EventProps> = (props) => {
    const startingDate = props.startingDate ? parseDateWithYear(new Date(props.startingDate)) : null
    const endingDate = props.endingDate ? parseDateWithYear(new Date(props.endingDate)) : null

    const isEventEnded = () => {
        return new Date() > new Date(props.endingDate);
    }

    return (
        <div className="bg-[#DCF7E7]">
            <section className="relative md:min-h-screen">

                <div className="max-w-6xl mx-auto px-4 sm:px-6">

                    {/* Hero content */}
                    <div className="pt-32 pb-12 md:pt-40">

                        {/* Section header */}
                        <div className="text-center pb-2 md:pb-4">
                            <h1 className="text-[40px] font-satoshi md:text-7xl text-black font-extrabold leading-tighter  mb-4"
                                data-aos="zoom-y-out">{props.title}
                                {
                                    props.colorfulTitle ?
                                        <span
                                            className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"
                                        > {props.colorfulTitle} </span>
                                        : null
                                }
                            </h1>
                            <div className="max-w-3xl mx-auto">
                                <p className="text-xl text-gray-600 mb-4" data-aos="zoom-y-out" data-aos-delay="150">
                                    {props.about}
                                </p>
                            </div>
                        </div>

                        {/* Hero image */}
                        <div>
                            <div className="relative flex justify-center mb-8" data-aos="zoom-y-out"
                                 data-aos-delay="450">
                                <div className="flex flex-col justify-center">
                                    <img className="mx-auto rounded-md w-[768] h-[432]" src={props.imagePath}
                                         alt={`${props.title} Image`}/>
                                </div>
                            </div>

                            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                                 data-aos="zoom-y-out" data-aos-delay="300">
                                <div>
                                    {
                                        isEventEnded() ?
                                            <button className="btn text-white border-0 bg-primary hover:bg-primary shadow-[#dcdde1] shadow-md
                                hover:shadow-xl hover:transition-all w-full mb-4 sm:w-auto sm:mb-0 disabled:bg-primary
                                disabled:text-white disabled:opacity-80"
                                                    disabled={true}
                                                    onClick={() => openWebLink(props.registrationLink)}
                                            >Register here
                                            </button>
                                            :
                                            <button className="btn text-white border-0 bg-primary hover:bg-primary
                                            shadow-[#dcdde1] shadow-md hover:shadow-xl hover:transition-all w-full mb-4 sm:w-auto sm:mb-0"
                                                    onClick={() => openWebLink(props.registrationLink)}
                                            >Register here
                                            </button>

                                    }
                                </div>
                                <div>
                                    <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4
                                    shadow-[#dcdde1] shadow-md hover:shadow-xl hover:transition-all"
                                       href="#details"
                                       rel="noopener noreferrer"
                                    >Learn more</a>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* EventID Media  */}
            {
                props.summary ? (
                    <section className="relative text-black" id="schedule">

                        <div className="max-w-6xl mx-auto px-4 sm:px-6">
                            <div className="pb-12 md:pb-10">
                                {/* Section header */}
                                <div className="text-center pb-2 md:pb-4" id="summary">
                                    <h1 className="text-[40px] md:text-5xl font-satoshi  text-black font-extrabold leading-tighter  mb-4"
                                        data-aos="zoom-y-out">
                                        Event Summary
                                    </h1>
                                </div>
                                <div className="max-w-3xl mx-auto">
                                    <article className='font-satoshi text-black mx-auto md:text-xl prose'>
                                        <ReactMarkdown children={'> Note: This event has finished.'}/>
                                        {props.summary}
                                    </article>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : null
            }

            {/* EventID Details */}
            <section className="relative" id="details">

                <div className="max-w-6xl mx-auto px-4 sm:px-6">

                    {/* Hero content */}
                    <div className="pb-12 md:pb-10">

                        {/* Section header */}
                        <div className="text-center pb-2 md:pb-4" id="details">
                            <h1 className="text-[40px] md:text-5xl font-satoshi  text-black font-extrabold leading-tighter  mb-4"
                                data-aos="zoom-y-out">
                                Event Details
                            </h1>
                            <div className="max-w-3xl mx-auto md:text-2xl text-xl text-black">
                                <div className="py-6">
                                    <div className="mt-4 flex space-x-2 justify-center items-center">
                                        <SiGooglemaps/>
                                        <p>Venue: </p>
                                        {
                                            props.venueLink ? (
                                                <p className="font-bold" onClick={
                                                    () => window.open(props.venueLink, "_blank")
                                                } style={{cursor: 'pointer'}}
                                                >{props.venue}</p>
                                            ) : <p>{props.venue}</p>
                                        }

                                    </div>
                                    <div className="flex space-x-2 justify-center items-center">
                                        {
                                            endingDate ? (
                                                <>
                                                    <FaCalendarAlt/>
                                                    <h2>
                                                        {startingDate} - {endingDate}
                                                    </h2>
                                                </>
                                            ) : (
                                                startingDate ? (
                                                <>
                                                    <FaCalendarAlt/>
                                                    <h2>{startingDate}</h2>
                                                </>
                                            )
                                                : null
                                            )
                                        }
                                        {props.timing ?
                                            <h2>{`Timing: ${props.timing}`}</h2> : null
                                        }
                                    </div>
                                </div>
                                <div className="mt-5 text-center">
                                    <h1 className="font-bold underline underline-offset-8 text-2xl">Speaker Details</h1>
                                    <div className="mt-4 text-center">
                                        <div className="flex space-x-3 justify-center items-center">
                                            <img
                                                className='rounded-full'
                                                width={64}
                                                height={64}
                                                src={props.speakerImage}
                                                alt='speaker image'/>
                                            <p
                                                className='col-span-5'>
                                                {props.speaker}
                                            </p>
                                        </div>
                                        <div className="mt-5 text-center">
                                            <h1 className="font-bold underline underline-offset-8 text-2xl">Speaker
                                                Socials</h1>
                                            <div className="mt-4 text-center">
                                                <div className="flex space-x-3 justify-center items-center">
                                                    {
                                                        props.speakerSocials.github ? (
                                                            <FaGithub className="text-black text-3xl hover:text-primary"
                                                                      onClick={
                                                                          () => openWebLink(props.speakerSocials.github)
                                                                      } style={{cursor: 'pointer'}}
                                                            />
                                                        ) : null
                                                    }
                                                    {
                                                        props.speakerSocials.twitter ? (
                                                            <FaTwitter
                                                                className="text-black text-3xl hover:text-primary"
                                                                onClick={
                                                                    () => openWebLink(props.speakerSocials.twitter)
                                                                } style={{cursor: 'pointer'}}
                                                            />
                                                        ) : null
                                                    }
                                                    {
                                                        props.speakerSocials.linkedin ? (
                                                            <FaLinkedin
                                                                className="text-black text-3xl hover:text-primary"
                                                                onClick={
                                                                    () => openWebLink(props.speakerSocials.linkedin)
                                                                } style={{cursor: 'pointer'}}
                                                            />
                                                        ) : null
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* EventID OverView */
            }
            <section className="relative">

                <div className="max-w-6xl mx-auto px-4 sm:px-6">

                    <div className="pb-12 md:pb-10">

                        {/* Section header */}
                        <div className="text-center pb-2 md:pb-4" id="overview">
                            <h1 className="text-[40px] md:text-5xl font-satoshi  text-black font-extrabold leading-tighter  mb-4"
                                data-aos="zoom-y-out">
                                Event Overview
                            </h1>
                        </div>

                        <div className="max-w-3xl mx-auto">
                            <article className='font-satoshi text-black mx-auto md:text-xl prose'>
                                <ReactMarkdown children={props.description}/>
                            </article>
                        </div>
                    </div>

                </div>
            </section>

            {/* Sub Events  */}
            {
                props.subEvents ? (
                    <section className="relative text-black" id="schedule">

                        <div className="max-w-6xl mx-auto px-4 sm:px-6">
                            <div className="pb-12 md:pb-10">

                                {/* Section header */}
                                <div className="text-center pb-2 md:pb-4" id="overview">
                                    <h1 className="text-[40px] md:text-5xl font-satoshi  text-black font-extrabold leading-tighter  mb-4"
                                        data-aos="zoom-y-out">
                                        Event Schedule
                                    </h1>
                                </div>
                                {
                                    props.subEvents.map((subevent, index) => (
                                        <SubEvents {...subevent} key={index} idx={props.idx}/>
                                    ))
                                }
                            </div>
                        </div>
                    </section>
                ) : null
            }


            {/* EventID Media  */}
            {
                props.media ? (
                    <section className="relative text-black" id="schedule">

                        <div className="max-w-6xl mx-auto px-4 sm:px-6">
                            <div className="pb-12 md:pb-10">

                                {/* Section header */}
                                <div className="text-center pb-2 md:pb-4" id="overview">
                                    <h1 className="text-[40px] md:text-5xl font-satoshi  text-black font-extrabold leading-tighter  mb-4"
                                        data-aos="zoom-y-out">
                                        Event Media
                                    </h1>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 place-items-center md:gap-4 gap-2 ">
                                    {
                                        props.media?.map((media, index) => (
                                            <img className="rounded-md" alt={`${props.title} media`} src={media}
                                                 key={index}/>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
                ) : null
            }
        </div>

    );
}
