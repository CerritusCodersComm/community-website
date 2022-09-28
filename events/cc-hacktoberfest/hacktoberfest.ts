import {EVENT_STATUS, EventProps, SubEventProps} from "../../src/types/event_types";

export const events: EventProps[] = [
    {
        idx: 0,
        eventID: "hacking-the-hacktoberfest",
        title: "Hacking The HACKTOBERFEST",
        about: "Hacking The HACKTOBERFEST is a month long event with various sessions to encourage HACKTOBERFEST in the community",
        description: `# Hacking The HACKTOBERFEST
## _An event full of learn, code and collaborate to encourage students to participate in HACKTOBERFEST_

**Hacking The HACKTOBERFEST** is a month long event with various sessions to encourage HACKTOBERFEST in the community. It is going to be a month long journey commencing from 1st October to 31st October, 2022.
The event is open for every individual who are interested in contributing to open-source. 

## What is HACKTOBERFEST?
> HACKTOBERFEST is a month-long celebration of open-source software by DigitalOcean that encourages participation in giving back to the open-source community. Developers get involved by completing pull requests, participating in events, and donating to open source projects. During this event, anyone can support open source by contributing changes and earn limited-edition swag(only first 40,000 contributors).

## Offering

- Students get the opportunity to learn, code and collaborate in the field of Open Source Development.
- 10+ beginner friendly projects to contribute in the HACKTOBERFEST
- Mentorship from the community.
- Top Contributors will be receiving swags apart from the HACKTOBERFEST swags.

## How to earn Swags?

i. **Community Swags**
- Register anytime between October 1 and October 31 for both Hacking The HACKTOBERFEST and HACKTOBERFEST.

- Pull requests can be made in the given below projects. Depending on the availability of the swags you may or may not be getting swags for making pull requests to other projects.  

- Have 4 pull/merge requests accepted between October 1 and October 31 to complete HACKTOBERFEST

- Top 5 contributors will complete HACKTOBERFEST with us will be receiving swags.  

ii. **HACKTOBERFEST Swags**
- Register anytime between October 1 and October 31

- Pull requests can be made in any GITHUB or GITLAB hosted project that’s participating in HACKTOBERFEST (look for the “hacktoberfest” topic)

- Project maintainers must accept your pull/merge requests for them to count toward your total

- Have 4 pull/merge requests accepted between October 1 and October 31 to complete HACKTOBERFEST

- The first 40,000 participants (maintainers and contributors) who complete HACKTOBERFEST can elect to receive one of two prizes: a tree planted in their name, or the HACKTOBERFEST 2022 t-shirt.
## How to participate?
i. Register for HACKTOBERFEST 2022
- Register for HACKTOBERFEST 2022 by clicking [here](https://hacktoberfest.com/).

ii. Register for Hacking The HACKTOBERFEST
- Register for Hacking The HACKTOBERFEST by clicking [here](https://docs.google.com/forms/d/e/1FAIpQLSfrk3X-CVHakn69h54sHbGiSmab8RKdCrit9dDSxVj6N6VbrA/viewform).

iii. Join the Discord Server by clicking [here](https://discord.com/invite/WYFskJZY8z).

**Note: To receive community swags registration on both event is important.**

## FAQ

1. **Is participating in Hacking The HACKTOBERFEST free?**\n
Yes! Every events organized by Cerritus Coders will always be free of cost!

2. **Will I get paid for participating?**\n
No! however, we have amazing swags and other rewards for our participants!

3. **What is the difference between HACKTOBERFEST and Hacking The HACKTOBERFEST?**\n
The only main difference is that HACKTOBERFEST is a global event that Hacking The HACKTOBERFEST aims to promote in the local community to encourage folks to get started with open-source.

## Code of Conduct
Cerritus Coders is an inclusive community of students. We follow our code of conduct for every event and expect the same from every attendees. You can read the code of conduct from [here](https://github.com/Hack-Club-SRM/Code-of-Conduct).
`,
        startingDate: "2022/10/01 ",
        endingDate: "2022/10/31",
        // timing: "6pm - 9pm",
        speaker: "Cerritus Coders",
        speakerImage: "https://avatars.githubusercontent.com/cerrituscoderscomm",
        speakerSocials: {
            twitter: "https://twitter.com/cerrituscoders",
            github: "https://github.com/cerrituscoderscomm",
            linkedin: "https://linkedin.com/company/cerrituscoders",
        },
        imageLink: "https://www.shutterstock.com/image-photo/wood-alphabet-letter-word-tbd-600w-1823980877.jpg",
        venue: "Discord",
        venueLink: "https://discord.com/invite/WYFskJZY8z",
        registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfrk3X-CVHakn69h54sHbGiSmab8RKdCrit9dDSxVj6N6VbrA/viewform",
        status: EVENT_STATUS.UPCOMING
    },
]
export const subevents: SubEventProps[] = [
    {
        idx: 0,
        id: "hacktoberfest_sub_1",
        title: "1st October, 2022",
        // cardTitle: "Hacking The HACKTOBERFEST: Opening Ceremony",
        // url: "https://www.youtube.com/channel/UCwdeEkNRifkL0tZrTPx85Ug",
        // cardSubtitle: "YouTube Live Stream: 8pm",
        // cardDetailedText: `In this live stream, we will be talking about the event, its overview, schedule and different
        //  projects that contributors can contribute to.It will be a great opportunity for the participants to get to know`
    }, {
        idx: 1,
        id: "hacktoberfest_sub_2",
        title: "8th October, 2022",
        // cardTitle: "How to become a better open source contributor through HACKTOBERFEST",
        // cardSubtitle: "Twitter Space Live: 8pm",
        // url: "https://twitter.com/cerrituscoders",
        // cardDetailedText: "This twitter space will help you get detailed understanding of open source contributions and how you can become better contributor through HACKTOBERFEST."
    }, {
        idx: 2,
        id: "hacktoberfest_sub_3",
        title: "17th October, 2022",
        cardTitle: "To Be Decided",
        url: "",
        cardDetailedText: `Soon will be updated`
    }, {
        idx: 3,
        id: "hacktoberfest_sub_3",
        title: "31st October, 2022",
        cardTitle: "Hacking The HACKTOBERFEST: Closing Ceremony",
        url: "https://www.youtube.com/channel/UCwdeEkNRifkL0tZrTPx85Ug",
        cardDetailedText: `TBD`
    },
]