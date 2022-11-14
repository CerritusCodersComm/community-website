import {EVENT_STATUS, EventProps} from "../../types/event_types";

export const events: EventProps[] = [
    {
        idx: 0,
        eventID: "hacking-the-hacktoberfest",
        title: "Hacking The",
        colorfulTitle: "HACKTOBERFEST",
        about: "Hacking The HACKTOBERFEST is a month-long event with various sessions to encourage HACKTOBERFEST in the community",
        description: ` ## _An event full of learning, coding, and collaboration to encourage students to participate in HACKTOBERFEST_

**Hacking The HACKTOBERFEST** is a month-long event with various sessions to encourage HACKTOBERFEST in the community. It will be a month-long journey starting from 1st October to 31st October 2022. The event is open to every individual who is interested in contributing to open-source.

## What is HACKTOBERFEST?
> HACKTOBERFEST is a month-long celebration of open-source software by DigitalOcean that encourages participation in giving back to the open-source community. Developers get involved by completing pull requests, participating in events, and donating to open-source projects. During this event, anyone can support open source by contributing changes and earn limited-edition swag(only the first 40,000 contributors).

## Offering

- Students get the opportunity to learn, code, and collaborate in the field of Open Source Development.
- 10+ beginner-friendly projects to contribute to the HACKTOBERFEST
- Mentorship from the community.
- Top Contributors will be receiving swags apart from the HACKTOBERFEST swags.

## How to earn Swags?

i. **Community Swags**
- Register anytime between October 1 and October 31 for both Hacking The HACKTOBERFEST and HACKTOBERFEST.

- Pull requests can be made in the given below projects. Depending on the availability of the swags you may or may not be getting swags for making pull requests to other projects.  

- Have 4 pull/merge requests accepted between October 1 and October 31 to complete HACKTOBERFEST

- Top 5 contributors who will complete HACKTOBERFEST with us and will be receiving swags.  

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

**Note: To receive community swags registration for both events is important.**

## FAQ

1. **Is participating in Hacking The HACKTOBERFEST free?**\n
Yes! Every event organized by Cerritus Coders will always be free of cost!

2. **Will I get paid for participating?**\n
No! however, we have amazing swags and other rewards for our participants!

3. **What is the difference between HACKTOBERFEST and Hacking The HACKTOBERFEST?**\n
The only main difference is that HACKTOBERFEST is a global event that Hacking The HACKTOBERFEST aims to promote in the local community to encourage folks to get started with open-source.

## Code of Conduct
Cerritus Coders is an inclusive community of students. We follow our code of conduct for every event and expect the same from every attendee. You can read the code of conduct from [here](https://github.com/CerritusCodersComm/CerritusCodersComm/blob/main/CodeOfConduct.md).
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
        imagePath: require("../../assets/images/events/hth/hacking-the-hacktoberfest-banner.png"),
        imageLink: "https://drive.google.com/uc?export=view&id=1ZHNd0F4-qEa2GATMyFXw4j_1I9fx6inf",
        venue: "Discord",
        venueLink: "https://discord.com/invite/WYFskJZY8z",
        registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfrk3X-CVHakn69h54sHbGiSmab8RKdCrit9dDSxVj6N6VbrA/viewform",
        status: EVENT_STATUS.UPCOMING,
        subEvents:
            [
                {
                    idx: 0,
                    id: "hacktoberfest_sub_1",
                    date: "1st October, 2022 <br/> 8pm",
                    imagePath: "https://drive.google.com/uc?export=view&id=1ZHNd0F4-qEa2GATMyFXw4j_1I9fx6inf",
                    title: "Opening Ceremony",
                    venueLink: "https://www.youtube.com/channel/UCwdeEkNRifkL0tZrTPx85Ug",
                    about: "YouTube Live Stream: 8pm",
                    description: `In this live stream, we will be talking about the event, its overview, schedule and different
         projects that contributors can contribute to. It will be a great opportunity for the participants to get to know`,
                    venue: "YouTube",
                },
                {
                    idx: 1,
                    id: "hacktoberfest_sub_2",
                    date: "8th October, 2022",
                    imagePath: "https://drive.google.com/uc?export=view&id=1kq_J-KoqzM0lbhbehx90XYPrue9dsVDF",
                    title: "Becoming a better open source contributor through HACKTOBERFEST",
                    about: "Twitter Space Live: 8pm",
                    venueLink: "https://twitter.com/cerrituscoders",
                    description: "This twitter space will help you get detailed understanding of open source " +
                        "contributions and how you can become better contributor through HACKTOBERFEST.",
                    venue: "Twitter",

                },
                {
                    idx: 3,
                    id: "hacktoberfest_sub_3",
                    date: "31st October, 2022 <br/> 8pm",
                    title: "Closing Ceremony",
                    about: "YouTube Live Stream: 8pm",
                    venueLink: "https://www.youtube.com/channel/UCwdeEkNRifkL0tZrTPx85Ug",
                    description: `In this live stream, we will be ending our event by talking about event stats, 
                    appreciating the contributors and sharing future plans.`,
                    venue: "YouTube",
                },
            ],
        media: [
            require("../../assets/images/events/hth/media/1.png"),
            require("../../assets/images/events/hth/media/2.png"),
            require("../../assets/images/events/hth/media/3.png"),
        ]
    },
    {
        idx: 1,
        eventID: "summer-bootcamp-22",
        title: "Summer Bootcamp '22",
        about: "This bootcamp is for beginners to get familiar with different tech stacks.",
        description: `
## _A bootcamp to help students kick start their journey with tech stacks like Android, Web development, etc._

**Summer Bootcamp '22** is a 4 week long bootcamp with various sessions to encourage HACKTOBERFEST in the community. It starts from June 4th and ends on June 26th.
The event is open for every individual who is a beginner and wishes to learn about that specific tech stack. 

## What will happen in the BootCamp?

There will be multiple sessions held for projects in different domains in June. 
The theme for this year's bootcamp is "Learning through Projects". 
The Bootcamp will consist of 4 projects held every week consisting of tech stacks: 
1. Android App Development (4th and 5th June)
2. Web Development (11th and 12th June)
3. Blockchain (18th and 19th June)
4. Discord Bots (25th and 26th June)
Apart from these technical sessions we will also host "Fun Sessions".

## What will you get out of it?

As a beginner you will get to learn and explore different tech domains. You will get hands-on experience on 4 projects. You will get to work alongside others folks and help each other grow.

## Who can apply?
Anyone who is interested can apply! 

## What if I cannot join?
The timings of the each session will be preplanned and discussed in the community. The video recordings will also be available on our youtube channel. This form's purpose is to get fellow community members suggestion about which projects they would like to work on!

## Code of Conduct
Cerritus Coders is an inclusive community of students. We follow our code of conduct for every event and expect the same from every attendees. You can read the code of conduct from [here](https://github.com/CerritusCodersComm/.github/blob/main/CodeOfConduct.md).
`,
        startingDate: "2022/6/04 ",
        endingDate: "2022/6/26",
        // timing: "6pm - 9pm",
        speaker: "Cerritus Coders",
        speakerImage: "https://avatars.githubusercontent.com/cerrituscoderscomm",
        speakerSocials: {
            twitter: "https://twitter.com/cerrituscoders",
            github: "https://github.com/cerrituscoderscomm",
            linkedin: "https://linkedin.com/company/cerrituscoders",
        },
        imagePath: require("../../assets/images/events/summer-bootcamp22/summer-bootcamp-banner.png"),
        imageLink: "https://drive.google.com/uc?export=view&id=1qWFcZIFPXY2CM4MC_iWR-s4v6ZHAr2lG",
        venue: "Discord",
        venueLink: "https://discord.com/invite/WYFskJZY8z",
        registrationLink: "https://forms.gle/a4yEV6uGKMy1CYnx8",
        status: EVENT_STATUS.PAST
    },

]
