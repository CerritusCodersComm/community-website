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
        imagePath: "/images/events/hth/hacking-the-hacktoberfest-banner.png",
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
            "/images/events/hth/media/1.png",
            "/images/events/hth/media/2.png",
            "/images/events/hth/media/3.png",
        ],
        summary:"Hacking the HACKTOBERFEST an event, meant to be an extension for Hacktoberfest, where we helped beginners get into open source, with a curated set of repositories to contribute to. In the 10+ repos we had, we got a total of 25+ valid PRs in this event and started the open source journey for dozens of beginners. We sent swags to the most prominent contributors for our event to give back to them for their contribution. We got a lot of positive feedback from the students who took part in this event and they stated that they learnt a lot of things by participating in our event."
    },
    {
        idx: 1,
        eventID: "summer-bootcamp-22",
        title: "Summer Bootcamp '22",
        about: "Summer bootcamp is a month-long event for beginners to get familiar and get an exposure to different tech stacks.",
        description: `
## _A bootcamp to help students kick start their journey with tech stacks like Android, Web development, etc._

**Summer Bootcamp '22** is a 4 week long bootcamp with various sessions to encourage development in the community. It starts from June 4th and ends on June 26th.
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
        imagePath: "/images/events/summer-bootcamp22/summer-bootcamp-banner.png",
        venue: "Discord",
        venueLink: "https://discord.com/invite/WYFskJZY8z",
        registrationLink: "https://forms.gle/a4yEV6uGKMy1CYnx8",
        status: EVENT_STATUS.PAST,
        media: [
            "/images/events/summer-bootcamp22/media/1.png",
            "/images/events/summer-bootcamp22/media/2.png",
            "/images/events/summer-bootcamp22/media/3.png",
            "/images/events/summer-bootcamp22/media/4.png",
        ],
        summary:"The summer bootcamp was a 4 week long bootcamp with various sessions to encourage development in the community. It starts from June 4th and ends on June 26th. The event is open for every individual who is a beginner and wishes to learn about that specific tech stack. \n" +
            "For all 4 tech stacks, we took 2 sessions, and in almost every session, we had a dozen live viewers, and a few dozen who watched the recording of the livestream/recording. The general feedback was positive, people who attended the session were able to follow through and develop with us during the bootcamp. They were able to start building projects, and we achieved our mission, that is, to help beginners start with development.",
    },
    {
        idx: 2,
        eventID: "global-hack-weeks",
        title: "Global Hack Weeks by MLH",
        about: "Global Hack Weeks by MLH are your opportunity to spend a week learning, building, and growing with the community. Each Global Hack Week features workshops, technical live streams, mini events, and more to help you grow as a technologist.",
        description: `
## _We participated as a guild to get our members involved in events such as Global Hack Week to learn and build together._

**Global Hack Week** is a week long event with workshops, technical livestreams, and mini events, to encourage development together in the community.
The event is open for everyone over the age of 13, no matter their experience or tech stack.

## What happened in this event?

You can expect to complete challenges, hear about BIG community announcements, chat at hacker hangouts, enjoy fun live sessions, build technical projects, and make new memories. 
We took a few sessions on GHW to get beginners involved in these events, as shown below, in the event media.

## What will you get out of it?

You will get to learn and explore different tech domains with the technical live streams sessions. You will get hands-on experience on mini-projects. You will get to work alongside others folks and help each other grow.

## Who can apply?
All are welcome to attend and participate in Global Hack Week no matter your experience level and student status. Hundreds of hackers who have never coded before will attend GHW. This event is geared for folks learning to code as well as experts! Minors 13 and over are welcome to attend with a parent's permission.

## Code of Conduct
Cerritus Coders is an inclusive community of students. We follow our code of conduct for every event and expect the same from every attendees. You can read the code of conduct from [here](https://github.com/CerritusCodersComm/.github/blob/main/CodeOfConduct.md).
`,
        speaker: "Cerritus Coders",
        speakerImage: "https://avatars.githubusercontent.com/cerrituscoderscomm",
        speakerSocials: {
            twitter: "https://twitter.com/cerrituscoders",
            github: "https://github.com/cerrituscoderscomm",
            linkedin: "https://linkedin.com/company/cerrituscoders",
        },
        imagePath: "/images/events/ghw/ghw-banner.png",
        venue: "Discord",
        venueLink: "https://discord.com/invite/WYFskJZY8z",
        registrationLink: "https://forms.gle/a4yEV6uGKMy1CYnx8",    //disabled anyway 
        status: EVENT_STATUS.PAST,
        subEvents:
            [
                {
                    idx: 0,
                    id: "ghw_init",
                    date: "July, 2022",
                    imagePath: "https://uploads-ssl.webflow.com/62865e59eaf6960ed5d6a8f8/62e93faf9fef87de3e9e479f_Sept-generic_website-header-short.png",
                    title: "GHW INIT",
                    venueLink: "https://ghw.mlh.io/init",
                    about: "A weeklong event, filled with technical livestreams and learning!",
                    description: `INIT is a celebration for the start of the 2023 Hackathon Season! You can expect to complete challenges, hear about BIG community announcements, chat at hacker hangouts, enjoy fun live sessions, build technical projects, and make new memories.`,
                    venue: "MLH",
                },
                {
                    idx: 1,
                    id: "ghw_sept_twitter",
                    date: "September, 2022",
                    imagePath: "https://drive.google.com/uc?export=view&id=1oDNn2Ck7A5TASd3r-l_KEYWjo2a5q50C",
                    title: "Understanding MLH : GHW",
                    about: "Twitter Space Live: 8pm",
                    venueLink: "https://twitter.com/cerrituscoders",
                    description: "This twitter space focuses on why events like GHW September are so\
                    important for beginners, and we encourage everyone to participate in it, and also how to participate in the same.",
                    venue: "Twitter",

                },
                {
                    idx: 2,
                    id: "ghw_sept",
                    date: "September, 2022",
                    imagePath: "https://drive.google.com/uc?export=view&id=1kq_J-KoqzM0lbhbehx90XYPrue9dsVDF",
                    title: "GHW September",
                    about: "A weeklong event, filled with technical livestreams and learning!",
                    venueLink: "https://ghw.mlh.io/sept",
                    description: "Global Hack Week September is our beginner-friendly hacker festival and we want you to join us. You can expect to complete challenges, chat at hacker hangouts, enjoy fun live sessions, build technical projects, and make new memories.",
                    venue: "MLH",

                }
            ],
        media: [
            "/images/events/ghw/media/1.png",
            "/images/events/ghw/media/2.png",
        ],
        summary:"In this event we encouraged all of our community members to participate in GHW INIT and GHW September, and we saw a lot of results. We were one of the top guilds in these two events. \n" +
            "Almost everyday, a lot of people in our community ended up in the top 5% of the hackers in these events, and every passing day, more people took part in the event to join the fun!",
    },
    {
        idx: 3,
        eventID: "cerritus-cafe",
        title: "Cerritus Cafe",
        about: "Cerritus Cafe is an event to talk about tech, explore new domains, share projects, take sessions and guide beginners so they can kickstart their journey in that domain.",
        description: `
## _A relatively frequent, recurring event where a speaker talks about a trendy technical topic like game development to the audience in our Discord server or in a twitter space._
**Cerritus Cafe** is a recurring event that occurs in our Discord Stage channel, or a Twitter Space, and in these sessions we will talk about popular technical topics and giving guidance on these topics so that beginners can understand how to start their journey with these topics, and build with the knowledge of these sessions.

## What will happen in the Cerritus Cafe?

In the Cerritus Cafe, the speaker will give a detailed explanation of the tech stack itself, before going into detail into what they learnt, to how they learnt that information, to what they found interesting, to tips for the beginners to follow, to make their learning process simpler and better.

## What will you get out of it?

Everyone who speaks in these sessions has at least a week of experience in that tech stack, and there are often times when you wish you knew something earlier, since it would have sped up your learning process a lot. We intend to provide you with this knowledge so you can advance in your journey a lot faster!

## What if I cannot join?
The timings of the each session will be preplanned and discussed in the community. The video recordings will also be available on our youtube channel.

## Code of Conduct
Cerritus Coders is an inclusive community of students. We follow our code of conduct for every event and expect the same from every attendees. You can read the code of conduct from [here](https://github.com/CerritusCodersComm/.github/blob/main/CodeOfConduct.md).
`,
        speaker: "Cerritus Coders",
        speakerImage: "https://avatars.githubusercontent.com/cerrituscoderscomm",
        speakerSocials: {
            twitter: "https://twitter.com/cerrituscoders",
            github: "https://github.com/cerrituscoderscomm",
            linkedin: "https://linkedin.com/company/cerrituscoders",
        },
        imagePath: "/images/events/ccafe/ccafe-banner.png",
        venue: "Discord",
        venueLink: "https://discord.com/invite/WYFskJZY8z",
        registrationLink: "https://forms.gle/a4yEV6uGKMy1CYnx8",
        status: EVENT_STATUS.PAST,
        subEvents:
            [
                {
                    idx: 0,
                    id: "godot_game_dev",
                    date: "12th November, 2022</br> 8PM",
                    imagePath: "https://drive.google.com/uc?export=view&id=1ubhLrXfjEHbF_92ydozvNpEHOKJopSQ8",
                    title: "Basic 2D Platformer Game Development in Godot",
                    venueLink: "https://www.youtube.com/watch?v=FthPVQvWgCY",
                    about: "YouTube Live Stream: 8pm",
                    description: `I'm going to be talking about Godot in general, then I'm going to talk about its UI, then:
                    I will be making a 2D platformer game, with a small map, a player and an enemy, with basic scripts in each, having a few signals.`,
                    venue: "YouTube",
                },
            ],
        media: [
            "/images/events/ccafe/media/1.png",
            "/images/events/ccafe/media/2.png",
            "/images/events/ccafe/media/3.png",
            "/images/events/ccafe/media/4.png",
        ],
        summary:"In Cerritus Cafe, the core members or one of the co-leaders takes a session on a trending topic so that beginners in the community can understand and work on that topic after that session.\
        In this event, our main goal is to teach the community members to the point where they can learn about that topic by themselves with ease, and build without issues."
    },
    {
        idx: 4,
        eventID:"cerritus-connect",
        eventUrl: "http://connect.cerrituscoders.tech/",
        title: "Cerritus Connect",
        about: "Cerritus Connect is a fun-filled blend of informative talks, panel discussions, networking sessions, and much more!",
        description: `
## _This connect will be the celebration of Community's 1-year completion in December. We will be talking about our journey, past events, and future plans. Overall, it will be a place for the community to meet and hang out together._ <a>123</a>`,
        speaker: "Cerritus Coders",
        speakerImage: "https://avatars.githubusercontent.com/cerrituscoderscomm",
        speakerSocials: {
            twitter: "https://twitter.com/cerrituscoders",
            github: "https://github.com/cerrituscoderscomm",
            linkedin: "https://linkedin.com/company/cerrituscoders",
        },
        imagePath: "/images/events/cconnect/cconnect.jpg",
        venue: "DevX",
        venueLink: "https://devx.work/",
        registrationLink: "https://forms.gle/BTRNKfRqGf4KGEx29",
        status: EVENT_STATUS.PAST,
        media: [
            "/images/events/cconnect/media/1.jpg",
            "/images/events/cconnect/media/2.jpg",
            "/images/events/cconnect/media/3.jpg",
            "/images/events/cconnect/media/4.jpg",
        ],
        summary:"A meetup full of learning, networking, and celebrating our community! Cerritus Connect is an in-person tech meetup where the community comes together to learn, explore,  network, contribute and celebrate our community! Connect is a fun-filled blend of informative talks, panel discussions, networking sessions, and much more!"
    },
]
