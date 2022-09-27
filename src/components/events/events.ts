import {EVENT_STATUS, EventProps} from "./EventCard";

export const events: EventProps[] = [
    {
        idx: 0,
        title: "Getting started with open source",
        description: "We will be talking about how beginner can start their open source journey and blah blah",
        date: new Date("2020/10/10"),
        timing: "6pm - 9pm",
        speaker: "Dhiraj Chauhan",
        speakerSocials: {
            twitter: "https://twitter.com/cdhiraj40",
            github: "https://github.com/cdhiraj40",
            linkedin: "https://linkedin.com/cdhiraj40",
        },
        imageLink: "https://picsum.photos/200/300",
        venue: "Discord",
        venueLink: "https://discord.com/invite/WYFskJZY8z",
        registrationLink: "https://discord.com/invite/WYFskJZY8z",
        status: EVENT_STATUS.UPCOMING
    },
]