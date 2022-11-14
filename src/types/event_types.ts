export interface EventProps {
    idx: number;
    eventID: string;
    title: string;
    colorfulTitle?: string;
    about: string;
    description: string;
    startingDate: string;
    endingDate: string;
    timing?: string;
    speaker: string;
    speakerImage: string
    speakerSocials: SpeakerSocials;
    imagePath: any;
    imageLink?: string;
    venue: string;
    venueLink: string;
    registrationLink?: string;
    scheduleArray?: Schedule[];
    status: EVENT_STATUS;
    subEvents?: SubEventProps[];
    media?: any[];
}

interface SpeakerSocials {
    twitter?: string;
    linkedin?: string;
    github?: string;
}

interface Schedule {
    title: string;
    description: string;
    date: Date;
    timing: string;
    thumbnailLink?: string;
    venue: string;
    venueLink: string;
}

export enum EVENT_STATUS {
    LIVE = "Join Now",
    UPCOMING = "Set Reminder", // or show register button
    PAST = "Watch recording",
}

export interface SubEventProps {
    idx: number;
    id?: string;
    title?: string;
    about?: string;
    description?: string | string[];
    date: string;
    imagePath?: any;
    venueLink?: string;
    venue: string;
}